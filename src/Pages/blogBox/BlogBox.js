import React from 'react'
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import {Link} from "react-router-dom";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MessageIcon from '@mui/icons-material/Message';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import BusinessRoundedIcon from '@mui/icons-material/BusinessRounded';
import HeadBoxSection from "../../Components/HeadBoxSection/HeadBoxSection";
import ContactUs from "../../Components/ContactUs/ContactUs";
import Footer from "../../Components/Footer/Footer";
import CommentBox from "../../Components/CommentBox/CommentBox";

export default function BlogBox() {
    return (
        <>
            <div className='mx-auto max-w-[1650px] px-[4rem] mb-[15rem] mt-[4rem] max-[1650px]:px-0'>
                <Breadcrumb link='کیفیت خدمات سریوان اتفاقی نیست!'/>

                <div
                    className='flex justify-between px-[1rem] items-center py-[0.8rem] bg-gray-100 rounded-md mt-[2rem] flex-wrap gap-[1rem]'>
                    <div>
                        <h2 className='text-xl font-semibold max-[500px]:text-sm'>کیفیت خدمات پس از فروش سریوان اتفاقی نیست!</h2>
                    </div>

                    <ul className='flex gap-[0.5rem] items-center max-[824px]:w-full max-[824px]:justify-end'>
                        <li className='text-red-500 border-l-[1px] border-dotted border-red-500 pl-[1rem] text-sm flex gap-[0.2rem] max-[400px]:text-[0.7rem]'>
                            <CalendarMonthIcon fontSize='small'/>05 فروردین 1404
                        </li>
                        <li className='text-red-500 border-l-[1px] border-dotted border-red-500 pl-[1rem] text-sm flex gap-[0.2rem] max-[400px]:text-[0.7rem]'>
                            <MessageIcon fontSize='small'/>2 دیدگاه
                        </li>
                        <li className='text-red-500 border-l-[1px] border-dotted border-red-500 pl-[1rem] text-sm flex gap-[0.2rem] max-[400px]:text-[0.7rem]'>
                            <RemoveRedEyeIcon fontSize='small'/>280
                        </li>
                        <li className='text-red-500 text-sm flex gap-[0.2rem]'><WatchLaterOutlinedIcon
                            fontSize='small'/>2
                        </li>
                    </ul>
                </div>

                <div className='flex gap-[2rem] mt-[1.5rem] max-[824px]:flex-col'>
                    <div className='min-[824px]:w-[25rem] max-[824px]:w-full h-max p-[1rem] rounded-md box-shadow min-[824px]:sticky min-[824px]:top-[1rem]'>
                        <h2 className='text-xl font-semibold'>شبکه های اجتماعی اونیکس</h2>

                        <ul className='flex flex-col gap-[1rem] mt-[1rem]'>
                            <li><Link className='text-brand-dark flex items-center gap-[0.3rem]' to=''><InstagramIcon/>اینستاگرام</Link>
                            </li>
                            <li><Link className='text-brand-dark flex items-center gap-[0.3rem]' to=''><TelegramIcon/>تلگرام</Link>
                            </li>
                            <li><Link className='text-brand-dark flex items-center gap-[0.3rem]' to=''><WhatsAppIcon/>واتساپ</Link>
                            </li>
                            <li><Link className='text-brand-dark flex items-center gap-[0.3rem]' to=''><LinkedInIcon/>لینکدین</Link>
                            </li>
                        </ul>
                    </div>

                    <div className='relative w-full h-max'>
                        <div className='w-full p-[1rem] rounded-md box-shadow'>
                            <div className='w-full h-[30rem] rounded-md'>
                                <img className='w-full h-full object-cover rounded-md'
                                     src='/images/blog/e46c83b581c3c18e0af106e59f6b5eae.jpg'/>
                            </div>
                            <div className='mt-[2rem]'>
                                <p className='text-footer-dark text-[0.9rem] text-justify w-full'>
                                    در دنیای امروز، مشتریان بیش از همیشه به کیفیت خدمات پس از فروش توجه دارند. وقتی نام
                                    کاراسته به میان می آید، تنها یک محصول
                                    در ذهن مشتری تداعی نمی شود، بلکه یک تجربه ی حرفه ای،متعهد و متمایز از ابتدا تا
                                    انتهای مسیر خرید در خاطر می ماند. چرا؟ پون کیفیت خدمات
                                    پس از فروش اونیکس، حاصل سال ها تحربه، برنامه ریزی و تعهد واقعی به مشتری است ـــ نه
                                    یک اتفاق!
                                </p>

                                <ul className='flex flex-col gap-[1rem] mt-[2rem] border-b-[1px] border-borderBot pb-[1.5rem]'>
                                    <h2 className='text-xl text-red-500 font-bold'>چرا خدمات پس از فروش اونیکس متفاوت
                                        است؟</h2>

                                    <li className='flex flex-col gap-[0.5rem] mt-[1rem]'>
                                        <span
                                            className='flex items-center text-red-500 font-bold'><AssignmentTurnedInIcon
                                            color='success'/>پشتیبانی سریع و پاسخگو</span>
                                        <p className='text-footer-dark text-sm'>تیم پشتیبانی اونیکس در تمام روزهای کاری،
                                            آماده پاسخ گویی به سوالات و رفع مشکلات مشتریان است. ما باور داریم که هیچ
                                            سوالی نباید بی پاسخ بماند.</p>
                                    </li>

                                    <li className='flex flex-col gap-[0.5rem] mt-[1rem]'>
                                        <span
                                            className='flex items-center text-red-500 font-bold'><AssignmentTurnedInIcon
                                            color='success'/>پشتیبانی سریع و پاسخگو</span>
                                        <p className='text-footer-dark text-sm'>تیم پشتیبانی اونیکس در تمام روزهای کاری،
                                            آماده پاسخ گویی به سوالات و رفع مشکلات مشتریان است. ما باور داریم که هیچ
                                            سوالی نباید بی پاسخ بماند.</p>
                                    </li>

                                    <li className='flex flex-col gap-[0.5rem] mt-[1rem]'>
                                        <span
                                            className='flex items-center text-red-500 font-bold'><AssignmentTurnedInIcon
                                            color='success'/>پشتیبانی سریع و پاسخگو</span>
                                        <p className='text-footer-dark text-sm'>تیم پشتیبانی اونیکس در تمام روزهای کاری،
                                            آماده پاسخ گویی به سوالات و رفع مشکلات مشتریان است. ما باور داریم که هیچ
                                            سوالی نباید بی پاسخ بماند.</p>
                                    </li>

                                    <li className='flex flex-col gap-[0.5rem] mt-[1rem]'>
                                        <span
                                            className='flex items-center text-red-500 font-bold'><AssignmentTurnedInIcon
                                            color='success'/>پشتیبانی سریع و پاسخگو</span>
                                        <p className='text-footer-dark text-sm'>تیم پشتیبانی اونیکس در تمام روزهای کاری،
                                            آماده پاسخ گویی به سوالات و رفع مشکلات مشتریان است. ما باور داریم که هیچ
                                            سوالی نباید بی پاسخ بماند.</p>
                                    </li>

                                    <li className='flex flex-col gap-[0.5rem] mt-[1rem]'>
                                        <span
                                            className='flex items-center text-red-500 font-bold'><AssignmentTurnedInIcon
                                            color='success'/>پشتیبانی سریع و پاسخگو</span>
                                        <p className='text-footer-dark text-sm'>تیم پشتیبانی اونیکس در تمام روزهای کاری،
                                            آماده پاسخ گویی به سوالات و رفع مشکلات مشتریان است. ما باور داریم که هیچ
                                            سوالی نباید بی پاسخ بماند.</p>
                                    </li>
                                </ul>

                                <div className='mt-[1rem]'>
                                    <h2 className='text-red-500 font-bold text-xl'>فراتر از انتظار شما</h2>
                                    <p className='text-footer-dark mt-[0.5rem] text-sm'>
                                        اونیکس تنها فروشنده ی یک محصول نیست; ما همراه و پشتیبان واقعی شما در تمام مراحل
                                        استفاد از محصول هستیم. تنها با فروش
                                        پایان نمی یابد ــ بلکه از همانجا آغاز میشود.
                                    </p>
                                </div>

                                <ul className='mt-[2rem]'>
                                    <h2 className='text-red-500 font-bold text-xl'>تجربه ای متفاوت را با اونیکس احساس
                                        کنید</h2>

                                    <li className='py-[0.1rem] text-footer-dark text-sm mt-[1rem] flex items-center gap-[0.5rem]'>
                                        <span className='text-footer-dark'><LocalPhoneRoundedIcon
                                            fontSize='small'/></span>مرکز تماس: [شماره پشتیبانی]
                                    </li>
                                    <li className='py-[0.1rem] text-footer-dark text-sm flex items-center gap-[0.5rem]'>
                                        <span className='text-footer-dark'><LanguageRoundedIcon
                                            fontSize='small'/></span>وبسایت رسمی: [آدرس سایت]
                                    </li>
                                    <li className='py-[0.1rem] text-footer-dark text-sm flex items-center gap-[0.5rem]'>
                                        <span className='text-footer-dark'><BusinessRoundedIcon
                                            fontSize='small'/></span>نمایندگی ها: در سراسر کشور
                                    </li>
                                </ul>


                                <div
                                    className='border-dotted border-b-[2px] w-full border-borderBot mt-[2rem] pb-[0.2rem]'>
                                    <span
                                        className='text-brand-dark font-semibold flex items-center gap-[1rem] text-sm'>دسته بندی ها: <span>دسته بندی نشده</span></span>
                                </div>

                                <div className='mt-[1.5rem] mb-[0.5rem] px-[1rem]'>
                                    <span className='text-brand-dark text-sm font-semibold'>بدون برچسپ</span>
                                </div>
                            </div>
                        </div>

                        <CommentBox />

                        <form className='p-[1rem] rounded-md box-shadow h-max mt-[8rem]'>
                            <div>
                                <h2 className='mb-[1rem] font-semibold'>دیدگاهتان را بنویسید</h2>

                                <span className='font-semibold'>نشانی ایمیل شما منتشر نخواهد شد. بخش های مورد نیاز علامت گذاری شده اند*</span>
                            </div>

                            <div className='mt-[3rem] flex gap-[1.5rem] w-full max-[500px]:flex-col'>
                                <div className='flex flex-col gap-[1rem] w-full'>
                                    <div className='w-full'>
                                        <input className='py-[0.6rem] w-full px-[1rem] rounded-md bg-white box-shadow outline-0' placeholder='نام'/>
                                    </div>
                                    <div className='w-full'>
                                        <input className='py-[0.6rem] w-full px-[1rem] rounded-md bg-white box-shadow outline-0' placeholder='ایمیل'/>
                                    </div>
                                    <div className='w-full'>
                                        <input type='submit' className='py-[0.6rem] w-full px-[1rem] rounded-md bg-red-500 text-white box-shadow outline-0 cursor-pointer' value='ارسال دیدگاه' />
                                    </div>
                                </div>
                                <div className='w-full'>
                                    <div className='w-full'>
                                        <textarea className='py-[0.6rem] w-full px-[1rem] rounded-md bg-white box-shadow outline-0 h-[10rem] resize-none' placeholder='لطفا متن خود را تایپ کنید. (حداقل 4 کلمه)'></textarea>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <ContactUs/>
            <Footer/>
        </>
    )
}