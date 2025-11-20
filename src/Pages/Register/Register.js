import './Register.css'
import Footer from "../../Components/Footer/Footer";
import ContactUs from "../../Components/ContactUs/ContactUs";
import HeadBoxSection from "../../Components/HeadBoxSection/HeadBoxSection";
import {Link} from "react-router-dom";

export default function Register () {
    return (
        <div>

            <div className='w-full my-[8rem] flex flex-col gap-[1rem] justify-center items-center'>
                <div className='w-[45rem] h-full p-[1rem] bg-white box-contact--form rounded-md flex gap-[1rem] max-[728px]:w-full max-[600px]:flex-col'>
                    <div className='w-full'>
                        <HeadBoxSection title='ثبت نام در سایت' />
                        <p className='text-brand-dark mt-[1rem] text-sm leading-5'>
                            لطفا برای عضویت در پورتال و خرید، اطلاعات این فرم را تکمیل<br />
                            کنید.
                        </p>
                        <form className='w-full mt-[1rem] flex-col flex gap-[0.5rem]'>
                            <div className='w-full'>
                                <input className='py-[0.5rem] px-[1rem] bg-gray-200 rounded-md w-full' placeholder='نام کاربری' />
                            </div>
                            <div className='w-full'>
                                <input className='py-[0.5rem] px-[1rem] bg-gray-200 rounded-md w-full' placeholder='شماره تماس' />
                            </div>
                            <div className='w-full'>
                                <input className='py-[0.5rem] px-[1rem] bg-gray-200 rounded-md w-full' placeholder='رمز عبور' />
                            </div>
                            <div>
                                <p className='mt-[1rem] font-semibold text-sm'>قبلا ثبت نام کرده اید؟<Link className='text-red-500 underline font-semibold' to='/login'>ورود به سایت</Link></p>
                            </div>
                            <div className='mt-[1rem]'>
                                <button className='text-white bg-red-500 rounded-md px-[4rem] py-[0.5rem]'>عضویت</button>
                            </div>
                        </form>
                    </div>
                    <div className='w-full bg-red-500 max-[600px]:h-[20rem] rounded-md flex justify-center items-center'>
                        <img className='w-[10rem] h-[3rem] object-cover' src='/images/logo-DMnss01L.png' />
                    </div>
                </div>
                <div className='flex justify-center items-center w-full'>
                    <Link className='hover:text-red-500 ease-in-out duration-300' to='/'>بازگشت به صفحه اصلی</Link>
                </div>
            </div>

            <ContactUs />
            <Footer />
        </div>
    )
}