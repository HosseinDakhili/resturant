import React from 'react'

export default function PopularDishes() {
  return (
    <section className='flex flex-col gap-8 items-center mt-22 w-full px-4 sm:px-6 lg:px-8'>
        <h3 className='text-red-600 font-bold text-center text-xl sm:text-2xl'>Popular Dishes</h3>
        <div className='flex gap-4 sm:gap-6 md:gap-8 lg:gap-10 overflow-x-auto pb-4 w-full'>
            <img 
              src="/public/assets/Media/Pages/Home/d1.png" 
              alt="" 
              className='w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 object-cover flex-shrink-0 rounded-lg'
            />
            <img 
              src="/public/assets/Media/Pages/Home/d2.png" 
              alt="" 
              className='w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 object-cover flex-shrink-0 rounded-lg'
            />
            <img 
              src="/public/assets/Media/Pages/Home/d3.png" 
              alt="" 
              className='w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 object-cover flex-shrink-0 rounded-lg'
            />
            <img 
              src="/public/assets/Media/Pages/Home/d1.png" 
              alt="" 
              className='w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 object-cover flex-shrink-0 rounded-lg'
            />
            <img 
              src="/public/assets/Media/Pages/Home/d5.png" 
              alt="" 
              className='w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 object-cover flex-shrink-0 rounded-lg'
            />
        </div>
    </section>
  )
}