import React from "react";
import { Link } from "react-router-dom";

export default function Healthy() {
  return (
    <section className="mt-20 px-4 md:px-10 lg:px-16 xl:px-20 2xl:px-24">
      <h5 className="text-center text-blue-950 font-bold opacity-90">
        RICH & HEALTHY
      </h5>
      <div className="flex flex-col lg:flex-row gap-10 mt-10 items-center">
        <div className="w-full max-w-[300px]">
          <img src="/assets/Media/Pages/Home/chef.png" alt="Chef" className="w-full h-auto object-contain" />
        </div>
        <div className="flex flex-col gap-5">
          <h4 className="text-center font-bold text-2xl text-orange-700">
            Highest quality artisangrains, proteins & <br /> seasonal ingredients
          </h4>
          <p className="text-justify text-blue-950 opacity-90">
            Righteous indignation and dislike men who are so beguiled and
            demoralized by the charms of pleasure of the moment, so blinded by
            desires, that they cannot foresee.
          </p>
          <span className="flex items-center gap-2">
            <img
              className="w-[20px] h-[20px]"
              src="/assets/Media/Pages/Home/star.png"
              alt="Star"
            />
            <p className="text-blue-950 opacity-90">Simple and easy to distinguish</p>
          </span>
          <span className="flex items-center gap-2">
            <img
              className="w-[20px] h-[20px]"
              src="/assets/Media/Pages/Home/star.png"
              alt="Star"
            />
            <p className="text-blue-950 opacity-90">Pleasure of the momentblinded desire</p>
          </span>
          <span className="flex items-center gap-2">
            <img
              className="w-[20px] h-[20px]"
              src="/assets/Media/Pages/Home/star.png"
              alt="Star"
            />
            <p className="text-blue-950 opacity-90">Able to do what we like best</p>
          </span>
          <Link to="/about">
            <button className="bg-orange-600 text-white px-6 py-2 text-lg rounded-xl w-max">
              Read More
            </button>
          </Link>
        </div>
        <div className="w-full max-w-[300px]">
          <img src="/assets/Media/Pages/Home/pasta.png" alt="Pasta" className="w-full h-auto object-contain" />
        </div>
      </div>
    </section>
  );
}
