import './ProductsBox.css'
import HeadBox from "../HeadBox/HeadBox";
import {Link} from "react-router-dom";
import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";

export default function ProductsBox () {
    return (
        <div className='px-[1.5rem] mt-[10rem] max-[960px]:px-0'>
            <div className='flex gap-[0.5rem] items-center'>
                <HeadBox title='تجهیزات ایمنی' />
                <div className='w-[9rem] max-[960px]:hidden'>
                    <Link className='px-[1rem] py-[0.5rem] rounded-md bg-gray-200 font-semibold' to=''>مشاهده همه</Link>
                </div>
            </div>

            <div className='flex mt-[1rem] cursor-pointer'>
                <Swiper
                    slidesPerView={5}
                    freeMode={true}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        960: {
                            slidesPerView: 5,
                            spaceBetween: 10
                        },
                        480: {
                            slidesPerView: 2,
                            spaceBetween: 10
                        },
                        420: {
                            slidesPerView: 1.5,
                            spaceBetween: 10
                        },
                        280: {
                            slidesPerView: 1,
                            spaceBetween: 10
                        },
                    }}
                    className="mySwiper">
                    <SwiperSlide className='py-[2rem]'>
                        <div className='w-full h-max rounded-md relative bg-white p-[1rem] box-product'>
                            <div className='w-full h-[12rem] bg-gray-200 rounded-md relative flex justify-center items-center'>
                                <img className='w-[10rem] h-[8rem]' src={process.env.PUBLIC_URL + '/images/product/5cec5ba323efc35b378d10d89d4d87343b4ee9d1_1624284187.webp'} />
                                <div className='absolute top-0 right-0'>
                                    <span className='p-[0.5rem] rounded-md bg-red-500 text-white'>5%</span>
                                </div>
                            </div>
                            <div className='mt-[1.5rem] text-center flex flex-col gap-[0.5rem]'>
                                <span className='font-semibold text-sm'>جلیقه اضطراری مدل 50</span>
                                <span className='font-semibold text-sm text-red-500 mt-[0.5rem]'><span className='text-gray-300'> 194,000 تومان </span>184,300 تومان</span>
                                <div className="flex-1 border-t-2 border-dotted border-black min-w-[4rem] mt-[0.5rem]"></div>
                                <div className='my-[1rem] flex justify-between items-center text-sm'>
                                    <span>سفارش: 0</span>
                                    <span>باقیمانده: 194</span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='py-[2rem]'>
                        <div className='w-full h-max rounded-md relative bg-white p-[1rem] box-product'>
                            <div className='w-full h-[12rem] bg-gray-200 rounded-md relative flex justify-center items-center'>
                                <img className='w-[10rem] h-[8rem]' src={process.env.PUBLIC_URL + '/images/product/647ae6eb6093c2d2ee4e7673f4a1e39028ef0feb_1627884894.webp'} />
                                <div className='absolute top-0 right-0'>
                                    <span className='p-[0.5rem] rounded-md bg-red-500 text-white'>5%</span>
                                </div>
                            </div>
                            <div className='mt-[1.5rem] text-center flex flex-col gap-[0.5rem]'>
                                <span className='font-semibold text-sm'>جلیقه اضطراری مدل 50</span>
                                <span className='font-semibold text-sm text-red-500 mt-[0.5rem]'><span className='text-gray-300'> 194,000 تومان </span>184,300 تومان</span>
                                <div className="flex-1 border-t-2 border-dotted border-black min-w-[4rem] mt-[0.5rem]"></div>
                                <div className='my-[1rem] flex justify-between items-center text-sm'>
                                    <span>سفارش: 0</span>
                                    <span>باقیمانده: 194</span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='py-[2rem]'>
                        <div className='w-full h-max rounded-md relative bg-white p-[1rem] box-product'>
                            <div className='w-full h-[12rem] bg-gray-200 rounded-md relative flex justify-center items-center'>
                                <img className='w-[10rem] h-[8rem]' src={process.env.PUBLIC_URL + '/images/product/10581119-1.png'} />
                                <div className='absolute top-0 right-0'>
                                    <span className='p-[0.5rem] rounded-md bg-red-500 text-white'>5%</span>
                                </div>
                            </div>
                            <div className='mt-[1.5rem] text-center flex flex-col gap-[0.5rem]'>
                                <span className='font-semibold text-sm'>جلیقه اضطراری مدل 50</span>
                                <span className='font-semibold text-sm text-red-500 mt-[0.5rem]'><span className='text-gray-300'> 194,000 تومان </span>184,300 تومان</span>
                                <div className="flex-1 border-t-2 border-dotted border-black min-w-[4rem] mt-[0.5rem]"></div>
                                <div className='my-[1rem] flex justify-between items-center text-sm'>
                                    <span>سفارش: 0</span>
                                    <span>باقیمانده: 194</span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='py-[2rem]'>
                        <div className='w-full h-max rounded-md relative bg-white p-[1rem] box-product'>
                            <div className='w-full h-[12rem] bg-gray-200 rounded-md relative flex justify-center items-center'>
                                <img className='w-[10rem] h-[8rem]' src={process.env.PUBLIC_URL + '/images/product/10581119-1-1.png'} />
                                <div className='absolute top-0 right-0'>
                                    <span className='p-[0.5rem] rounded-md bg-red-500 text-white'>5%</span>
                                </div>
                            </div>
                            <div className='mt-[1.5rem] text-center flex flex-col gap-[0.5rem]'>
                                <span className='font-semibold text-sm'>جلیقه اضطراری مدل 50</span>
                                <span className='font-semibold text-sm text-red-500 mt-[0.5rem]'><span className='text-gray-300'> 194,000 تومان </span>184,300 تومان</span>
                                <div className="flex-1 border-t-2 border-dotted border-black min-w-[4rem] mt-[0.5rem]"></div>
                                <div className='my-[1rem] flex justify-between items-center text-sm'>
                                    <span>سفارش: 0</span>
                                    <span>باقیمانده: 194</span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='py-[2rem]'>
                        <div className='w-full h-max rounded-md relative bg-white p-[1rem] box-product'>
                            <div className='w-full h-[12rem] bg-gray-200 rounded-md relative flex justify-center items-center'>
                                <img className='w-[10rem] h-[8rem]' src={process.env.PUBLIC_URL + '/images/product/10581119-1-3.png'} />
                                <div className='absolute top-0 right-0'>
                                    <span className='p-[0.5rem] rounded-md bg-red-500 text-white'>5%</span>
                                </div>
                            </div>
                            <div className='mt-[1.5rem] text-center flex flex-col gap-[0.5rem]'>
                                <span className='font-semibold text-sm'>جلیقه اضطراری مدل 50</span>
                                <span className='font-semibold text-sm text-red-500 mt-[0.5rem]'><span className='text-gray-300'> 194,000 تومان </span>184,300 تومان</span>
                                <div className="flex-1 border-t-2 border-dotted border-black min-w-[4rem] mt-[0.5rem]"></div>
                                <div className='my-[1rem] flex justify-between items-center text-sm'>
                                    <span>سفارش: 0</span>
                                    <span>باقیمانده: 194</span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='py-[2rem]'>
                        <div className='w-full h-max rounded-md relative bg-white p-[1rem] box-product'>
                            <div className='w-full h-[12rem] bg-gray-200 rounded-md relative flex justify-center items-center'>
                                <img className='w-[10rem] h-[8rem]' src={process.env.PUBLIC_URL + '/images/product/10581119-1-2.png'} />
                                <div className='absolute top-0 right-0'>
                                    <span className='p-[0.5rem] rounded-md bg-red-500 text-white'>5%</span>
                                </div>
                            </div>
                            <div className='mt-[1.5rem] text-center flex flex-col gap-[0.5rem]'>
                                <span className='font-semibold text-sm'>جلیقه اضطراری مدل 50</span>
                                <span className='font-semibold text-sm text-red-500 mt-[0.5rem]'><span className='text-gray-300'> 194,000 تومان </span>184,300 تومان</span>
                                <div className="flex-1 border-t-2 border-dotted border-black min-w-[4rem] mt-[0.5rem]"></div>
                                <div className='my-[1rem] flex justify-between items-center text-sm'>
                                    <span>سفارش: 0</span>
                                    <span>باقیمانده: 194</span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}