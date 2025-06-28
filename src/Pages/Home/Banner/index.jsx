import React from "react";

export default function Banner() {
  return (
    <section className="px-22 mt-7 ">
      <div className="flex justify-center items-center">
        <div>
          <p className="text-4xl text-blue-950">
            ENJOY OUR CHICKEN <br />{" "}
            <span className="text-red-600 font-bold">BURGER</span> FAST FOOD
          </p>
        </div>
        <div>
          <img
            className="w-[438px] h-[232px]"
            src="\public\assets\Media\Pages\Home/chicken.png"
            alt=""
          />
        </div>
      </div>
      <div className="flex justify-center items-center gap-7">
        <button className="bg-red-700 text-white px-6 py-2 text-lg rounded-xl">Order Now</button>
        <span className="text-blue-950 font-medium opacity-75">Price : $10.50</span>
      </div>
      <div className="flex gap-3">
        <img src="\public\assets\Media\Pages\Home/twitter.png" alt="" />
        <img src="\public\assets\Media\Pages\Home/instagram.png" alt="" />
        <img src="\public\assets\Media\Pages\Home/linkedin.png" alt="" />
        <img src="\public\assets\Media\Pages\Home/facebook.png" alt="" />
      </div>
    </section>
  );    
}
