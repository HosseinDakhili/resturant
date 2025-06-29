import React from "react";
import { Link } from "react-router-dom";

export default function Healthy() {
  return (
    <section className="mt-22 px-22">
      <h5 className="text-center text-blue-950 font-bold opacity-90">
        RICH & HEALTHY
      </h5>
      <div className="flex gap-16 mt-10">
        <div>
          <img src="\public\assets\Media\Pages\Home/chef.png" alt="" />
        </div>
        <div className="flex flex-col gap-5 justify- items-">
          <h4 className="text-center font-bold text-2xl text-orange-700">
            Highest quality artisangrains, proteins & <br /> seasonal
            ingredients
          </h4>
          <p className="text-justify text-blue-950 opacity-90">
            Righteous indignation and dislike men who are so beguiled and
            demoralized by the charms of pleasure of the moment, so blinded by
            desires, that they cannot foresee.
          </p>
          <span className=" flex text-justify">
            <img
              className="w-[20px] h-[20px]"
              src="\public\assets\Media\Pages\Home/star.png"
              alt=""
            />
            <p className="text-blue-950 opacity-90">
              Simple and easy to distinguish
            </p>
          </span>
          <span className=" flex text-justify">
            <img
              className="w-[20px] h-[20px]"
              src="\public\assets\Media\Pages\Home/star.png"
              alt=""
            />
            <p className="text-blue-950 opacity-90">
              Pleasure of the momentblinded desire
            </p>
          </span>
          <span className=" flex text-justify">
            <img
              className="w-[20px] h-[20px]"
              src="\public\assets\Media\Pages\Home/star.png"
              alt=""
            />
            <p className="text-blue-950 opacity-90">
              Able to do what we like best
            </p>
          </span>
          <Link to='/about'>
            <button className="bg-orange-600  text-white px-6 py-2 text-lg rounded-xl mx-20 cursor-pointer">
              Read More
            </button>
          </Link>
        </div>
        <div>
          <img src="\public\assets\Media\Pages\Home/pasta.png" alt="" />
        </div>
      </div>
    </section>
  );
}
