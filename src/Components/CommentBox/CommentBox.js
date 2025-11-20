import './CommentBox.css'
import HeadBoxSection from "../HeadBoxSection/HeadBoxSection";
import React from "react";
import ReplayRoundedIcon from '@mui/icons-material/ReplayRounded';

export default function CommentBox () {
    return (
        <div className='mt-[8rem]'>

            <HeadBoxSection title='دیدگاه ها'/>

            <div className='px-[2rem]'>
                <div className='w-full p-[1rem] box-shadow rounded-md mt-[4rem]'>
                    <div className='flex gap-[1rem] items-center pb-[0.8rem] border-b-[2.5px] border-dotted border-borderBot'>
                        <div className='h-[4rem] w-[4rem]'>
                            <img className='w-full h-full object-cover' src={process.env.PUBLIC_URL + '/images/Ellipse-38-1.png'} />
                        </div>
                        <div className='flex flex-col gap-[0.2rem]'>
                            <span className='text-footer-dark font-semibold'>onix</span>
                            <span className='text-red-500 font-semibold'>1404/02/28</span>
                        </div>
                    </div>
                    <div className='mt-[1rem]'>
                        <p className='text-brand-dark text-sm font-semibold'>
                            یک مقاله دیگه هم در همین رابطه دارید فکر کنم اونم عالی هستش اینم خیلی عالی بود.
                        </p>

                        <div className='mt-[2rem] flex justify-end items-center'>
                            <button className='rounded-md bg-gray-300 flex items-center p-[0.4rem]'><ReplayRoundedIcon fontSize='small' /></button>
                        </div>
                    </div>
                </div>

                <div className='pr-[5rem]'>
                    <div className='w-full p-[1rem] box-shadow rounded-md mt-[1rem]'>
                        <div className='flex gap-[1rem] items-center pb-[0.8rem] border-b-[2.5px] border-dotted border-borderBot'>
                            <div className='h-[4rem] w-[4rem]'>
                                <img className='w-full h-full object-cover' src={process.env.PUBLIC_URL + '/images/Ellipse-38-1.png'} />
                            </div>
                            <div className='flex flex-col gap-[0.2rem]'>
                                <span className='text-footer-dark font-semibold'>onix</span>
                                <span className='text-red-500 font-semibold'>1404/02/28</span>
                            </div>
                        </div>
                        <div className='mt-[1rem]'>
                            <p className='text-brand-dark text-sm font-semibold'>
                                اره خیلی خوبه مقالاتشون من که واقعا میخونم لذت میبرم ازشون واقعا ممنون از سازنده مقالات این سایت.
                            </p>

                            <div className='mt-[2rem] flex justify-end items-center'>
                                <button className='rounded-md bg-gray-300 flex items-center p-[0.4rem]'><ReplayRoundedIcon fontSize='small' /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}