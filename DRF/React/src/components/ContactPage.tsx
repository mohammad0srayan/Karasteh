import { useEffect, useState } from "react";
import parse from "html-react-parser";
import { getContactInfoData } from "../api/homeApi";
import { ContactInfo } from "../api/types";

const ContactPage: React.FC = () => {
  const [contactInfo, setContactInfo] = useState<ContactInfo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContactInfo = async () => {
      try {
        setLoading(true);
        const data = await getContactInfoData();
        setContactInfo(data);
      } catch (error: any) {
        setError("مشکلی در بارگذاری اطلاعات تماس رخ داده است");
      } finally {
        setLoading(false);
      }
    };

    fetchContactInfo();
  }, []);

  if (loading) {
    return (
      <div className="text-center text-blue-900 text-xl animate-pulse">
        در حال بارگذاری...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500 text-xl animate-pulse">
        {error}
      </div>
    );
  }

  // تنظیم تعداد ستون‌ها بر اساس تعداد آیتم‌ها (حداکثر 3 ستون در دسکتاپ)
  const gridCols = contactInfo.length === 1 ? 1 : Math.min(contactInfo.length, 3);
  const gridClass = `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-${gridCols} gap-4 sm:gap-6`;

  return (
    <div className="w-full mt-12 px-4 ">
      {/* هدر گرادیانت (بدون تغییر) */}
      <div className="relative bg-gradient-to-r from-blue-900 to-blue-600 text-white py-12 mb-12 rounded-lg shadow-lg overflow-hidden">
        <div className="absolute inset-0 bg-opacity-50 bg-[url('https://www.transparenttextures.com/patterns/subtle-white-feathers.png')]"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <i className="fa fa-envelope mx-3"></i>
            تماس با ما
          </h2>
          <p className="text-lg md:text-xl text-gray-200">
            با ما در ارتباط باشید! هر سوالی دارید، آماده پاسخگویی هستیم.
          </p>
        </div>
      </div>

      {/* گرید اطلاعات تماس */}
      <div className="max-w-7xl mx-auto">
        <div className={gridClass}>
          {contactInfo.map((item, index) => (
            <div
              key={item.id}
              className={`flex flex-col shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 rounded-lg p-6 bg-white animate-fade-in ${
                contactInfo.length === 1 ? "w-full" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {item.title && (
                <h3 className="text-lg sm:text-xl font-bold text-blue-900 mb-3">
                  {item.title}
                </h3>
              )}
              {item.description && (
                <div className="text-gray-700 text-base leading-7 mb-4">
                  {parse(item.description)}
                </div>
              )}
              {item.phone_number && (
                <p className="text-gray-500 text-base mb-2 flex items-center">
                  <i className="fa fa-phone mx-2 text-blue-900 transition-transform duration-300 hover:scale-125"></i>
                  <a
                    href={`tel:${item.phone_number}`}
                    className="hover:text-blue-700 transition-colors duration-300"
                  >
                    {item.phone_number}
                  </a>
                </p>
              )}
              {item.address && (
                <p className="text-gray-500 text-base flex items-center">
                  <i className="fa fa-map-marker mx-2 text-blue-900 transition-transform duration-300 hover:scale-125"></i>
                  {item.address}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;