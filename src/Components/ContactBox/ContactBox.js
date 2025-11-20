import './ContactBox.css'
import HeadBox from "../HeadBox/HeadBox";
import React from "react";
import {Link} from "react-router-dom";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Pagination, Navigation} from 'swiper/modules'
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';

export default function ContactBox() {
    return (
        <div>
            <div className='max-w-[1650px] mx-auto pb-[3rem]'>
                <div className='flex gap-[0.5rem] items-center px-[5.5rem] max-[960px]:px-[1rem]'>
                    <HeadBox title='نمایندگی ما'/>
                </div>
            </div>

            <div className='min-[1460px]:h-[25rem] max-[1460px]:h-full bg-gray-200 w-full mt-[4rem]'>
                <div className='max-w-[1650px] mx-auto pb-[3rem] max-[1460px]:pb-[1rem] flex justify-between px-[4rem] pr-[5rem] pt-[2rem] max-[960px]:px-[1rem] max-[1460px]:flex-col max-[1460px]:items-center max-[1460px]:justify-center gap-[1rem]'>
                    <div className='flex w-[45rem] max-[752px]:w-full'>
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={30}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: true,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            modules={[Autoplay, Navigation]}
                            className="mySwiper">
                            <SwiperSlide>
                                <div className='p-[1rem] bg-white w-full'>
                                    <div className='flex items-center gap-[0.5rem]'>
                                        <img className='w-[3rem] h-[3rem] object-cover rounded-full' src='/images/Ellipse-38-1.png' />
                                        <h2 className='font-semibold'>استان خراسان رضوی:</h2>
                                    </div>
                                    <div className="flex-1 border-t-2 border-dotted border-black min-w-[4rem] mt-[1rem]"></div>
                                    <div className='mt-[1rem] flex flex-col gap-[1rem]'>
                                        <span className='flex gap-[0.5rem] items-center font-semibold max-[400px]:text-sm'><FmdGoodOutlinedIcon color='error' fontSize='large' />خیابان چمران، نبش گلشن، نرسیده به میدان، پلاک 24</span>
                                        <span className='text-black flex gap-[0.5rem] items-center font-semibold max-[400px]:text-sm'><PhoneInTalkOutlinedIcon color='error' fontSize='large' />0921547535 | <span className='text-red-500'>09359663079</span></span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='p-[1rem] bg-white w-full'>
                                    <div className='flex items-center gap-[0.5rem]'>
                                        <img className='w-[3rem] h-[3rem] object-cover rounded-full' src='/images/Ellipse-38-1.png' />
                                        <h2 className='font-semibold'>استان خراسان رضوی:</h2>
                                    </div>
                                    <div className="flex-1 border-t-2 border-dotted border-black min-w-[4rem] mt-[1rem]"></div>
                                    <div className='mt-[1rem] flex flex-col gap-[1rem]'>
                                        <span className='flex gap-[0.5rem] items-center font-semibold max-[400px]:text-sm'><FmdGoodOutlinedIcon color='error' fontSize='large' />خیابان چمران، نبش گلشن، نرسیده به میدان، پلاک 24</span>
                                        <span className='text-black flex gap-[0.5rem] items-center font-semibold max-[400px]:text-sm'><PhoneInTalkOutlinedIcon color='error' fontSize='large' />0921547535 | <span className='text-red-500'>09359663079</span></span>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>

                    <div className='w-[35rem] max-[612px]:w-[20rem] h-full relative bottom-[4rem] max-[1456px]:bottom-0'>
                        <img className='w-full h-full' src='/images/map.png' alt='' />
                    </div>
                </div>
            </div>
        </div>)
}