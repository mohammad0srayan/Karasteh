import './Index.css'
import {Link} from 'react-router-dom'
import BoxProduct from "../../Components/BoxProduct/BoxProduct";
import ProjectBox from "../../Components/ProjectBox/ProjectBox";
import ProductsBox from "../../Components/ProductsBox/ProductsBox";
import CatalogBox from "../../Components/CatalogBox/CatalogBox";
import UserBox from "../../Components/UserBox/UserBox";
import Logos from "../../Components/Logos/Logos";
import ContactBox from "../../Components/ContactBox/ContactBox";
import BlogBox from "../../Components/BlogBox/BlogBox";
import ContactUs from "../../Components/ContactUs/ContactUs";
import Footer from "../../Components/Footer/Footer";

export default function Index () {
    return (
        <>
            <div className="bg-red-500 h-max pt-[6rem] flex justify-center items-center relative">
                <div className="max-w-[1650px] mx-auto px-[4rem] max-[1192px]:px-[1rem]">
                    <div className="flex justify-center items-center gap-[2rem] max-[1192px]:flex-col">
                        <div className="text-white w-full mb-[5rem]">
                            <h1 className="text-4xl font-semibold max-[500px]:text-2xl">بزرگترین تولید کننده ابزار آلات</h1>
                            <p className="text-justify text-sm mt-4 leading-6 w-full">
                                متخصصان ما در اونیکس با تلاشند و پشتیبان کار همیشه در تا با استفاده از جدیدترین ابزارها
                                و نوآوری ها بهترین ابزارها را برای انواع مختلف شما طراحی و تولید می کنند ما به کیفیت محصولات خود
                                اطمینان کامل داریم و به همین دلیل همه محصولاتمان را با ضمانت ارائه میدهیم.
                            </p>
                            <div className="mt-5">
                                <Link to="" className="bg-black px-[1rem] py-[0.5rem] rounded-md text-white">
                                    مشاهده محصولات
                                </Link>
                            </div>
                        </div>
                        <div className="min-[1192px]:w-full max-[1192px]:w-[40rem] max-[680px]:w-full h-[26rem] max-[450px]:h-[20rem]">
                            <img className="w-full h-full" src="/images/hero-1.png" />
                        </div>
                    </div>
                </div>
            </div>

            <div className='max-w-[1650px] mx-auto px-[4rem] max-[1192px]:px-[1rem]'>
                <BoxProduct />
            </div>

            <section className="max-w-[1650px] mx-auto px-[4rem] pt-[2rem] pb-[5rem] max-[1192px]:px-[1rem]">
                <ProjectBox />
                <ProductsBox />
                <CatalogBox />
            </section>

            <div className='mt-[4rem] mb-[5rem]'>
                <Logos />
            </div>

            <section className="max-w-[1650px] mx-auto px-[4rem] pt-[2rem] pb-[5rem] max-[1192px]:px-[1rem]">
                <UserBox />
            </section>

            <div className='mt-[8rem]'>
                <ContactBox />
            </div>

            <section className='max-w-[1650px] mx-auto px-[4rem] pt-[2rem] pb-[5rem] max-[1192px]:px-[1rem]'>
                <BlogBox />
            </section>

            <div className='mt-[4rem]'>
                <ContactUs />
            </div>

            <Footer />
        </>
    )
}