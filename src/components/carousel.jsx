import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css'
import HeroImage from '../assets/Insights.jpg'

export default function FullCrousal({ content, color }) {
    return (
        <div className="flex flex-col lg:h-auto h-1/2 lg:w-4/5 w-full mt-10 justify-center px-2 items-center overflow-hidden">
            <OwlCarousel className="owl-theme  " loop margin={50} autoplay autoplaySpeed={1} items={1} nav responsive={{
                0: {
                    items: 1 // Display one item on smaller screens
                },
                1024: {
                    items: 1 // Display two items on screens larger than or equal to 768px
                }
            }}>
                <div className="item-1 lg:w-4/5 justify-center items-center mx-auto shadow-2xl rounded-3xl overflow-hidden">
                    <div className="bg-white relative flex flex-col">
                        <div className="h-full">
                            <img src={HeroImage} alt="Insights Image" />
                        </div>
                        <div className=" bottom-0 left-0 right-0 bg-orange-500 text-white py-5 px-5 flex justify-between items-center">
                            <span className="flex items-center space-x-12">
                                <p className='hidden lg:block'>1 of 7</p>
                                <p className="lg:text-lg text-sm font-semibold">We track your vessels to deliver at earliest port of call</p>
                            </span>
                            <button className="flex items-center justify-center space-x-2 bg-white text-orange-500 lg:px-6 px-2 py-3 rounded-full focus:outline-none hover:bg-orange-600 hover:text-white">
                                <span className="text-sm">Visit the Page</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="item-2 lg:w-4/5 justify-center items-center mx-auto shadow-2xl rounded-3xl overflow-hidden">
                    <div className="bg-white relative flex flex-col">
                        <div className="h-full">
                            <img src={HeroImage} alt="Insights Image" />
                        </div>
                        <div className=" bottom-0 left-0 right-0 bg-orange-500 text-white py-5 px-5 flex justify-between items-center">
                            <span className="flex items-center space-x-12">
                                <p className='hidden lg:block'>1 of 7</p>
                                <p className="lg:text-lg text-sm font-semibold">We track your vessels to deliver at earliest port of call</p>
                            </span>
                            <button className="flex items-center justify-center space-x-2 bg-white text-orange-500 lg:px-6 px-2 py-3 rounded-full focus:outline-none hover:bg-orange-600 hover:text-white">
                                <span className="text-sm">Visit the Page</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="item-3 lg:w-4/5 justify-center items-center mx-auto shadow-2xl rounded-3xl overflow-hidden">
                    <div className="bg-white relative flex flex-col">
                        <div className="h-full">
                            <img src={HeroImage} alt="Insights Image" />
                        </div>
                        <div className=" bottom-0 left-0 right-0 bg-orange-500 text-white py-5 px-5 flex justify-between items-center">
                            <span className="flex items-center space-x-12">
                                <p className='hidden lg:block'>1 of 7</p>
                                <p className="lg:text-lg text-sm font-semibold">We track your vessels to deliver at earliest port of call</p>
                            </span>
                            <button className="flex items-center justify-center space-x-2 bg-white text-orange-500 lg:px-6 px-2 py-3 rounded-full focus:outline-none hover:bg-orange-600 hover:text-white">
                                <span className="text-sm">Visit the Page</span>
                            </button>
                        </div>
                    </div>
                </div>
            </OwlCarousel>
        </div>

    )
}