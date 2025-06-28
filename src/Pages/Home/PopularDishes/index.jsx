import React from 'react'

export default function PopularDishes() {
  return (
    <section className='flex flex-col gap-8  items-center mt-22'>
        <h3 className='text-red-600 font-bold text-center text-2xl'>Popular Dishes</h3>
        <div className='flex gap-10 '>
            <img src="\public\assets\Media\Pages\Home/d1.png" alt="" />
            <img src="\public\assets\Media\Pages\Home/d2.png" alt="" />
            <img src="\public\assets\Media\Pages\Home/d3.png" alt="" />
            <img src="\public\assets\Media\Pages\Home/d4.png" alt="" />
            <img src="\public\assets\Media\Pages\Home/d5.png" alt="" />
        </div>
      
    </section>
  )
}
