import './ContactUs.css'
import React from 'react'

export default function ContactUs() {
    return (
        <div className='w-full h-max py-[1rem] contact-us'>
            <div className='max-w-[1650px] mx-auto px-[5rem] flex justify-between items-center max-[860px]:flex-col gap-[1rem] max-[960px]:px-[1rem]'>
                <div className='text-white'>
                    <h2 className='text-xl font-semibold'>از تخفیف ها و اخبار ما با خبر شوید.</h2>
                </div>

                <form className='relative min-[500px]:w-[25rem] max-[500px]:w-full'>
                    <div className='w-full'>
                        <input type='email' className='p-[1rem] rounded-md w-full' placeholder='آدرس ایمیل شما' />
                        <button className='bg-red-500 text-white rounded-md absolute top-2 left-2 py-[0.5rem] px-[2rem]'>ارسال</button>
                    </div>
                </form>
            </div>
        </div>
    )
}