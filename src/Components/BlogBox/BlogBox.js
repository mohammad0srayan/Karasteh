import React from 'react'
import HeadBox from "../HeadBox/HeadBox";
import {Link} from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';

export default function BlogBox () {
    return (
        <div className='px-[1.5rem] mt-[10rem] max-[960px]:px-0'>
            <div className='flex gap-[0.5rem] items-center'>
                <HeadBox title='وبلاگ ما' />
                <div className='w-[9rem] max-[960px]:hidden'>
                    <Link className='px-[1rem] py-[0.5rem] rounded-md bg-gray-200 font-semibold' to=''>مشاهده همه</Link>
                </div>
            </div>

            <div className='flex mt-[2rem] cursor-pointer'>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={20}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Navigation]}
                    breakpoints={{
                        960: {
                            slidesPerView: 4,
                            spaceBetween: 20
                        },
                        450: {
                            slidesPerView: 2,
                            spaceBetween: 20
                        },
                        280: {
                            slidesPerView: 1,
                            spaceBetween: 20
                        }
                    }}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className='w-full h-max rounded-xl relative box-product'>
                            <div className='h-[20rem] w-full rounded-xl'>
                                <img className='h-full w-full object-cover rounded-xl grayscale ease-in-out duration-300 hover:grayscale-0' src={process.env.PUBLIC_URL + '/images/blog/206af60d19153a83ecb85379e1183507.jpg'} alt='' />
                            </div>
                            <div className='absolute bottom-0 left-0 py-[1rem] bg-brand-dark text-white w-full rounded-xl'>
                                <div className='px-[1rem]'>
                                    <span className='text-white'>خدمات پس از فروش کاراسته</span>
                                </div>
                                <div className='flex justify-between items-center mt-[2rem] pl-[1rem]'>
                                    <span className='px-[0.5rem] py-[0.2rem] bg-red-500 text-white text-[0.8rem] rounded-bl rounded-tl'>1404 خرداد 09</span>
                                    <span className='text-white flex gap-[0.3rem]'><RemoveRedEyeOutlinedIcon />137</span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='w-full h-max rounded-xl relative box-product'>
                            <div className='h-[20rem] w-full rounded-xl'>
                                <img className='h-full w-full object-cover rounded-xl grayscale ease-in-out duration-300 hover:grayscale-0' src={process.env.PUBLIC_URL + '/images/blog/206af60d19153a83ecb85379e1183507.jpg'} alt='' />
                            </div>
                            <div className='absolute bottom-0 left-0 py-[1rem] bg-brand-dark text-white w-full rounded-xl'>
                                <div className='px-[1rem]'>
                                    <span className='text-white'>خدمات پس از فروش کاراسته</span>
                                </div>
                                <div className='flex justify-between items-center mt-[2rem] pl-[1rem]'>
                                    <span className='px-[0.5rem] py-[0.2rem] bg-red-500 text-white text-[0.8rem] rounded-bl rounded-tl'>1404 خرداد 09</span>
                                    <span className='text-white flex gap-[0.3rem]'><RemoveRedEyeOutlinedIcon />137</span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='w-full h-max rounded-xl relative box-product'>
                            <div className='h-[20rem] w-full rounded-xl'>
                                <img className='h-full w-full object-cover rounded-xl grayscale ease-in-out duration-300 hover:grayscale-0' src={process.env.PUBLIC_URL + '/images/blog/206af60d19153a83ecb85379e1183507.jpg'} alt='' />
                            </div>
                            <div className='absolute bottom-0 left-0 py-[1rem] bg-brand-dark text-white w-full rounded-xl'>
                                <div className='px-[1rem]'>
                                    <span className='text-white'>خدمات پس از فروش کاراسته</span>
                                </div>
                                <div className='flex justify-between items-center mt-[2rem] pl-[1rem]'>
                                    <span className='px-[0.5rem] py-[0.2rem] bg-red-500 text-white text-[0.8rem] rounded-bl rounded-tl'>1404 خرداد 09</span>
                                    <span className='text-white flex gap-[0.3rem]'><RemoveRedEyeOutlinedIcon />137</span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='w-full h-max rounded-xl relative box-product'>
                            <div className='h-[20rem] w-full rounded-xl'>
                                <img className='h-full w-full object-cover rounded-xl grayscale ease-in-out duration-300 hover:grayscale-0' src={process.env.PUBLIC_URL + '/images/blog/206af60d19153a83ecb85379e1183507.jpg'} alt='' />
                            </div>
                            <div className='absolute bottom-0 left-0 py-[1rem] bg-brand-dark text-white w-full rounded-xl'>
                                <div className='px-[1rem]'>
                                    <span className='text-white'>خدمات پس از فروش کاراسته</span>
                                </div>
                                <div className='flex justify-between items-center mt-[2rem] pl-[1rem]'>
                                    <span className='px-[0.5rem] py-[0.2rem] bg-red-500 text-white text-[0.8rem] rounded-bl rounded-tl'>1404 خرداد 09</span>
                                    <span className='text-white flex gap-[0.3rem]'><RemoveRedEyeOutlinedIcon />137</span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='w-full h-max rounded-xl relative box-product'>
                            <div className='h-[20rem] w-full rounded-xl'>
                                <img className='h-full w-full object-cover rounded-xl grayscale ease-in-out duration-300 hover:grayscale-0' src={process.env.PUBLIC_URL + '/images/blog/206af60d19153a83ecb85379e1183507.jpg'} alt='' />
                            </div>
                            <div className='absolute bottom-0 left-0 py-[1rem] bg-brand-dark text-white w-full rounded-xl'>
                                <div className='px-[1rem]'>
                                    <span className='text-white'>خدمات پس از فروش کاراسته</span>
                                </div>
                                <div className='flex justify-between items-center mt-[2rem] pl-[1rem]'>
                                    <span className='px-[0.5rem] py-[0.2rem] bg-red-500 text-white text-[0.8rem] rounded-bl rounded-tl'>1404 خرداد 09</span>
                                    <span className='text-white flex gap-[0.3rem]'><RemoveRedEyeOutlinedIcon />137</span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}