import React from 'react'
import HeadBox from "../HeadBox/HeadBox";
import {Link} from 'react-router-dom'
import {Swiper, SwiperSlide} from "swiper/react";
import TelegramIcon from '@mui/icons-material/Telegram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function UserBox() {
    return (
        <div className='px-[1.5rem] max-[960px]:px-0'>
            <div className='flex gap-[0.5rem] items-center'>
                <HeadBox title='تیم ما'/>
            </div>

            <div className='flex mt-[1rem] cursor-pointer'>
                <Swiper
                    slidesPerView={4.9}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        960: {
                            slidesPerView: 4.5,
                            spaceBetween: 30,
                        },
                        700: {
                            slidesPerView: 3.5,
                            spaceBetween: 10,
                        },
                        580: {
                            slidesPerView: 2.9,
                            spaceBetween: 10,
                        },
                        400: {
                            slidesPerView: 1.9,
                            spaceBetween: 10,
                        },
                        280: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                    }}
                    className="mySwiper">
                    <SwiperSlide className='py-[1rem]'>
                        <div className='w-full h-max rounded-md relative bg-white box-product pb-[1rem]'>
                            <div className='w-full h-[25rem] relative border-b-2 border-red-500 border-dotted'>
                                <img className='w-full h-full object-cover' src={process.env.PUBLIC_URL + '/images/users/1.webp'} />
                                <div
                                    className='absolute top-0 right-0 h-full w-max p-[0.5rem] bg-red-500 flex flex-col gap-[1rem] text-white'>
                                    <Link to=''><TelegramIcon/></Link>
                                    <Link to=''><GitHubIcon/></Link>
                                    <Link to=''><LinkedInIcon/></Link>
                                </div>
                            </div>
                            <div className='flex flex-col gap-[0.5rem] text-center mt-4'>
                                <h2 className='text-red-500 font-semibold'>سپهر میرسلمی</h2>
                                <span className='text-sm font-semibold'>مدیر کیفی</span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='py-[1rem]'>
                        <div className='w-full h-max rounded-md relative bg-white box-product pb-[1rem]'>
                            <div className='w-full h-[25rem] relative border-b-2 border-red-500 border-dotted'>
                                <img className='w-full h-full object-cover' src={process.env.PUBLIC_URL + '/images/users/2.webp'} />
                                <div
                                    className='absolute top-0 right-0 h-full w-max p-[0.5rem] bg-red-500 flex flex-col gap-[1rem] text-white'>
                                    <Link to=''><TelegramIcon/></Link>
                                    <Link to=''><GitHubIcon/></Link>
                                    <Link to=''><LinkedInIcon/></Link>
                                </div>
                            </div>
                            <div className='flex flex-col gap-[0.5rem] text-center mt-4'>
                                <h2 className='text-red-500 font-semibold'>سپهر میرسلمی</h2>
                                <span className='text-sm font-semibold'>مدیر کیفی</span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='py-[1rem]'>
                        <div className='w-full h-max rounded-md relative bg-white box-product pb-[1rem]'>
                            <div className='w-full h-[25rem] relative border-b-2 border-red-500 border-dotted'>
                                <img className='w-full h-full object-cover' src={process.env.PUBLIC_URL + '/images/users/3.webp'} />
                                <div
                                    className='absolute top-0 right-0 h-full w-max p-[0.5rem] bg-red-500 flex flex-col gap-[1rem] text-white'>
                                    <Link to=''><TelegramIcon/></Link>
                                    <Link to=''><GitHubIcon/></Link>
                                    <Link to=''><LinkedInIcon/></Link>
                                </div>
                            </div>
                            <div className='flex flex-col gap-[0.5rem] text-center mt-4'>
                                <h2 className='text-red-500 font-semibold'>سپهر میرسلمی</h2>
                                <span className='text-sm font-semibold'>مدیر کیفی</span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='py-[1rem]'>
                        <div className='w-full h-max rounded-md relative bg-white box-product pb-[1rem]'>
                            <div className='w-full h-[25rem] relative border-b-2 border-red-500 border-dotted'>
                                <img className='w-full h-full object-cover' src={process.env.PUBLIC_URL + '/images/users/4.webp'} />
                                <div
                                    className='absolute top-0 right-0 h-full w-max p-[0.5rem] bg-red-500 flex flex-col gap-[1rem] text-white'>
                                    <Link to=''><TelegramIcon/></Link>
                                    <Link to=''><GitHubIcon/></Link>
                                    <Link to=''><LinkedInIcon/></Link>
                                </div>
                            </div>
                            <div className='flex flex-col gap-[0.5rem] text-center mt-4'>
                                <h2 className='text-red-500 font-semibold'>سپهر میرسلمی</h2>
                                <span className='text-sm font-semibold'>مدیر کیفی</span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='py-[1rem]'>
                        <div className='w-full h-max rounded-md relative bg-white box-product pb-[1rem]'>
                            <div className='w-full h-[25rem] relative border-b-2 border-red-500 border-dotted'>
                                <img className='w-full h-full object-cover' src={process.env.PUBLIC_URL + '/images/users/5.webp'} />
                                <div
                                    className='absolute top-0 right-0 h-full w-max p-[0.5rem] bg-red-500 flex flex-col gap-[1rem] text-white'>
                                    <Link to=''><TelegramIcon/></Link>
                                    <Link to=''><GitHubIcon/></Link>
                                    <Link to=''><LinkedInIcon/></Link>
                                </div>
                            </div>
                            <div className='flex flex-col gap-[0.5rem] text-center mt-4'>
                                <h2 className='text-red-500 font-semibold'>سپهر میرسلمی</h2>
                                <span className='text-sm font-semibold'>مدیر کیفی</span>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}