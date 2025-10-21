import { useEffect, useState } from "react";
import { SliderArticle } from "./SliderSwiper";
import { getHomeBlogPosts } from "../api/homeApi";
import { HomeBlogPost } from "../api/types";
import { BASE_URL } from "../api/axiosConfig";

const HomeBlogSection: React.FC = () => {
  const [blogs, setBlogs] = useState<HomeBlogPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await getHomeBlogPosts();
        setBlogs(data);
        
      } catch (error) {
        console.error("Failed to load blogs:", error);
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
    <div className="w-full my-12 flex lg:flex-row flex-col gap-3">
      <div className="w-full lg:w-1/2">
        <h3 className="text-blue-900 text-xl lg:text-2xl font-bold mb-6">
          <i className="fa fa-users mx-3"></i>
          متخصصین کاراسته
        </h3>
        <div className="flex space-x-4">
          <SliderArticle />
        </div>
      </div>
      <div className="w-full lg:w-1/2">
        <div className="flex justify-between">
          <h3 className="text-blue-900 text-xl lg:text-2xl font-bold mb-6">
            <i className="fa fa-book mx-3"></i>
            مقالات
          </h3>
          <a href="/blog" className="text-blue-900 text-base lg:text-xl mb-6">
            مشاهده همه
            <i className="fa fa-chevron-left mx-3 text-base!"></i>
          </a>
        </div>
        <div className="grid grid-cols-1 gap-y-5">
          {blogs.map((item) => (
            <div
              key={item.id}
              className="flex flex-row lg:py-0 shadow hover:shadow-2xl transition-shadow duration-300 border border-gray-200 rounded shadow-gray-700"
            >
              <div className="w-full sm:w-2/3 px-4 py-2">
                <h2 className="md:text-justify text-base sm:text-lg xl:text-xl text-bold mb-5 font-bold">
                  {item.title}
                </h2>
                <p className="md:text-justify text-gray-500 leading-4 xl:leading-7 font-bold my-4">
                  {item.description}
                </p>
                <a
                  href={`/blog/${item.slug}`} // اصلاح لینک
                  className="text-base text-blue-900 cursor-pointer block text-left"
                >
                  ادامه مطالب
                  <i className="fa fa-chevron-left text-base! mr-3"></i>
                </a>
              </div>
              {item.thumbnail && (
                <img
                  src={item.thumbnail.startsWith('http') ? item.thumbnail : `${BASE_URL}${item.thumbnail}`}
                  alt={item.title}
                  className="mr-3 w-32 h-32 sm:h-auto sm:w-1/3 p-4 rounded-3xl object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "https://via.placeholder.com/400x240?text=بدون+تصویر";
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeBlogSection;