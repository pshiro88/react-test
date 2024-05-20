import React from 'react'
import SHMStore from '../assets/ShmStore-logo-feeter.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import OrangeWavy from '../assets/orange-wavy.svg';
import BlueWavy from '../assets/blue-wavy.svg';
import { FaPhoneAlt, FaEnvelope   } from 'react-icons/fa';
import { FaLocationPin } from "react-icons/fa6";

export default function Footer() {
    return (
        <div className="relative h-screen w-full" id='CTA'>
            {/* CTA Section */}
            <div className="bg-orange-500 lg:h-2/5 py-5  flex flex-col items-center bg-cover justify-center" style={{ backgroundImage: `url(${OrangeWavy})` }}>
                <p className="text-white lg:text-lg text-sm font-base">Get Your Product Delivered In</p>
                <p className="text-white lg:text-3xl text-xl font-bold text-center">Your Preferred City Or The Next Port of Call.</p>
                <button className="flex items-center  justify-center mt-5 space-x-2 bg-white text-orange-500 lg:px-6 px-3 lg:py-3 py-2 rounded-full focus:outline-none hover:bg-orange-600 hover:text-white ">
                    <span className='text-sm'>Contact Us</span>
                    <FontAwesomeIcon icon={faWhatsapp} className="text-green-500" size="lg" />
                </button>
            </div>
            <div className="absolute left-10 top-20 w-[300px] p-8 h-[400px] hidden bg-white rounded-xl rounded-tr-[100px] shadow-lg lg:flex flex-col justify-around">
                <img className='p-2' src={SHMStore}></img>
                <div className='w-full flex flex-row items-center'>
                    <div className='w-1/3 h-[3px] bg-[#111a51]'></div>
                    <div className='w-1/3 h-[8px] bg-orange-500 rounded-3xl'></div>
                    <div className='w-1/3 h-[3px] bg-[#111a51]'></div>
                </div>
                <p className='text-sm text-center text-[#111a51] font-base'>We Give you complete control of your shippments.Delivered on time with no hassel.</p>
                <div className='flex justify-around'>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 border-2 border-orange-500 rounded-full text-orange-500 hover:bg-orange-500 hover:text-white transition-colors duration-300">
                        <FontAwesomeIcon icon={faFacebook} size="lg" />
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 border-2 border-orange-500 rounded-full text-orange-500 hover:bg-orange-500 hover:text-white transition-colors duration-300">
                        <FontAwesomeIcon icon={faTwitter} size="lg" />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 border-2 border-orange-500 rounded-full text-orange-500 hover:bg-orange-500 hover:text-white transition-colors duration-300">
                        <FontAwesomeIcon icon={faInstagram} size="lg" />
                    </a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 border-2 border-orange-500 rounded-full text-orange-500 hover:bg-orange-500 hover:text-white transition-colors duration-300">
                        <FontAwesomeIcon icon={faLinkedin} size="lg" />
                    </a>
                </div>
            </div>
            {/* Blue Background Section */}
            <div className="bg-cover lg:h-3/5 flex flex-col justify-start " style={{ backgroundImage: `url(${BlueWavy})` }}>
                {/* Centered Overlay Div */}
                <div className='flex flex-grow'>
                    <div className='flex items-start lg:justify-end  justify-between lg:space-x-40 space-x-2 py-10 lg:w-4/5 mx-auto'>
                        <div className='flex flex-col'>
                            <h1 className='lg:text-2xl  font-bold text-white'>Useful links</h1>
                            <div className='w-3/5 lg:h-[2px] h-[1px] bg-[#405bf7] my-2'></div>
                            <div className='flex flex-col space-y-1  lg:mt-4 mt-2'>
                                <a href="#" className='text-white hover:text-orange-500 transition-colors duration-300'>Blog</a>
                                <a href="#" className='text-white hover:text-orange-500 transition-colors duration-300'>SHM Store</a>
                                <a href="#" className='text-white hover:text-orange-500 transition-colors duration-300'>Register</a>
                            </div>
                        </div>
                        <div className='flex flex-col'>
                            <h1 className='lg:text-2xl  font-bold text-white'>Company</h1>
                            <div className='w-3/5 lg:h-[2px] h-[1px] bg-[#405bf7] my-2'></div>
                            <div className='flex flex-col space-y-1  lg:mt-4 mt-2'>
                                <a href="#" className='text-white hover:text-orange-500 transition-colors duration-300'>Blog</a>
                                <a href="#" className='text-white hover:text-orange-500 transition-colors duration-300'>SHM Group</a>
                                <a href="#" className='text-white hover:text-orange-500 transition-colors duration-300'>Fire Safety</a>
                                <a href="#" className='text-white hover:text-orange-500 transition-colors duration-300'>SHM Shipcare</a>
                                <a href="#" className='text-white hover:text-orange-500 transition-colors duration-300'>SHM Products</a>

                            </div>
                        </div>
                        <div className='flex flex-col'>
                            <h1 className='lg:text-2xl  font-bold text-white'>Company</h1>
                            <div className='w-3/5 lg:h-[2px] h-[1px] bg-[#405bf7] my-2'></div>
                            <div className='flex flex-col space-y-1  lg:mt-4 mt-2'>
                                <a href="#" className='text-white flex justify-center  hover:text-orange-500 transition-colors duration-300'><FaEnvelope size={18} className='text-orange-500 mr-8 mt-auto'/>+91 8169840285</a>
                                <a href="#" className='text-white flex justify-center  hover:text-orange-500 transition-colors duration-300'><FaPhoneAlt  size={18} className='text-orange-500 mr-8 mt-auto'/>info@gmail.com</a>
                                <a href="#" className='text-white flex justify-center  hover:text-orange-500 transition-colors duration-300'><FaLocationPin   size={18} className='text-orange-500 mr-8 mt-auto'/>info@gmail.com</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex lg:flex-row flex-col  lg:h-2/5 py-8 px-10 justify-between bg-[#0c1443] text-white'>
                    <div className='flex flex-col  justify-between'>
                        <span>
                            <span>
                                <h1 className='lg:text-2xl font-bold'>Have Questions?</h1>
                                <p>Ask Our 24/7 Customer Support Executive</p>
                            </span>
                            <p className='py-2 lg:text-xl font-semibold'>Call Us: +91 1800-3002-7286</p>
                        </span>

                    </div>
                    <div className='flex flex-col h-auto justify-between'>
                        <span>
                            <h1 className='text-lg font-bold'>Subscribe to our newsletter</h1>
                            <div class="flex justify-center mt-2">
                                <div class="flex rounded-full overflow-hidden border border-[#212f7e]">
                                    <input type="email" class="px-4 py-2 focus:outline-none bg-transparent" placeholder="Enter your email" />
                                    <button type="submit" class="px-4 py-2 bg-orange-500 text-white font-semibold rounded-r-full transition duration-300 hover:bg-orange-600">Subscribe</button>
                                </div>
                            </div>
                        </span>
                    </div>

                </div>
                <div className='bg-[#0c1443] h-[100px] flex flex-col justify-center items-center '>
                    <div className='flex lg:flex-row flex-col justify-between w-full px-10 pb-4'>
                        <p className='text-gray-500 hover:text-white'>© 2022 SHM shipcare. All Rights Reserved</p>
                        <div className='flex justify-between  text-gray-500 space-x-7'>
                            <p className='hover:text-white'>Privacy</p>
                            <p className='hover:text-white'>Terms and Condition</p>
                            <p className='hover:text-white'>SiteMap</p>
                        </div>
                    </div>
                    <div className="w-3/4 h-full bg-orange-500 rounded-t-full"></div>
                </div>

            </div>
        </div>
    )
}
