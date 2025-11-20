import './ProjectBox.css'
import React from "react";
import HeadBox from "../HeadBox/HeadBox";
import {Swiper, SwiperSlide} from "swiper/react";
import {Link} from "react-router-dom";
import {Autoplay, Navigation} from "swiper/modules";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

export default function ProjectBox() {
    return (
        <div className='px-[1.5rem] mt-[3rem] max-[960px]:px-0'>
            <div>
                <div className="flex items-center justify-between w-full">
                    <h3 className="font-bold text-gray-800 title-box text-3xl">پروژه‌ها</h3>
                    <div className="flex-grow border-t border-dotted border-gray-400 mx-4"></div>
                    <button className="flex items-center justify-center w-[9rem] text-center px-[1rem] bg-gray-100 border border-gray-200 text-gray-600 text-sm py-[0.7rem] rounded-md hover:bg-gray-200 transition">
                        <Link to='/category'>مشاهده همه</Link>
                    </button>
                </div>
            </div>

            <div className='flex mt-[2rem] cursor-pointer'>
                <Swiper
                    slidesPerView={5.5}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: true,
                    }}
                    breakpoints={{
                        960: {
                            slidesPerView: 5.5,
                            spaceBetween: 10
                        },
                        450: {
                            slidesPerView: 2,
                            spaceBetween: 10
                        },
                        280: {
                            slidesPerView: 1,
                            spaceBetween: 10
                        }
                    }}
                    navigation={true}
                    modules={[Autoplay, Navigation]}
                    className="mySwiper">
                    <SwiperSlide>
                        <div className="w-full h-[26rem] rounded-md relative overflow-hidden">
                            <img
                                className="w-full h-full object-cover rounded-md brightness-75 transition duration-200"
                                src={process.env.PUBLIC_URL + "/images/slider/1.jpg"}
                                alt="برش قطعات کارخانه سپهر"
                            />


                            <div className="absolute bottom-4 right-4 flex flex-col items-center">

                                <span
                                    className="text-white font-semibold text-lg mb-[1.2rem]"
                                    style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                                >
                                    برش قطعات کارخانه سپهر</span>

                                <Link
                                    to="/"
                                    className="flex items-center justify-center w-7 h-7 bg-red-500 rounded-md"
                                >
                                    <ArrowRightAltIcon fontSize="small" className="text-white" />
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='w-full h-[26rem] rounded-md relative overflow-hidden'>
                            <img
                                className='w-full h-full object-cover rounded-md brightness-75 ease-in-out duration-200'
                                src={process.env.PUBLIC_URL + '/images/slider/2.jpg'}/>

                            <div className="absolute bottom-4 right-4 flex flex-col items-center">

                                <span
                                    className="text-white font-semibold text-lg mb-[1.2rem]"
                                    style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                                >
                                    برش قطعات کارخانه سپهر</span>

                                <Link
                                    to="/"
                                    className="flex items-center justify-center w-7 h-7 bg-red-500 rounded-md"
                                >
                                    <ArrowRightAltIcon fontSize="small" className="text-white" />
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='w-full h-[26rem] rounded-md relative overflow-hidden'>
                            <img
                                className='w-full h-full object-cover rounded-md brightness-75 ease-in-out duration-200'
                                src={process.env.PUBLIC_URL + '/images/slider/3.jpg'}/>

                            <div className="absolute bottom-4 right-4 flex flex-col items-center">

                                <span
                                    className="text-white font-semibold text-lg mb-[1.2rem]"
                                    style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                                >
                                    برش قطعات کارخانه سپهر</span>

                                <Link
                                    to="/"
                                    className="flex items-center justify-center w-7 h-7 bg-red-500 rounded-md"
                                >
                                    <ArrowRightAltIcon fontSize="small" className="text-white" />
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='w-full h-[26rem] rounded-md relative overflow-hidden'>
                            <img
                                className='w-full h-full object-cover rounded-md brightness-75 ease-in-out duration-200'
                                src={process.env.PUBLIC_URL + '/images/slider/4.jpg'}/>

                                                        <div className="absolute bottom-4 right-4 flex flex-col items-center">

                                <span
                                    className="text-white font-semibold text-lg mb-[1.2rem]"
                                    style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                                >
                                    برش قطعات کارخانه سپهر</span>

                                <Link
                                    to="/"
                                    className="flex items-center justify-center w-7 h-7 bg-red-500 rounded-md"
                                >
                                    <ArrowRightAltIcon fontSize="small" className="text-white" />
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='w-full h-[26rem] rounded-md relative overflow-hidden'>
                            <img
                                className='w-full h-full object-cover rounded-md brightness-75 ease-in-out duration-200'
                                src={process.env.PUBLIC_URL + '/images/slider/5.png'}/>

                                                        <div className="absolute bottom-4 right-4 flex flex-col items-center">

                                <span
                                    className="text-white font-semibold text-lg mb-[1.2rem]"
                                    style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                                >
                                    برش قطعات کارخانه سپهر</span>

                                <Link
                                    to="/"
                                    className="flex items-center justify-center w-7 h-7 bg-red-500 rounded-md"
                                >
                                    <ArrowRightAltIcon fontSize="small" className="text-white" />
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='w-full h-[26rem] rounded-md relative overflow-hidden'>
                            <img
                                className='w-full h-full object-cover rounded-md brightness-75 ease-in-out duration-200'
                                src={process.env.PUBLIC_URL + '/images/slider/4.jpg'}/>

                                                        <div className="absolute bottom-4 right-4 flex flex-col items-center">

                                <span
                                    className="text-white font-semibold text-lg mb-[1.2rem]"
                                    style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                                >
                                    برش قطعات کارخانه سپهر</span>

                                <Link
                                    to="/"
                                    className="flex items-center justify-center w-7 h-7 bg-red-500 rounded-md"
                                >
                                    <ArrowRightAltIcon fontSize="small" className="text-white" />
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}