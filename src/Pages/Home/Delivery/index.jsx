import React from "react";

export default function Devilery() {
  return (
    <section className="mt-22 px-22">
      <h3 className="text-orange-600 text-xl text-center">DELIVERY</h3>
      <div className="flex mt-10 justify-between">
        <div className="flex flex-col gap-4">
          <h5 className="text-blue-950 text-3xl">
            A Moments Of <br />
            <span className="text-orange-600 "> Delivered On Right Time & Place</span>
          </h5>
          <p className="text-blue-950 opacity-90 text-justify">
            Food Khan is a restaurant, bar and coffee roastery located on a <br /> busy
            corner site in Farringdon's Exmouth Market. <br /> With glazed frontage on
            two sides of the building, overlooking the market and a bustling
            London inteon.
          </p>
          <div className="flex gap-x-40">
            <div className="flex gap-6">
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
            <button className="bg-orange-700 text-white px-6 py-2 text-lg rounded-xl">Order Now</button>
          </div>
        </div>
        <div className="w-[447px] h-[313px]">
            <img className="w-full" src="\public\assets\Media\Pages\Home/delivery-man.png" alt="" />
        </div>
      </div>
    </section>
  );
}
