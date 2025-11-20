import './ProjectBox.css'
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import React, {useEffect} from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import MessageIcon from "@mui/icons-material/Message";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import CommentBox from "../../Components/CommentBox/CommentBox";
import ContactUs from "../../Components/ContactUs/ContactUs";
import Footer from "../../Components/Footer/Footer";
import AssignmentIcon from '@mui/icons-material/Assignment';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import ProjectBox from "../../Components/ProjectBox/ProjectBox";

export default function ProjectPage() {

    // useEffect(() => {
    //
    //     fetch('http://localhost:8000/home/gallery/', {
    //         method: 'GET',
    //         headers: {
    //             "X-API-KEY": "077daf8b-27d1-49c9-9f0f-a595934c7760"
    //         }
    //     })
    //         .then(res => res.json())
    //         .then(data => console.log(data))
    //
    // }, [])

    return (
        <>
            <div className='mx-auto max-w-[1650px] px-[4rem] mb-[5rem] mt-[4rem] max-[1650px]:px-0'>
                <Breadcrumb link='پروژه ساخت بتن آرمه'/>

                <div
                    className='flex justify-between px-[1rem] items-center py-[0.8rem] bg-gray-100 rounded-md mt-[2rem] flex-wrap gap-[1rem]'>
                    <div>
                        <h2 className='text-xl font-semibold'>پروژه ساخت بتن آرمه</h2>
                    </div>

                    <ul className='flex gap-[0.5rem] items-center max-[824px]:w-full max-[824px]:justify-end'>
                        <li className='text-red-500 border-l-[1px] border-dotted border-red-500 pl-[1rem] text-sm flex gap-[0.2rem]'>
                            <MessageIcon fontSize='small'/>2 دیدگاه
                        </li>
                        <li className='text-red-500 border-l-[1px] border-dotted border-red-500 pl-[1rem] text-sm flex gap-[0.2rem]'>
                            <RemoveRedEyeIcon fontSize='small'/>280
                        </li>
                        <li className='text-red-500 text-sm flex gap-[0.2rem]'><WatchLaterOutlinedIcon
                            fontSize='small'/>2
                        </li>
                    </ul>
                </div>

                <div className='w-full mt-[1rem] relative'>
                    <div className='w-full min-[800px]:h-[35rem] rounded-xl max-[800px]:h-full'>
                        <img className='w-full h-full object-cover rounded-xl brightness-75'
                             src={process.env.PUBLIC_URL +'/images/blog/e46c83b581c3c18e0af106e59f6b5eae.jpg'} />
                    </div>

                    <div
                        className='absolute left-0 top-0 h-full w-full rounded-xl text-white flex items-center justify-between px-[1rem]'>
                        <button className='text-white bg-red-500 rounded-md p-[0.5rem] flex items-center brightness-75'
                                disabled><KeyboardArrowRightRoundedIcon/></button>
                        <div className='flex items-center justify-center'>
                            <button
                                className='flex items-center justify-center bg-red-500 text-white w-[4rem] h-[4rem] rounded-full'>
                                <PlayArrowOutlinedIcon fontSize='large'/></button>
                        </div>
                        <button className='text-white bg-red-500 rounded-md p-[0.5rem] flex items-center'>
                            <KeyboardArrowLeftRoundedIcon/></button>
                    </div>
                </div>

                <div className='mt-[1rem]'>
                    <div className='h-[10rem] w-[20rem] rounded-xl'>
                        <img className='h-full w-full object-cover rounded-xl cursor-pointer'
                             src={process.env.PUBLIC_URL + '/images/blog/Rectangle-11-1.png'} alt=''/>
                    </div>
                </div>

                <div className='w-full px-[1rem] py-[1.5rem] box-shadow-project-box rounded-xl mt-[1rem]'>
                    <div>
                        <p className='text-footer-dark text-sm font-semibold leading-6 text-justify'>
                            این پروژه به بررسی مراحل طراحی، و اجرای بتن آرمه می پردازد. در این تحقیق ویژگی ها و مزایای
                            بتن مسلح، مصالح مورد نیاز استفاده، نحوه آرماتوربندی و نکات اجرایی مربوط به آن مورد تحلیل قرار
                            می گیرد. هدف از این پروژه، ارائه دیدگاهی کامل نسبت به فرآیند ساخت به فرآیند ساخت بتن آرمه و
                            کاربردهای آن در سازه های مختلف عمرانی است.
                        </p>
                    </div>

                    <div className='border-borderBot border-b-[2px] w-full h-5 border-dotted mt-[2rem]'></div>

                    <ul className='flex justify-around items-center mt-[2rem] max-[1214px]:flex-col w-full max-[1214px]:gap-[3rem]'>

                        <li className='flex gap-[1.5rem] items-center min-[800px]:font-bold min-[800px]:text-xl max-[1214px]:justify-between max-[1214px]:items-center w-full'>
                            <span className='flex items-center gap-[0.5rem]'><span className='text-brand-dark'><AssignmentIcon fontSize='large' /></span>کارفرما: </span>
                            <span className='py-[0.5rem] rounded-md bg-gray-100 text-sm font-normal px-[2rem] box-shadow'>آقای رحیم پور</span>
                        </li>
                        <li className='flex gap-[1.5rem] items-center min-[800px]:font-bold min-[800px]:text-xl max-[1214px]:justify-between max-[1214px]:items-center w-full'>
                            <span className='flex items-center gap-[0.5rem]'><span className='text-brand-dark'><CalendarMonthIcon fontSize='large' /></span>تاریخ شروع: </span>
                            <span className='py-[0.5rem] rounded-md bg-gray-100 text-sm font-normal px-[2rem] box-shadow'>1404/02/26</span>
                        </li>
                        <li className='flex gap-[1.5rem] items-center min-[800px]:font-bold min-[800px]:text-xl max-[1214px]:justify-between max-[1214px]:items-center w-full'>
                            <span className='flex items-center gap-[0.5rem]'><span className='text-brand-dark'><FactCheckIcon fontSize='large' /></span>تاریخ پایان: </span>
                            <span className='py-[0.5rem] rounded-md bg-gray-100 text-sm font-normal px-[2rem] box-shadow'>1404/04/21</span>
                        </li>
                        <li className='flex gap-[1.5rem] items-center min-[800px]:font-bold min-[800px]:text-xl max-[1214px]:justify-between max-[1214px]:items-center w-full'>
                            <span className='flex items-center gap-[0.5rem]'><span className='text-brand-dark'><InsertChartIcon fontSize='large' /></span>رضایت مشتری: </span>
                            <span className='py-[0.5rem] rounded-md bg-gray-100 text-sm font-normal px-[2rem] box-shadow'>بسیار عالی</span>
                        </li>
                    </ul>
                </div>

                <CommentBox/>

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

                <div className='mt-[8rem]'>
                    <ProjectBox />
                </div>
            </div>

            <ContactUs/>
            <Footer/>
        </>
    )
}