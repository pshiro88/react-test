import React from 'react';
import IndiaMap from '../components/map';
import ShipImage from '../assets/ship.jpg';
// import { FaWhatsapp } from 'react-icons/fa';

export default function NetworkPage() {
  return (
    <div className='flex flex-col items-center justify-center h-auto w-full ' id='NETWORK'>
      <div className='flex flex-col justify-between items-center lg:w-2/3 w-full mt-10 lg:h-44 '>
        <h2 className='text-[#ff6525] font-semibold lg:text-2xl text-sm tracking-wider py-4'>Network</h2>
        <h1 className=' lg:text-3xl text-xl font-light tracking-wider'>SHM Network <span className='font-bold'>Capability</span></h1>
        <p className='text-center lg:w-3/4 text-sm text-gray-500'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus dolores libero obcaecati culpa non dolor deserunt officiis! Reprehenderit quod eligendi debitis nesciunt cumque excepturi repellat saepe, ab, accusamus, praesentium similique.</p>
      </div>
      <div className="relative w-full h-auto bg-cover bg-center  justify-center items-center py-14" style={{ backgroundImage: `url(${ShipImage})` }}>
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-transparent opacity-80"></div>
        <div className="absolute inset-0 bg-white opacity-60"></div> {/* Overlay div */}
        <div className="relative z-10 flex justify-center"> {/* Ensures the map is above the overlay */}
          <IndiaMap />
        </div>
      </div>

      {/* <div className='h-96 w-full'>
        <div className=" bg-orange-500 text-white h-full w-full  rounded-b-lg shadow-lg ">
      <div className="absolute top-0 left-0 right-0 h-full w-full bg-orange-500" style={{ clipPath: 'ellipse(50% 20% at 50% 0%)' }}>
      <div className="relative z-10 text-center">
        <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
        <button className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full">
          <FaWhatsapp className="mr-2" /> Contact Us
        </button>
      </div>
    </div>
    </div>
    </div> */}

    </div>
  )
}
