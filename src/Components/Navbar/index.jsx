import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="bg-[#FFF8EE] px-4 py-3 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center flex-wrap">
        <div className="flex items-center gap-2">
          <img
            className="w-[90px] h-[60px] object-contain"
            src="\public\assets\Media\Pages\Home/logo.png"
            alt="Logo"
          />
        </div>


        <ul className="hidden md:flex items-center gap-6 text-blue-950 text-base lg:text-xl font-medium">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/items">Items</Link></li>
        </ul>

        
        <div className="hidden md:flex items-center gap-4">
          <img
            className="w-[40px] h-[40px]"
            src="\public\assets\Media\Pages\Home/cart.png"
            alt="Cart"
          />
          <span className="text-sm">
            <h3 className="font-bold">Delivery Order</h3>
            <p className="text-gray-700 text-xs">+880 1630 225 015</p>
          </span>
          <img
            className="w-[30px] h-[30px]"
            src="\public\assets\Media\Pages\Home/bike.png"
            alt="Bike"
          />
        </div>


        <div className="hidden md:block">
          <Link to="/login">
            <button className="bg-red-500 hover:bg-red-700 text-white rounded-xl px-4 py-2 text-sm lg:text-base">
              LOGIN
            </button>
          </Link>
        </div>

       
        <div className="md:hidden mt-4 w-full">
          <ul className="flex flex-col gap-3 text-blue-950 text-base font-medium text-center">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/items">Items</Link></li>
            <li>
              <Link to="/login">
                <button className="bg-red-500 hover:bg-red-700 text-white rounded-xl px-4 py-2 mt-2 w-full">
                  LOGIN
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
