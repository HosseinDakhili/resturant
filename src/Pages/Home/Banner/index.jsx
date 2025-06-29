import React from "react";

export default function Banner() {
  return (
    <section className="px-4 sm:px-6 lg:px-22 mt-7 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12">
        <div className="text-center md:text-left order-2 md:order-1">
          <p className="text-2xl sm:text-3xl md:text-4xl text-blue-950">
            ENJOY OUR CHICKEN <br />{" "}
            <span className="text-red-600 font-bold">BURGER</span> FAST FOOD
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6 md:mt-8">
            <button className="bg-red-700 text-white px-4 py-2 sm:px-6 sm:py-2 text-base sm:text-lg rounded-xl whitespace-nowrap">
              Order Now
            </button>
            <span className="text-blue-950 font-medium opacity-75">
              Price : $10.50
            </span>
          </div>
          
          <div className="flex justify-center md:justify-start gap-3 mt-6">
            <img 
              src="/public/assets/Media/Pages/Home/twitter.png" 
              alt="Twitter" 
              className="w-8 h-8"
            />
            <img 
              src="/public/assets/Media/Pages/Home/instagram.png" 
              alt="Instagram" 
              className="w-8 h-8"
            />
            <img 
              src="/public/assets/Media/Pages/Home/linkedin.png" 
              alt="LinkedIn" 
              className="w-8 h-8"
            />
            <img 
              src="/public/assets/Media/Pages/Home/facebook.png" 
              alt="Facebook" 
              className="w-8 h-8"
            />
          </div>
        </div>
        
        <div className="order-1 md:order-2">
          <img
            className="w-64 h-auto sm:w-80 md:w-[438px] md:h-[232px] object-contain"
            src="/public/assets/Media/Pages/Home/chicken.png"
            alt="Chicken Burger"
          />
        </div>
      </div>
    </section>
  );    
}