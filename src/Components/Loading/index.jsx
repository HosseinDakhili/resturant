import React from 'react'
import { PacmanLoader } from 'react-spinners'

export default function Loading() {
  return (
    <section className='flex justify-center items-center h-screen bg-[#FFF8EE]'>
    <PacmanLoader color='red' size={40}/>
    </section>
  )
}
