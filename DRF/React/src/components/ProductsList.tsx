import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getProducts, getCategoryTree } from '../api/homeApi';
import { Product, Category } from '../api/types';

const ProductsList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>(searchParams.get("category_id") || "");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const [productsResponse, categoriesData] = await Promise.all([
          getProducts({
            page: currentPage,
            category_id: selectedCategory,
            search: searchQuery,
          }),
          getCategoryTree(),
        ]);
        setProducts(productsResponse.results || []);
        setTotalPages(Math.ceil((productsResponse.count || 0) / 10));
        setCategories(categoriesData || []);
      } catch (error) {
        setError("مشکلی در بارگذاری محصولات یا دسته‌بندی‌ها رخ داده است.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [currentPage, selectedCategory, searchQuery]);

  const handleFilterChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setCurrentPage(1);
    setSearchParams(categoryId ? { category_id: categoryId } : {});
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
    setSearchParams({ category_id: selectedCategory, search: e.target.value });
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    setSearchParams({ category_id: selectedCategory, search: searchQuery, page: page.toString() });
  };

  return (
    <div className="py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h1 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-6">لیست محصولات</h1>

      {/* فیلترها و جستجو */}
      <div className="mb-6">
        <div className="flex flex-col sm:flex-row gap-4 mb-4">
          <div className="flex-1">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearch}
              placeholder="جستجو در محصولات..."
              className="w-full p-2 border rounded-lg outline-none focus:border-blue-900"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              className={`px-4 py-2 rounded-lg ${
                selectedCategory === "" ? "bg-blue-900 text-white" : "bg-gray-200 text-blue-900"
              } hover:bg-blue-800 hover:text-white transition-all duration-300`}
              onClick={() => handleFilterChange("")}
            >
              همه
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                className={`px-4 py-2 rounded-lg ${
                  selectedCategory === category.id.toString()
                    ? "bg-blue-900 text-white"
                    : "bg-gray-200 text-blue-900"
                } hover:bg-blue-800 hover:text-white transition-all duration-300`}
                onClick={() => handleFilterChange(category.id.toString())}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* خطا یا لودینگ */}
      {error && <p className="text-red-600 mb-4">{error}</p>}
      {loading ? (
        <p className="text-blue-900 text-center">در حال بارگذاری...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.length === 0 ? (
            <p className="text-blue-900 text-center">محصولی یافت نشد.</p>
          ) : (
            products.map((product) => (
              <a
                key={product.id}
                href={`/products/${product.slug}`}
                className="border rounded-lg p-4 hover:shadow-lg transition-all duration-300 bg-white shadow-sm"
              >
                <img
                  src={product.cover_image || "https://via.placeholder.com/150"}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-lg mb-2"
                />
                <h3 className="text-blue-900 font-bold text-lg">{product.name}</h3>
                {product.price && (
                  <p className="text-gray-600">{`${product.price} تومان`}</p>
                )}
                <p className="text-gray-600 text-sm">{product.category}</p>
              </a>
            ))
          )}
        </div>
      )}

      {/* صفحه‌بندی */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-6">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              className={`mx-1 px-4 py-2 rounded-lg ${
                currentPage === page ? "bg-blue-900 text-white" : "bg-gray-200 text-blue-900"
              } hover:bg-blue-800 hover:text-white transition-all duration-300`}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductsList;