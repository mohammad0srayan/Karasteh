import React from 'react'
import {Link} from 'react-router-dom'

export default function CatalogBox () {
    return (
        <div className='px-[1.5rem] mt-[10rem] max-[960px]:px-0'>
            <div className='bg-red-500 py-[2rem] px-[2.5rem] max-[500px]:px-[1rem] text-white font-semibold rounded-md flex gap-[2rem] min-[864px]:justify-between min-[864px]:items-center relative max-[864px]:flex-col'>
                <div>
                    <h2 className='text-xl max-[420px]:text-md'>دریافت رایگان کاتالوگ مصحولات کاراسته</h2>
                    <p className='text-sm my-[1rem] font-normal'>با بیش از 2000 نوع ابزار مختلف و 24000 قطعات یدکی، ما در کنار شما هستیم تا تقریبا هر کاری را انجام دهید.</p>
                    <div className=''>
                        <Link className='px-[1rem] py-[0.5rem] bg-black text-white font-normal rounded-md' to=''>دریافت کاتالوگ</Link>
                    </div>
                </div>
                <div className='min-[864px]:w-[30rem] max-[864px]:w-full h-[13rem] min-[1360px]:absolute min-[1360px]:-top-[2rem] min-[1360px]:left-[3rem]'>
                    <img className='w-full h-full rounded-xl object-cover' src={process.env.PUBLIC_URL + '/images/2.jpg'} />
                </div>
            </div>
        </div>
    )
}