import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-10">
      <div className="bg-red-600 flex justify-center gap-10">
        <div className="flex flex-col  justify-center items-center">
          <h4 className="text-2xl text-white">Robert Food</h4>
          <p className="text-white">1986 Hilltop DriveBorger, TX 79007</p>
          <div className="flex gap-3">
            <span className="flex">
              <box-icon color='white' name='stopwatch' ></box-icon>
              <p>7.30 AM - 9.30 PM</p>
            </span>
            <span className="flex">
              <box-icon color='white' type='solid' name='phone'></box-icon>
              <p>+880 1630-225015</p>
            </span>
          </div>
          <Link to='/contact'>
            <p className="text-green-600">Click to View Google Map</p>
          </Link>
        </div>
        <div className="flex flex-col  justify-center items-center">
          <h4 className="text-2xl text-white">Robert Food</h4>
          <p className="text-white">1986 Hilltop DriveBorger, TX 79007</p>
          <div className="flex gap-3">
            <span className="flex">
              <box-icon color='white' name='stopwatch' ></box-icon>
              <p>7.30 AM - 9.30 PM</p>
            </span>
            <span className="flex">
              <box-icon color='white' type='solid' name='phone'></box-icon>
              <p>+880 1630-225015</p>
            </span>
          </div>
          <Link to='/contact'>
            <p className="text-green-600">Click to View Google Map</p>
          </Link>
        </div>
        <div className="flex flex-col  justify-center items-center">
          <h4 className="text-2xl text-white">Robert Food</h4>
          <p className="text-white">1986 Hilltop DriveBorger, TX 79007</p>
          <div className="flex gap-3">
            <span className="flex">
              <box-icon color='white' name='stopwatch' ></box-icon>
              <p>7.30 AM - 9.30 PM</p>
            </span>
            <span className="flex">
              <box-icon color='white' type='solid' name='phone'></box-icon>
              <p>+880 1630-225015</p>
            </span>
          </div>
          <Link to='/contact'>
            <p className="text-green-600">Click to View Google Map</p>
          </Link>
        </div>
        
      </div>
      <div className="w-full bg-blue-950 h-14 flex justify-center items-center ">
        <p className="text-white text-center ">
          Copyright © 2022 | Shaheen Uddin Ahmad
        </p>
      </div>
    </footer>
  );
}
