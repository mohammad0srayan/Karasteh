import './Navbar.css'
import {Link} from "react-router-dom";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {useState} from "react";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

export default function Navbar () {

    const [showBasketProduct, setShowBasketProduct] = useState(false)
    const [isLogin, setLogin] = useState(true)

    return (
        <header className="flex justify-between items-center bg-red-500">
            <nav className='flex justify-between items-center w-full text-white py-[0.5rem] min-[1160px]:px-[4rem] max-w-[1650px] mx-auto max-[1160px]:px-[1rem]'>
                <div className='flex items-center gap-[1rem]'>
                    <div className='w-[12rem] h-[4rem]'><img className='w-full h-full object-cover' src={process.env.PUBLIC_URL + '/images/logo-DMnss01L.png'} alt='' /></div>
                    <ul className='flex text-white max-[1100px]:hidden'>
                        <li className='main-header__item'><Link className='hover:text-black duration-200 ease-in-out text-black' to=''>خانه</Link></li>
                        <li className='main-header__item'>
                            <Link className='hover:text-black duration-200 ease-in-out' to=''>وبلاگ<KeyboardArrowDownIcon /></Link>
                            <ul className='main-header__dropdown'>
                                <li className='py-[0.3rem]'><Link className='text-black text-sm hover:text-white hover:bg-red-500 ease-in-out duration-300 p-[0.1rem] rounded-md' to='/blog'>خدمات پس از فروش کاراسته اتفاقی نیست</Link></li>
                            </ul>
                        </li>
                        <li className='main-header__item'>
                            <Link className='hover:text-black duration-200 ease-in-out' to='/category'>محصولات</Link>
                            <ul className='main-header__dropdown'>
                                <li className='py-[0.5rem]'><Link className='text-sm hover:text-white hover:bg-red-500 ease-in-out duration-300 bg-red-500 p-[0.5rem] rounded-xl text-white' to=''>ابزار آلات جا به جایی</Link></li>
                                <li className='py-[0.5rem]'><Link className='text-black text-sm hover:text-white hover:bg-red-500 ease-in-out duration-300 p-[0.5rem] rounded-xl' to=''>ابزار بنزینی</Link></li>
                                <li className='py-[0.5rem]'><Link className='text-black text-sm hover:text-white hover:bg-red-500 ease-in-out duration-300 p-[0.5rem] rounded-xl' to=''>ابزار شارژری</Link></li>
                                <li className='py-[0.5rem]'><Link className='text-black text-sm hover:text-white hover:bg-red-500 ease-in-out duration-300 p-[0.5rem] rounded-xl' to=''>ابزار ساختمانی</Link></li>
                                <li className='py-[0.5rem]'><Link className='text-black text-sm hover:text-white hover:bg-red-500 ease-in-out duration-300 p-[0.5rem] rounded-xl' to=''>ابزار دسته دوم</Link></li>
                            </ul>
                        </li>
                        <li className='main-header__item'>
                            <Link className='hover:text-black duration-200 ease-in-out' to=''>پروژه ها<KeyboardArrowDownIcon /></Link>
                            <ul className='main-header__dropdown'>
                                <li className='py-[0.3rem]'><Link className='text-black text-sm hover:text-white hover:bg-red-500 ease-in-out duration-300 p-[0.1rem] rounded-md' to='/project'>پروژه ساخت بتن آرمه</Link></li>
                            </ul>
                        </li>
                        <li className='main-header__item'>
                            <Link className='hover:text-black duration-200 ease-in-out' to=''>برگه ها<KeyboardArrowDownIcon /></Link>
                            <ul className='main-header__dropdown'>
                                <li className='py-[0.3rem]'><Link className='text-black text-sm hover:text-white hover:bg-red-500 ease-in-out duration-300 p-[0.1rem] rounded-md' to=''>حساب کاربری من</Link></li>
                                <li className='py-[0.3rem]'><Link className='text-black text-sm hover:text-white hover:bg-red-500 ease-in-out duration-300 p-[0.1rem] rounded-md' to=''>سبد خرید</Link></li>
                                <li className='py-[0.3rem]'><Link className='text-black text-sm hover:text-white hover:bg-red-500 ease-in-out duration-300 p-[0.1rem] rounded-md' to=''>پرداخت</Link></li>
                                <li className='py-[0.3rem]'><Link className='text-black text-sm hover:text-white hover:bg-red-500 ease-in-out duration-300 p-[0.1rem] rounded-md' to='/contact'>تماس با ما</Link></li>
                                <li className='py-[0.3rem]'><Link className='text-black text-sm hover:text-white hover:bg-red-500 ease-in-out duration-300 p-[0.1rem] rounded-md' to='/about'>درباره ما</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className='flex justify-center items-center gap-4 flex-row-reverse'>
                    <div className='min-[1100px]:hidden'>
                        <button className='flex items-center text-white text-3xl'><ion-icon name="menu"></ion-icon></button>
                    </div>
                    <Link className='bg-black pt-[0.4rem] pb-[0.5rem] px-[1.5rem] rounded-[10px] font-semibold max-[700px]:hidden' to='/register'>{!isLogin ? 'ورود / ثبت نام' : 'محمد مهدی سرایان'}</Link>
                    <div className='bg-white p-[0.3rem] rounded-md main-box__item' onClick={() => setShowBasketProduct(prev => !prev)}>
                        <Link to=''><ShoppingCartOutlinedIcon color='action' /></Link>
                        <div className={!showBasketProduct ? 'main-box__dropdown' : 'main-box__dropdown show-box'}>
                            <div className='flex flex-col gap-[1rem] text-center p-[1rem]'>
                                <span className='text-gray-500'><ShoppingBasketIcon fontSize='large' /></span>
                                <span className='text-black text-sm'>سبد خرید شما خالی است</span>
                                <button className='px-[1rem] py-[0.5rem] rounded-xl bg-red-500 text-white'>به فروشگاه بروید</button>
                            </div>
                        </div>
                    </div>
                    <Link to='' className='flex items-center text-white flex-row-reverse gap-2 max-[1100px]:hidden'>
                        <PhoneInTalkOutlinedIcon fontSize='large' />
                        <div className='flex flex-col gap-1 text-sm'>
                            <span className='text-left'>شماره تماس</span>
                            <span>09132233223</span>
                        </div>
                    </Link>
                </div>
            </nav>
        </header>
    )
}