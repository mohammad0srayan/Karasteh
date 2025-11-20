import './Footer.css'
import {Link} from 'react-router-dom'
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import React from "react";

export default function Footer () {
    return (
        <footer className='bg-footer pt-[3rem] pb-[1rem]'>
            <div className='max-w-[1650px] mx-auto flex justify-between gap-[2rem] px-[5rem] max-[1272px]:flex-wrap max-[500px]:px-[1rem]'>

                <div className='w-[60%] max-[500px]:w-full'>
                    <h2 className='text-white mb-[1.5rem] text-xl font-semibold'>لینک های مقید</h2>
                    <div className='flex gap-[4rem]'>
                        <ul className='flex flex-col gap-[0.8rem] text-white'>
                            <li><Link to=''></Link>دفتر مرکزی</li>
                            <li><Link to=''></Link>ایمیل پشتیبانی</li>
                            <li><Link to=''></Link>شماره های تماس</li>
                            <li><Link to=''></Link>شبکه های اجتماعی</li>
                        </ul>
                        <ul className='flex flex-col gap-[0.8rem] text-white'>
                            <li><Link to=''></Link>آرشیو مقالات</li>
                            <li><Link to=''></Link>پرداخت</li>
                            <li><Link to=''></Link>سبد خرید</li>
                            <li><Link to=''></Link>همکاران ما</li>
                        </ul>
                    </div>
                </div>

                <div className='w-full'>
                    <div className='w-[12rem] h-[4rem]'>
                        <img className='w-full h-full object-cover' src='/images/logo-DMnss01L.png' alt='' />
                    </div>
                    <p className="text-white text-justify">
                        گروه صنعتی کاراسته با سابقه‌ای درخشان در تولید و عرضه ابزارآلات دستی و برقی،
                        به عنوان یکی از بزرگ‌ترین تولیدکنندگان ابزارآلات در ایران شناخته می‌شود.
                        ما در کاراسته با تعهد به ارائه محصولات باکیفیت و بادوام، همواره در تلاشیم تا
                        نیازهای متنوع مشتریان خود در سراسر کشور را برآورده سازیم.
                        گروه صنعتی کاراسته با سابقه‌ای درخشان در تولید و عرضه ابزارآلات دستی و برقی،
                        به عنوان یکی از بزرگ‌ترین تولیدکنندگان ابزارآلات در ایران شناخته می‌شود.
                        ما در کاراسته با تعهد به ارائه محصولات باکیفیت و بادوام، همواره در تلاشیم تا
                        نیازهای متنوع مشتریان خود در سراسر کشور را برآورده سازیم.
                    </p>
                </div>

                <div className='w-full'>
                    <h2 className='text-white mb-[1.5rem] text-xl font-semibold'>نشانی ما</h2>
                    <div className='flex justify-between'>
                        <ul className='flex flex-col gap-[0.8rem] text-white'>
                            <li><Link to=''></Link>قالب شرکتی کاراسته</li>
                            <li><Link to=''></Link>برگه نمونه</li>
                            <li><Link to=''></Link>حساب کاربری من</li>
                            <li><Link to=''></Link>فروشگاه</li>
                        </ul>
                        <ul className='flex flex-col gap-[0.8rem] text-white text-left'>
                            <li>خیابان حافظ، ابتدای خیابان جامی، پلاک 16</li>
                            <li>karasteh@gmail.com</li>
                            <li>021-33334642</li>
                            <li>
                                <div className='text-white'>
                                    <Link className='text-white mx-[0.5rem]' to=''><LinkedInIcon /></Link>
                                    <Link className='text-white mx-[0.5rem]' to=''><FacebookIcon /></Link>
                                    <Link className='text-white mx-[0.5rem]' to=''><TelegramIcon /></Link>
                                    <Link className='text-white mx-[0.5rem]' to=''><WhatsAppIcon /></Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className='grid-custom-footer mt-[1rem]'>
                        <button className='p-[1rem] rounded-md text-white bg-footer-dark'>ضمانت با گارانتی</button>
                        <button className='p-[1rem] rounded-md text-white bg-footer-dark'>ارسال رایگان به تهران</button>
                        <button className='p-[1rem] rounded-md text-white bg-footer-dark'>پشتیبانی سریع</button>
                        <button className='p-[1rem] rounded-md text-white bg-footer-dark'>محصولات با کیفیت</button>
                    </div>
                </div>
            </div>
            <div className="flex-1 border-t-2 border-dotted border-brand-light min-w-[4rem] mt-[1rem]"></div>
            <div className='text-center text-white mt-[1rem] px-[1rem]'>
                <p className=''>© ۲۰۲۵ قالب شرکتی کاراسته تمامی حقوق محفوظ است.</p>
            </div>
        </footer>
    )
}