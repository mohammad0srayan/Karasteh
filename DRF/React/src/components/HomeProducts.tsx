import { useEffect, useState } from "react";
import { getHomeProducts } from "../api/homeApi";
import { HomeProduct } from "../api/types";

const HomeProducts: React.FC = () => {
  const [products, setProducts] = useState<HomeProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getHomeProducts();
        setProducts(data);
        data.forEach((item) => {
          console.log(`Product ${item.name || "null"}: slug = ${item.slug}, cover_image = ${item.cover_image || "null"}`);
        });
      } catch (error: any) {
        setError("مشکلی در دریافت محصولات صفحه اصلی رخ داده است");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="text-center text-blue-900 text-xl animate-pulse">در حال بارگذاری...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 text-xl">{error}</div>;
  }

  if (!products.length) {
    return <div className="text-center text-gray-500 text-xl">هیچ محصولی یافت نشد</div>;
  }

  return (
    <div className="w-full my-12">
      <h2 className="text-center text-blue-900 font-bold text-xl lg:text-3xl mb-8">
        محصولات کاراسته
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {products.map((item, index) => (
          <a
            href={`/products/${item.slug}`}
            key={index}
            className="col-span-1 row-span-1 rounded-lg relative block group"
          >
            <img
              src={item.cover_image || "https://via.placeholder.com/150?text=بدون+تصویر"}
              alt={item.name || "محصول بدون نام"}
              className="w-full h-48 object-cover rounded-xl"
              onError={(e) => {
                e.currentTarget.src = "https://via.placeholder.com/150?text=بدون+تصویر";
              }}
            />
            <div className="absolute inset-0 bg-blue-700 opacity-20 transition-opacity duration-300 group-hover:opacity-0 rounded-lg"></div>
            <p className="absolute right-0 bottom-0 bg-slate-200 text-base lg:text-xl p-2 rounded-tl-2xl z-10">
              <i className="fa fa-chevron-left mx-3 text-base text-slate-700"></i>
              {item.name || "بدون نام"}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default HomeProducts;