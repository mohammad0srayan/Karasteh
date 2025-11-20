import React from 'react'
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import 'leaflet/dist/leaflet.css';

export default function BodyContact () {

    const cities = [
        { name: "تهران", lat: 35.6892, lng: 51.3890, info: "دفتر مرکزی" },
        { name: "اصفهان", lat: 32.6525, lng: 51.6675, info: "دفتر اصفهان" },
    ];

    return (
        <div className='max-w-[1650px] mx-auto px-[4rem] pb-[12rem] max-[1200px]:px-[1rem]'>
            <div className='bg-white rounded-md p-[2rem] mt-[3rem] flex gap-[1rem] w-full box-contact--form max-[1050px]:flex-col'>
                <div className='w-full'>
                    <div className='flex min-[1050px]:gap-[5rem] max-[1050px]:justify-between max-[690px]:flex-col max-[690px]:gap-[3rem]'>
                        <div>
                            <h2 className='text-4xl font-bold'>با ما در تماس باشید</h2>
                            <p className='text-brand-dark mt-[1.8rem] font-semibold'>پاسخگوی پرسش های شما هستیم...</p>
                        </div>
                        <ul className='flex flex-col gap-[0.5rem]'>
                            <li className='flex items-center gap-[0.5rem] max-[1050px]:flex-row-reverse max-[690px]:flex-row'><FmdGoodOutlinedIcon fontSize='small' />خیابان حافظ، ابتدای خیابان جامی، پلاک 16</li>
                            <li className='flex items-center gap-[0.5rem] max-[1050px]:flex-row-reverse max-[690px]:flex-row'><EmailOutlinedIcon fontSize='small' />karasteh@gmail.com</li>
                            <li className='flex items-center gap-[0.5rem] max-[1050px]:flex-row-reverse max-[690px]:flex-row'><PhoneInTalkOutlinedIcon fontSize='small' />021-33334642</li>
                        </ul>
                    </div>
                    <form className='mt-[2rem]'>
                        <div className='flex gap-[1rem]'>
                            <div className='w-full'>
                                <input className='py-[0.6rem] px-[1rem] rounded-md bg-gray-200 w-full' type='text' placeholder='نام نام خانوادگی' />
                            </div>
                            <div className='w-full'>
                                <input className='py-[0.6rem] px-[1rem] rounded-md bg-gray-200 w-full' type='text' placeholder='شماره تماس' />
                            </div>
                        </div>
                        <div className='w-full mt-[1rem] relative'>
                            <textarea className='py-[0.6rem] px-[1rem] rounded-md bg-gray-200 w-full h-[12.5rem] resize-none'></textarea>
                            <button className='bg-red-500 rounded-md text-white py-[0.5rem] px-[1rem] absolute bottom-[1rem] left-[1rem]'>ارسال</button>
                        </div>
                    </form>
                </div>
                <div className='w-full max-[1050px]:h-[25rem] border-dotted border-red-500 border-2 p-[0.3rem] rounded-xl'>
                    <div className='p-[1rem] bg-gray-200 h-full rounded-xl'>
                        <MapContainer center={[32, 53]} zoom={5} style={{ height: "100%", width: "100%" }}>
                            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                            {cities.map(city => (
                                <Marker key={city.name} position={[city.lat, city.lng]}>
                                    <Popup>
                                        <strong>{city.name}</strong><br />{city.info}
                                    </Popup>
                                </Marker>
                            ))}
                        </MapContainer>
                    </div>
                </div>
            </div>
        </div>
    )
}