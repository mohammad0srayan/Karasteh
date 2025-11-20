import React from 'react'
import {Swiper, SwiperSlide} from "swiper/react";

export default function Logos () {
    return (
        <div className='px-[5rem] bg-red-500 py-[1rem]'>
            <div className='flex items-center'>
            </div>
            <Swiper
                slidesPerView={6}
                spaceBetween={100}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    960: {
                        slidesPerView: 6,
                        spaceBetween: 10
                    },
                    600: {
                        slidesPerView: 2.6,
                        spaceBetween: 10
                    },
                    500: {
                        slidesPerView: 2.2,
                        spaceBetween: 10
                    },
                    320: {
                        slidesPerView: 1.1,
                        spaceBetween: 10
                    },
                }}
                className="mySwiper">
                <SwiperSlide>
                    <img className='w-[8rem] h-[3rem]' src={process.env.PUBLIC_URL + '/images/logo/آروا-1.png'} />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-[8rem] h-[3rem]' src={process.env.PUBLIC_URL + '/images/logo/آروا-1.png'} />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-[8rem] h-[3rem]' src={process.env.PUBLIC_URL + '/images/logo/آروا-1.png'} />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-[8rem] h-[3rem]' src={process.env.PUBLIC_URL + '/images/logo/آروا-1.png'} />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-[8rem] h-[3rem]' src={process.env.PUBLIC_URL + '/images/logo/آروا-1.png'} />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-[8rem] h-[3rem]' src={process.env.PUBLIC_URL + '/images/logo/آروا-1.png'} />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-[8rem] h-[3rem]' src={process.env.PUBLIC_URL + '/images/logo/آروا-1.png'} />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}