import React from 'react'
import FullCrousal from '../components/carousel'

export default function Insights() {
  return (
    <div className='flex h-auto flex-col items-center  w-full'>
        <div className='flex flex-col justify-between items-center lg:w-2/3 w-full mt-10 lg:h-44' id='INSIGHTS'>
            <h2 className='text-[#ff6525] font-semibold lg:text-2xl text-sm tracking-wider py-4'>INSIGHTS</h2>
            <h1 className=' lg:text-3xl text-xl font-light tracking-wider'>SHM Store <span className='font-bold'>Marketplace Insights</span></h1>
            <p className='text-center lg:w-3/4 text-sm text-gray-500'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus dolores libero obcaecati culpa non dolor deserunt officiis! Reprehenderit quod eligendi debitis nesciunt cumque excepturi repellat saepe, ab, accusamus, praesentium similique.</p>
        </div>
        <FullCrousal/>
    </div>
  )
}
