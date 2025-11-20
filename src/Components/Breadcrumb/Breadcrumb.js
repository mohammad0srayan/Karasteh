import './Breadcrumb.css'
import React from "react";
import {Link} from 'react-router-dom'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

export default function Breadcrumb({link}) {
    return (
        <section className={`max-w-[1650px] mx-auto mt-[6rem] ${link === 'کیفیت خدمات سریوان اتفاقی نیست!' || link === 'پروژه ساخت بتن آرمه' ? '' : 'px-[4rem] max-[1050px]:px-[1rem]'}`}>
            <ul className='flex gap-[0.5rem] items-center'>
                <li className='text-brand-dark font-semibold text-sm max-[412px]:text-[0.7rem]'>
                    <Link to='/'>خانه</Link>
                    <span className='text-sm'><ArrowBackIosNewIcon fontSize='small'/></span>
                </li>
                {link === 'کیفیت خدمات سریوان اتفاقی نیست!' ? (
                    <li className='text-brand-dark font-semibold text-sm max-[412px]:text-[0.7rem]'>
                        <Link to='/category'>دسته بندی نشده ها</Link>
                        <span className='text-sm'><ArrowBackIosNewIcon fontSize='small' /></span>
                    </li>
                    ) : null}
                {link === 'پروژه ساخت بتن آرمه' ? (
                    <li className='text-brand-dark font-semibold text-sm max-[412px]:text-[0.7rem]'>
                        <Link to='/category'>پروژه</Link>
                        <span className='text-sm'><ArrowBackIosNewIcon fontSize='small' /></span>
                    </li>
                ) : null}
                <li>
                    <Link to='' className='text-red-500 font-semibold text-sm max-[412px]:text-[0.7rem]'>{link}</Link>
                </li>
            </ul>
        </section>
    )
}