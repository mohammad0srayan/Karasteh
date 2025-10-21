import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { searchProducts } from "../api/homeApi";
import { Product } from "../api/types";
import { BASE_URL } from "../api/axiosConfig";

interface SearchResultsResponse {
  results: Product[];
  next: string | null;
  previous: string | null;
  count: number;
  message?: string;
}

const SearchResults: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const location = useLocation();

  useEffect(() => {
    const query = new URLSearchParams(location.search).get("q") || "";
    setSearchQuery(query);
    const fetchSearchResults = async () => {
      try {
        setLoading(true);
        setError(null);
        const response: SearchResultsResponse = await searchProducts(query, page);
        setProducts(response.results);
        setTotalPages(Math.ceil(response.count / 20)); // فرض بر این است که page_size=20 است
      } catch (error: any) {
        setError("مشکلی در بارگذاری نتایج جستجو رخ داده است");
      } finally {
        setLoading(false);
      }
    };

    if (query) {
      fetchSearchResults();
    }
  }, [location.search, page]);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  return (
    <div className="w-full my-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 className="text-blue-900 text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 text-center flex items-center justify-center">
        <i className="fa fa-search mx-3 text-blue-900"></i>
        نتایج جستجو برای "{searchQuery}"
      </h2>
      {loading ? (
        <div className="text-center text-blue-900 text-xl animate-pulse">در حال بارگذاری...</div>
      ) : error ? (
        <div className="text-center text-red-500 text-xl">{error}</div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.length === 0 ? (
              <p className="text-blue-900 text-center col-span-full">محصولی با این عبارت یافت نشد.</p>
            ) : (
              products.map((product) => (
                <div
                  key={product.id}
                  className="flex flex-col bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={
                        product.cover_image
                          ? product.cover_image.startsWith("http")
                            ? product.cover_image
                            : `${BASE_URL}${product.cover_image}`
                          : "https://via.placeholder.com/400x240?text=بدون+تصویر"
                      }
                      alt={product.name || "تصویر محصول"}
                      className="w-full h-48 sm:h-56 object-cover rounded-t-lg transition-transform duration-300 hover:scale-105"
                      onError={(e) => {
                        e.currentTarget.src = "https://via.placeholder.com/400x240?text=بدون+تصویر";
                      }}
                    />
                  </div>
                  <div className="p-4 sm:p-6 flex flex-col flex-grow">
                    <h3 className="text-lg sm:text-xl font-bold text-blue-900 mb-2 line-clamp-2">{product.name}</h3>
                    <p className="text-gray-600 text-sm sm:text-base mb-3">{product.category}</p>
                    <div className="flex flex-row justify-between items-center mt-auto">
                      {product.price && (
                        <p className="text-gray-600 text-sm sm:text-base">
                          {product.price.toLocaleString("fa-IR")} تومان
                        </p>
                      )}
                      <Link
                        to={`/products/${product.slug}`}
                        className="inline-flex items-center text-blue-900 font-bold text-sm sm:text-base hover:text-blue-950 transition-colors duration-300"
                      >
                        مشاهده محصول
                        <i className="fa fa-chevron-left mx-2"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
          {totalPages > 1 && (
            <div className="flex justify-center items-center mt-8 gap-4">
              <button
                onClick={() => handlePageChange(page - 1)}
                disabled={page === 1}
                className="px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-950 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all duration-300 flex items-center"
              >
                <i className="fa fa-chevron-right mx-2"></i>
                قبلی
              </button>
              <span className="text-blue-900 font-bold text-sm sm:text-base">{`صفحه ${page} از ${totalPages}`}</span>
              <button
                onClick={() => handlePageChange(page + 1)}
                disabled={page === totalPages}
                className="px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-950 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all duration-300 flex items-center"
              >
                بعدی
                <i className="fa fa-chevron-left mx-2"></i>
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default SearchResults;