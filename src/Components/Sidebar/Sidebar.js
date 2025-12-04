import './Sidebar.css'
import React from 'react'
import ReactDOM from 'react-dom'
import {Link} from 'react-router-dom'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";

export default function Sidebar({onClose, isToggle}) {
    return ReactDOM.createPortal(
        <>
            <div
                className={`modal-basket-container fixed top-0 left-0 bg-black/60 h-[100vh] w-full z-[999] ${isToggle ? 'open-con' : ''}`}>
                <div className={`modal-basket w-[320px] h-[100vh] bg-white relative ${isToggle ? 'open' : ''}`}>

                    <div className={'bg-red-500 h-[120px] w-full flex justify-between items-center px-[1.5rem]'}>
                        <div className={'w-[120px] h-[38px]'}>
                            <img className={'w-full h-full object-cover'}
                                 src={process.env.PUBLIC_URL + '/images/logo1.png'}/>
                        </div>

                        <div className={'bg-white rounded-md flex justify-center items-center h-[30px] w-[30px]'}>
                            <button onClick={onClose} className='flex items-center text-black text-2xl'>
                                <ion-icon name="close"></ion-icon>
                            </button>
                        </div>
                    </div>

                    <ul className='flex flex-col mt-[2rem] px-[1.5rem]'>
                        <li className='main-header__item py-[0.8rem ] border-b-[2px] border-black/60 border-dotted'><Link className='hover:text-black duration-200 ease-in-out text-black' to=''> خانه<KeyboardArrowDownIcon /></Link></li>
                        <li className='main-header__item py-[0.8rem] border-b-[2px] border-black/60 border-dotted'>
                            <Link className='hover:text-black duration-200 ease-in-out' to=''>وبلاگ</Link>
                            <ul className='main-header__dropdown'>
                                <li className='py-[0.3rem]'><Link className='text-black text-sm hover:text-white hover:bg-red-500 ease-in-out duration-300 p-[0.1rem] rounded-md' to='/blog'>خدمات پس از فروش کاراسته اتفاقی نیست</Link></li>
                            </ul>
                        </li>
                        <li className='main-header__item py-[0.8rem] border-b-[2px] border-black/60 border-dotted'>
                            <Link className='hover:text-black duration-200 ease-in-out' to='/category'>محصولات</Link>
                            <ul className='main-header__dropdown'>
                                <li className='py-[0.5rem]'><Link className='text-sm hover:text-white hover:bg-red-500 ease-in-out duration-300 bg-red-500 p-[0.5rem] rounded-xl text-white' to=''>ابزار آلات جا به جایی</Link></li>
                                <li className='py-[0.5rem]'><Link className='text-black text-sm hover:text-white hover:bg-red-500 ease-in-out duration-300 p-[0.5rem] rounded-xl' to=''>ابزار بنزینی</Link></li>
                                <li className='py-[0.5rem]'><Link className='text-black text-sm hover:text-white hover:bg-red-500 ease-in-out duration-300 p-[0.5rem] rounded-xl' to=''>ابزار شارژری</Link></li>
                                <li className='py-[0.5rem]'><Link className='text-black text-sm hover:text-white hover:bg-red-500 ease-in-out duration-300 p-[0.5rem] rounded-xl' to=''>ابزار ساختمانی</Link></li>
                                <li className='py-[0.5rem]'><Link className='text-black text-sm hover:text-white hover:bg-red-500 ease-in-out duration-300 p-[0.5rem] rounded-xl' to=''>ابزار دسته دوم</Link></li>
                            </ul>
                        </li>
                        <li className='main-header__item py-[0.8rem] border-b-[2px] border-black/60 border-dotted'>
                            <Link className='hover:text-black duration-200 ease-in-out' to=''>پروژه ها</Link>
                            <ul className='main-header__dropdown'>
                                <li className='py-[0.3rem]'><Link className='text-black text-sm hover:text-white hover:bg-red-500 ease-in-out duration-300 p-[0.1rem] rounded-md' to='/project'>پروژه ساخت بتن آرمه</Link></li>
                            </ul>
                        </li>
                        <li className='main-header__item py-[0.8rem] border-b-[2px] border-black/60 border-dotted'>
                            <Link className='hover:text-black duration-200 ease-in-out' to=''>برگه ها</Link>
                            <ul className='main-header__dropdown'>
                                <li className='py-[0.3rem]'><Link className='text-black text-sm hover:text-white hover:bg-red-500 ease-in-out duration-300 p-[0.1rem] rounded-md' to=''>حساب کاربری من</Link></li>
                                <li className='py-[0.3rem]'><Link className='text-black text-sm hover:text-white hover:bg-red-500 ease-in-out duration-300 p-[0.1rem] rounded-md' to=''>سبد خرید</Link></li>
                                <li className='py-[0.3rem]'><Link className='text-black text-sm hover:text-white hover:bg-red-500 ease-in-out duration-300 p-[0.1rem] rounded-md' to=''>پرداخت</Link></li>
                                <li className='py-[0.3rem]'><Link className='text-black text-sm hover:text-white hover:bg-red-500 ease-in-out duration-300 p-[0.1rem] rounded-md' to='/contact'>تماس با ما</Link></li>
                                <li className='py-[0.3rem]'><Link className='text-black text-sm hover:text-white hover:bg-red-500 ease-in-out duration-300 p-[0.1rem] rounded-md' to='/about'>درباره ما</Link></li>
                            </ul>
                        </li>
                    </ul>

                    <div className={'absolute bottom-[2rem] px-[1.5rem]'}>
                        <div className={'flex flex-col gap-[12px]'}>

                            <div>
                                <Link className={'px-[1.8rem] py-[0.5rem] rounded-md bg-black text-white'}
                                      to={'/login'}>ورود / ثبت نام</Link>
                            </div>

                            <div className={''}>
                                <span className={'text-black/70'}><PhoneInTalkOutlinedIcon fontSize='large'/>شماره تماس 09133354323</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>, document.getElementById('modal-parent')
    )
}