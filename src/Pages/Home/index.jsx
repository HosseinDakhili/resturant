import React from 'react'
import Banner from './Banner'
import PopularDishes from './PopularDishes'
import Healthy from './Healthy'
import Special from './Special'
import Devilery from './Delivery'

export default function Home() {
  return (
    <body className='bg-[#FFF8EE] '>
      <Banner/>
      <PopularDishes/>
      <Healthy/>
      <Special/>
      <Devilery/>
    </body>
  )
}
