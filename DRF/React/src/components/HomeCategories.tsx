import { useEffect, useState } from "react";
import { getCategoryTree } from "../api/homeApi";
import { Category } from "../api/types";
import { BASE_URL } from "../api/axiosConfig";

const HomeCategories: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await getCategoryTree();
        setCategories(data.filter((cat) => cat.is_active)); // فقط دسته‌بندی‌های فعال
        data.forEach((cat) => {
          console.log(`Category ${cat.name}: icon = ${cat.icon || "null"}, id = ${cat.id}`);
        });
      } catch (error) {
        console.error("Failed to load categories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="text-center text-blue-900 text-xl animate-pulse">در حال بارگذاری...</div>;
  }

  return (
    <div className="w-full my-12">
      <h2 className="text-center text-blue-900 font-bold text-xl lg:text-3xl mb-8">
        دسته‌بندی‌های کاراسته
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((category) => (
          <div
            key={category.id}
            className="relative w-40 h-40 mx-auto rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            {category.icon ? (
              <img
                src={category.icon.startsWith("http") ? category.icon : `${BASE_URL}${category.icon}`}
                alt={category.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = "https://via.placeholder.com/150?text=بدون+آیکون";
                }}
              />
            ) : (
              <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">
                بدون آیکون
              </div>
            )}
            <a
              href={`/products?category_id=${category.id}`}
              className="absolute inset-0 flex items-end justify-center"
            >
              <span className="bg-blue-900 bg-opacity-70 text-white text-sm md:text-base font-bold py-3 px-4 w-full text-center transition-colors duration-300 hover:bg-blue-700 break-words">
                {category.name}
              </span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeCategories;