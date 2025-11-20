import './AboutBox.css'
import HeadBoxSection from "../HeadBoxSection/HeadBoxSection";
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import React from "react";

export default function AboutBox() {
    return (
        <div className='mx-auto max-w-[1650px] px-[4rem] mb-[15rem] max-[1100px]:px-[1rem]'>
            <div className='mt-[2rem]'>
                <HeadBoxSection title='درباره کاراسته'/>
            </div>

            <div className='flex gap-[4rem] w-full mt-[2rem] max-[1100px]:flex-col'>
                <div className='w-full'>
                    <p className='text-justify text-brand-dark font-semibold tracking-wider leading-8 max-[500px]:text-sm'>
                        گروه وان با تجربه ای درخشان در تولید و عرضه کننده ابزارهای دستی و برقی به عنوان یکی از بزرگترین
                        تولیدکنندگان ابزارهای دستی و برقی به عنوان یکی از بزرگترین تولیدکنندگان ابزارهای صنعتی در ایران
                        و منطقه شناخته شده است. و ارائه ابزارهای دستی و برقی به عنوان یکی از بزرگترین تامین کنندگان
                        دستگاه ها در ایران و ابزارهای منطقه ای است که ما در اونیکس با ارائه محصولات باکیفیت بادوام و
                        نوآورانه همیشه در تلاشیم تا نیازهای متنوع خود در سراسر کشور را در نظر بگیرید همیشه در تلاشیم با
                        استفاده از جدیدترین فناوری ها و ابزارهای نوآوری که بهترین ابزارها را برای طراحی و تولید نیاز
                        دارند. خود طراحی و تولید بهترین گروه صنعتی اونیکس با سابقه درخشان در تولید و تولید وسایل برقی دستی به
                        عنوان یکی از بزرگترین ابزارهای ابزارآلات در ایران و منطقه را پیدا می کند.
                    </p>
                </div>
                <div className='w-full h-[20rem] border-dotted border-red-500 border-2 p-[0.3rem] rounded-xl'>
                    <div className='bg-red-500 h-full rounded-xl relative'>
                        <div className='w-full h-[20rem] rounded-xl absolute top-[1rem] -left-[1rem]'>
                            <img className='w-full h-full object-cover rounded-xl relative' src={process.env.PUBLIC_URL + '/images/blog/Rectangle-11-1.png'} />
                            <button className='w-[4rem] h-[4rem] bg-red-500 absolute top-[42%] left-[44%] rounded-full flex justify-center items-center'>
                                <span className='text-white'><PlayArrowOutlinedIcon fontSize='large' /></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}