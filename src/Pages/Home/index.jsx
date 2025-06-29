import React from 'react'
import Banner from './Banner'
import PopularDishes from './PopularDishes'
import Healthy from './Healthy'
import Special from './Special'
import Devilery from './Delivery'

export default function Home() {
  return (
    <body className='bg-[#FFF8EE] w-full overflow-x-hidden max-w-screen '>
      <Banner/>
      <PopularDishes/>
      <Healthy/>
      <Special/>
      <Devilery/>
    </body>
  )
}
