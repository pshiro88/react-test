import React from 'react'
import backgroundVideo from '../assets/hero-video.mp4'
import { FaCaretSquareLeft, FaCaretSquareRight } from "react-icons/fa";
import { FaPhone, FaEdit } from 'react-icons/fa';

export default function Hero() {
    return (
        <div className="relative h-screen w-full overflow-hidden lg:rounded-bl-[200px]" id='HOME'>
            <div className="fixed z-10 right-0 top-1/2  transform -translate-y-1/2 flex flex-col space-y-4">
                <div className="group">
                    <button className="flex items-center px-4 w-full py-2 bg-[#be4d91] text-white rounded-l-xl hover:bg-[#ff59bd] transition-all duration-300 hover:pl-6">
                        <span className="transition-opacity duration-300">Enroll Now</span>
                    </button>
                </div>
                <div className="group">
                    <button className="flex items-center px-4 py-2 bg-[#1e8ed0] text-white rounded-l-xl hover:bg-[#57bef9] transition-all duration-300 hover:pl-6">
                        <span className=" transition-opacity duration-300">Request Call Back</span>
                    </button>
                </div>
            </div>
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                src={backgroundVideo}
                autoPlay
                loop
                muted
            />
            <div className="absolute inset-0  bg-gradient-to-t from-black to-transparent opacity-80"></div>
            <div className="absolute w-full bottom-0 right-0 flex space-y-2  items-end justify-end">
                <div className="flex flex-grow h-[120px] lg:ms-[250px] items-center lg:space-x-10 space-x-2 p-4 rounded-lg shadow-lg">
                    <h2 className='text-white text:lg lg:text-xl font-bold'>ANNOUNCEMENT</h2>
                    <div className="w-[2px] h-[80px] bg-yellow-500"></div>
                    <h3 className='text-white  text:sm lg:text-xl font-bold leading-5'>Admissions are open for the academic year 2021-22</h3>
                    <span className='flex text-blue-500 '>
                        <button className="flex items-center   duration-300">
                            <FaCaretSquareLeft className="mr-1" size={32} />
                        </button>
                        <button className="flex items-center    duration-300">
                            <FaCaretSquareRight className="ml-1" size={32} />
                        </button>
                    </span>
                </div>

                <div className="bg-white w-[400px] h-[120px] lg:p-4 rounded-tl-xl hidden lg:block ">
                    <h2 className="text-xl text-blue-500 font-semibold"><span className='font-bold'>Empowering students</span><br /> to create solutions<br /> for tomorrow's challenge</h2>
                </div>
            </div>
        </div>
    )
}
