import './CategoryBox.css'
import HeadBoxSection from "../HeadBoxSection/HeadBoxSection";
import React from "react";
import SearchIcon from '@mui/icons-material/Search';

export default function CategoryBox () {
    return (
        <div className='mx-auto max-w-[1650px] min-[1650px]:px-[4rem] px-0 mb-[15rem] mt-[4rem] max-[1100px]:px-[1rem]'>
            <div>
                <div className="flex items-center justify-between w-full">
                    <h3 className="font-bold text-gray-800 title-box text-3xl">پروژه‌ها</h3>
                    <div className="flex-grow border-t border-dotted border-gray-400 mx-4"></div>
                    <select className="cursor-pointer flex items-center justify-between w-[14rem] px-[1rem] bg-gray-100 border border-gray-200 text-gray-600 text-sm py-[0.7rem] rounded-md hover:bg-gray-200 transition">
                        <option value='پیش فرض'>پیش‌فرض</option>
                        <option value='پربازدید ترین'>پربازدید ترین</option>
                        <option value='جدید ترین'>جدید ترین</option>
                    </select>
                </div>
            </div>

            <div className='flex gap-[4rem] w-full mt-[2rem] max-[1100px]:flex-col'>
                <div className='w-[33rem] max-[1100px]:w-full'>
                    <div className='p-[1rem] bg-white rounded-md box-contact--form w-full'>
                        <h2 className='text-xl font-semibold'>جستجو</h2>
                        <div className='w-full mt-[1rem] relative'>
                            <input type='text' className='w-full py-[0.5rem] px-[3rem] bg-gray-200 rounded-md' placeholder='دنبال چه میگردید' />
                            <span className='absolute top-[0.5rem] right-[1rem] text-brand-dark'><SearchIcon /></span>
                        </div>
                    </div>

                    <div className='py-[1.5rem] px-[1rem] bg-white rounded-md box-contact--form w-full mt-[1.5rem]'>
                        <h2 className='text-xl font-semibold'>دسته بندی های پروژه</h2>
                        <div className="flex-1 border-t-2 border-dotted bg-gray-400 min-w-[4rem] mt-[0.5rem]"></div>
                        <ul className='w-full mt-[1.5rem] flex flex-col gap-[1rem]'>
                            <li className='flex justify-between items-center'>
                                <span className='font-semibold'>بتن</span>
                                <div>
                                    <button className='border-[1px] border-footer-light py-[0.1rem] px-[0.6rem] rounded-md'>8</button>
                                </div>
                            </li>
                            <li className='flex justify-between items-center'>
                                <span className='font-semibold'>برش</span>
                                <div>
                                    <button className='border-[1px] border-footer-light py-[0.1rem] px-[0.6rem] rounded-md'>3</button>
                                </div>
                            </li>
                            <li className='flex justify-between items-center'>
                                <span className='font-semibold'>تخریب</span>
                                <div>
                                    <button className='border-[1px] border-footer-light py-[0.1rem] px-[0.6rem] rounded-md'>8</button>
                                </div>
                            </li>
                            <li className='flex justify-between items-center'>
                                <span className='font-semibold'>جوش</span>
                                <div>
                                    <button className='border-[1px] border-footer-light py-[0.1rem] px-[0.6rem] rounded-md'>8</button>
                                </div>
                            </li>
                            <li className='flex justify-between items-center'>
                                <span className='font-semibold'>درختکاری</span>
                                <div>
                                    <button className='border-[1px] border-footer-light py-[0.1rem] px-[0.6rem] rounded-md'>8</button>
                                </div>
                            </li>
                            <li className='flex justify-between items-center'>
                                <span className='font-semibold'>سوراخکاری</span>
                                <div>
                                    <button className='border-[1px] border-footer-light py-[0.1rem] px-[0.6rem] rounded-md'>4</button>
                                </div>
                            </li>
                            <li className='flex justify-between items-center'>
                                <span className='font-semibold'>کشاورزی</span>
                                <div>
                                    <button className='border-[1px] border-footer-light py-[0.1rem] px-[0.6rem] rounded-md'>6</button>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='grid-custom-category w-full'>
                    <div className='w-full h-[25rem] relative'>
                        <img className='w-full h-full object-cover rounded-xl brightness-75' src='/images/blog/206af60d19153a83ecb85379e1183507.jpg'/>

                        <div className='absolute bottom-0 w-full p-[1rem]'>
                            <h2 className='text-white text-xl font-semibold mb-[1rem]'>پروژه ساخت بتن آرمه</h2>

                            <ul className='flex text-white items-center justify-between'>
                                <li className='flex flex-col border-l-[2px] border-dotted border-white pl-[1rem] font-semibold'>
                                    <span>کارفرما:</span>
                                    <span>اقای رحیم پور</span>
                                </li>
                                <li className='flex flex-col border-l-[2px] border-dotted border-white pl-[1rem] font-semibold'>
                                    <span>تاریخ شروع:</span>
                                    <span>1403/05/23</span>
                                </li>
                                <li className='flex flex-col font-semibold'>
                                    <span>تاریخ پایان:</span>
                                    <span>1404/02/04</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='w-full h-[25rem] relative'>
                        <img className='w-full h-full object-cover rounded-xl brightness-75' src='/images/blog/e46c83b581c3c18e0af106e59f6b5eae.jpg'/>

                        <div className='absolute bottom-0 w-full p-[1rem]'>
                            <h2 className='text-white text-xl font-semibold mb-[1rem]'>برش قطعات ساختمان آرا</h2>

                            <ul className='flex text-white items-center justify-between'>
                                <li className='flex flex-col border-l-[2px] border-dotted border-white pl-[1rem] font-semibold'>
                                    <span>کارفرما:</span>
                                    <span>اقای رحیم پور</span>
                                </li>
                                <li className='flex flex-col border-l-[2px] border-dotted border-white pl-[1rem] font-semibold'>
                                    <span>تاریخ شروع:</span>
                                    <span>1403/05/23</span>
                                </li>
                                <li className='flex flex-col font-semibold'>
                                    <span>تاریخ پایان:</span>
                                    <span>1404/02/04</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='w-full h-[25rem] relative'>
                        <img className='w-full h-full object-cover rounded-xl brightness-75' src='/images/blog/Rectangle-11-1.png'/>

                        <div className='absolute bottom-0 w-full p-[1rem]'>
                            <h2 className='text-white text-xl font-semibold mb-[1rem]'>تخریب ساختمان ابوذر</h2>

                            <ul className='flex text-white items-center justify-between'>
                                <li className='flex flex-col border-l-[2px] border-dotted border-white pl-[1rem] font-semibold'>
                                    <span>کارفرما:</span>
                                    <span>اقای رحیم پور</span>
                                </li>
                                <li className='flex flex-col border-l-[2px] border-dotted border-white pl-[1rem] font-semibold'>
                                    <span>تاریخ شروع:</span>
                                    <span>1403/05/23</span>
                                </li>
                                <li className='flex flex-col font-semibold'>
                                    <span>تاریخ پایان:</span>
                                    <span>1404/02/04</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='w-full h-[25rem] relative'>
                        <img className='w-full h-full object-cover rounded-xl brightness-75' src='/images/blog/Rectangle-64.png'/>

                        <div className='absolute bottom-0 w-full p-[1rem]'>
                            <h2 className='text-white text-xl font-semibold mb-[1rem]'>پروژه راه اندازی سازه بتنی</h2>

                            <ul className='flex text-white items-center justify-between'>
                                <li className='flex flex-col border-l-[2px] border-dotted border-white pl-[1rem] font-semibold'>
                                    <span>کارفرما:</span>
                                    <span>اقای رحیم پور</span>
                                </li>
                                <li className='flex flex-col border-l-[2px] border-dotted border-white pl-[1rem] font-semibold'>
                                    <span>تاریخ شروع:</span>
                                    <span>1403/05/23</span>
                                </li>
                                <li className='flex flex-col font-semibold'>
                                    <span>تاریخ پایان:</span>
                                    <span>1404/02/04</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='w-full h-[25rem] relative'>
                        <img className='w-full h-full object-cover rounded-xl brightness-75' src='/images/blog/Rectangle-66.png'/>

                        <div className='absolute bottom-0 w-full p-[1rem]'>
                            <h2 className='text-white text-xl font-semibold mb-[1rem]'>جوش ماشین آلات کارخانه رادمان</h2>

                            <ul className='flex text-white items-center justify-between'>
                                <li className='flex flex-col border-l-[2px] border-dotted border-white pl-[1rem] font-semibold'>
                                    <span>کارفرما:</span>
                                    <span>اقای رحیم پور</span>
                                </li>
                                <li className='flex flex-col border-l-[2px] border-dotted border-white pl-[1rem] font-semibold'>
                                    <span>تاریخ شروع:</span>
                                    <span>1403/05/23</span>
                                </li>
                                <li className='flex flex-col font-semibold'>
                                    <span>تاریخ پایان:</span>
                                    <span>1404/02/04</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='w-full h-[25rem] relative'>
                        <img className='w-full h-full object-cover rounded-xl brightness-75' src='/images/blog/Rectangle-70.png'/>

                        <div className='absolute bottom-0 w-full p-[1rem]'>
                            <h2 className='text-white text-xl font-semibold mb-[1rem]'>سوراخ کاری میز های هتل سپهر</h2>

                            <ul className='flex text-white items-center justify-between'>
                                <li className='flex flex-col border-l-[2px] border-dotted border-white pl-[1rem] font-semibold'>
                                    <span>کارفرما:</span>
                                    <span>اقای رحیم پور</span>
                                </li>
                                <li className='flex flex-col border-l-[2px] border-dotted border-white pl-[1rem] font-semibold'>
                                    <span>تاریخ شروع:</span>
                                    <span>1403/05/23</span>
                                </li>
                                <li className='flex flex-col font-semibold'>
                                    <span>تاریخ پایان:</span>
                                    <span>1404/02/04</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>

            <div className='flex gap-[1rem] justify-center items-center mt-[3rem]'>
                <button className='p-[0.5rem] px-[1rem] rounded-md bg-red-500 box-shadow text-white'>1</button>
                <button className='p-[0.5rem] px-[1rem] rounded-md box-shadow hover:text-white hover:bg-red-500 ease-in-out duration-300'>2</button>
                <button className='p-[0.5rem] px-[1rem] rounded-md box-shadow hover:text-white hover:bg-red-500 ease-in-out duration-300'>بعدی</button>
            </div>
        </div>
    )
}