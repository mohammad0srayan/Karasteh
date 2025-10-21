import { useState, useEffect } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { getExpertsData } from "../api/homeApi";
import { Expert } from "../api/types";

// تصویر پیش‌فرض اگه تصویر لود نشد
const DEFAULT_IMAGE = "/images/default.jpg"; // مسیر تصویر پیش‌فرض رو تنظیم کن

const Experts = () => {
  const [experts, setExperts] = useState<Expert[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await getExpertsData();
        setExperts(data);
      } catch (error: any) {
        setError("مشکلی در بارگذاری اطلاعات کارشناسان رخ داده است");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="text-center">در حال بارگذاری...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  // برای slidesPerView={2} حداقل باید 4 اسلاید داشته باشیم
  const shouldLoop = experts.length >= 4;

  return (
    <div className="w-full">
      <h2 className="text-center text-blue-900 font-bold my-6 text-xl lg:text-3xl">
        متخصصین کاراسته
      </h2>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={10}
        slidesPerView={2}
        loop={shouldLoop}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {experts.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="relative w-full h-full group">
              <img
                src={item.profile || DEFAULT_IMAGE}
                alt={item.name}
                className="w-full h-full object-cover rounded-lg"
              />
              <div
                className="hidden absolute rounded-lg z-10 inset-0 lg:flex items-center justify-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out flex-col w-full"
                style={{ backgroundColor: "rgba(25,118,210,0.4)" }}
              >
                <h3 className="text-white font-bold text-xl lg:text-3xl my-2">
                  {item.name}
                </h3>
                <p className="text-white font-bold my-1 lg:text-xl">{item.unit}</p>
                <a
                  href={`tel:${item.phone_number}`}
                  className="my-2 p-2 bg-blue-900 w-fit hidden lg:inline"
                >
                  {item.phone_number} <i className="fa fa-phone"></i>
                </a>
                <div className="flex items-center justify-center gap-4">
                  <a href={`tel:${item.phone}`} className="p-2 bg-blue-900 w-fit">
                    {item.phone} <i className="fa fa-phone"></i>
                  </a>
                  <a href={`https://t.me/${item.telegram_id}`} target="_blank">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M30 4.85012L25.5714 27.0009C25.5714 27.0009 24.9521 28.5371 23.2489 27.7997L13.0296 20.027L9.3136 18.2453L3.0582 16.156C3.0582 16.156 2.09821 15.8182 2.00523 15.0809C1.91226 14.3435 3.08919 13.9442 3.08919 13.9442L27.9559 4.26671C27.9559 4.26671 29.9998 3.37582 29.9998 4.85051"
                        fill="#40B3E0"
                      />
                      <path
                        d="M12.2413 26.7522C12.2413 26.7522 11.943 26.7245 11.571 25.5569C11.1997 24.3895 9.31055 18.2452 9.31055 18.2452L24.3298 8.78292C24.3298 8.78292 25.197 8.26061 25.166 8.78292C25.166 8.78292 25.3208 8.87516 24.8561 9.30522C24.3918 9.73548 13.0577 19.8428 13.0577 19.8428"
                        fill="white"
                      />
                      <path
                        d="M16.9478 23.0072L12.9058 26.6633C12.9058 26.6633 12.5897 26.9012 12.2441 26.7521L13.0182 19.9609"
                        fill="#B5CFE4"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <div
                className="lg:hidden absolute bottom-0 rounded-b-lg z-10 flex items-center justify-center flex-col w-full"
                style={{ background: "rgba(255,255,255,0.8)" }}
              >
                <h3 className="text-black font-bold text-xl my-2">{item.name}</h3>
                <p className="text-black font-bold my-1 text-base">{item.unit}</p>
                <div className="flex items-center justify-center gap-4">
                  <a href={`tel:${item.phone}`} className="p-2 w-fit">
                    <i className="fa fa-phone text-3xl text-blue-900"></i>
                  </a>
                  <a href={`https://t.me/${item.telegram_id}`} target="_blank">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M30 4.85012L25.5714 27.0009C25.5714 27.0009 24.9521 28.5371 23.2489 27.7997L13.0296 20.027L9.3136 18.2453L3.0582 16.156C3.0582 16.156 2.09821 15.8182 2.00523 15.0809C1.91226 14.3435 3.08919 13.9442 3.08919 13.9442L27.9559 4.26671C27.9559 4.26671 29.9998 3.37582 29.9998 4.85051"
                        fill="#40B3E0"
                      />
                      <path
                        d="M12.2413 26.7522C12.2413 26.7522 11.943 26.7245 11.571 25.5569C11.1997 24.3895 9.31055 18.2452 9.31055 18.2452L24.3298 8.78292C24.3298 8.78292 25.197 8.26061 25.166 8.78292C25.166 8.78292 25.3208 8.87516 24.8561 9.30522C24.3918 9.73548 13.0577 19.8428 13.0577 19.8428"
                        fill="white"
                      />
                      <path
                        d="M16.9478 23.0072L12.9058 26.6633C12.9058 26.6633 12.5897 26.9012 12.2441 26.7521L13.0182 19.9609"
                        fill="#B5CFE4"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Experts;