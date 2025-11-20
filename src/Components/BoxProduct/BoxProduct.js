import './BoxProduct.css'
import React from "react";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {Swiper, SwiperSlide} from "swiper/react";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import BuildIcon from '@mui/icons-material/Build';
import HandymanIcon from '@mui/icons-material/Handyman';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import PlumbingIcon from '@mui/icons-material/Plumbing';
import SquareFootIcon from '@mui/icons-material/SquareFoot';
import CarpenterIcon from '@mui/icons-material/Carpenter';
import BatteryCharging30Icon from '@mui/icons-material/BatteryCharging30';

import 'swiper/css';
import 'swiper/css/pagination';
import HeadBox from "../HeadBox/HeadBox";

export default function BoxProduct () {
    return (
        <div className='pb-[2rem] pt-[1rem] px-[2rem] w-full shadow-xl bg-white relative bottom-[5rem] rounded-md'>
            <HeadBox title='دسته بندی محصولات' />

            <div className='flex mt-[1rem] gap-[1rem] cursor-pointer'>
                <Swiper
                    slidesPerView={6}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        1190: {
                            slidesPerView: 6,
                            spaceBetween: 10,
                        },
                        472: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        250: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                    }}
                    className="mySwiper">
                    <SwiperSlide>
                        <div className='w-full bg-gray-200 h-max rounded-md flex flex-col gap-[0.5rem] text-center py-[1rem]'>
                            <span className='text-brand-dark'><AcUnitIcon fontSize='large' /></span>
                            <span className='font-semibold'>ابزار بنزینی</span>
                            <p className='text-sm'>مشاهده قیمت</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='w-full bg-gray-200 h-max rounded-md flex flex-col gap-[0.5rem] text-center py-[1rem]'>
                            <span className='text-brand-dark'><BuildIcon fontSize='large' /></span>
                            <span className='font-semibold'>ابزار شارژی</span>
                            <p className='text-sm'>مشاهده قیمت</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='w-full bg-gray-200 h-max rounded-md flex flex-col gap-[0.5rem] text-center py-[1rem]'>
                            <span className='text-brand-dark'><HandymanIcon fontSize='large' /></span>
                            <span className='font-semibold'>متعلقات ابزار</span>
                            <p className='text-sm'>مشاهده قیمت</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='w-full bg-gray-200 h-max rounded-md flex flex-col gap-[0.5rem] text-center py-[1rem]'>
                            <span className='text-brand-dark'><HistoryEduIcon fontSize='large' /></span>
                            <span className='font-semibold'>جعبه و کیف ابزار</span>
                            <p className='text-sm'>مشاهده قیمت</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='w-full bg-gray-200 h-max rounded-md flex flex-col gap-[0.5rem] text-center py-[1rem]'>
                            <span className='text-brand-dark'><HomeRepairServiceIcon fontSize='large' /></span>
                            <span className='font-semibold'>ابزار دستی</span>
                            <p className='text-sm'>مشاهده قیمت</p>
                        </div>
                    </SwiperSlide>
                        <SwiperSlide>
                            <div className='w-full bg-gray-200 h-max rounded-md flex flex-col gap-[0.5rem] text-center py-[1rem]'>
                                <span className='text-brand-dark'><PlumbingIcon fontSize='large' /></span>
                                <span className='font-semibold'>تجهیزات ایمنی</span>
                                <p className='text-sm'>مشاهده قیمت</p>
                            </div>
                        </SwiperSlide>
                    <SwiperSlide>
                        <div className='w-full bg-gray-200 h-max rounded-md flex flex-col gap-[0.5rem] text-center py-[1rem]'>
                            <span className='text-brand-dark'><SquareFootIcon fontSize='large' /></span>
                            <span className='font-semibold'>ابزار آلات جابه جایی</span>
                            <p className='text-sm'>مشاهده قیمت</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='w-full bg-gray-200 h-max rounded-md flex flex-col gap-[0.5rem] text-center py-[1rem]'>
                            <span className='text-brand-dark'><CarpenterIcon fontSize='large' /></span>
                            <span className='font-semibold'>جعبه و کیف ابزار</span>
                            <p className='text-sm'>مشاهده قیمت</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='w-full bg-gray-200 h-max rounded-md flex flex-col gap-[0.5rem] text-center py-[1rem]'>
                            <span className='text-brand-dark'><BatteryCharging30Icon fontSize='large' /></span>
                            <span className='font-semibold'>ابزار شارژی</span>
                            <p className='text-sm'>مشاهده قیمت</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}