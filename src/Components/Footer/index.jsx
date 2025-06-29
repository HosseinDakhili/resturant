import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-10">
      <div className="bg-red-600 flex flex-col md:flex-row justify-center gap-10 px-4 py-6">
        <div className="flex flex-col justify-center items-center text-center">
          <h4 className="text-2xl text-white">Robert Food</h4>
          <p className="text-white">1986 Hilltop DriveBorger, TX 79007</p>
          <div className="flex flex-col sm:flex-row gap-3 items-center mt-2">
            <span className="flex items-center gap-1">
              <box-icon color="white" name="stopwatch"></box-icon>
              <p>7.30 AM - 9.30 PM</p>
            </span>
            <span className="flex items-center gap-1">
              <box-icon color="white" type="solid" name="phone"></box-icon>
              <p>+880 1630-225015</p>
            </span>
          </div>
          <Link to="/contact">
            <p className="text-green-600 mt-2">Click to View Google Map</p>
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center text-center">
          <h4 className="text-2xl text-white">Robert Food</h4>
          <p className="text-white">1986 Hilltop DriveBorger, TX 79007</p>
          <div className="flex flex-col sm:flex-row gap-3 items-center mt-2">
            <span className="flex items-center gap-1">
              <box-icon color="white" name="stopwatch"></box-icon>
              <p>7.30 AM - 9.30 PM</p>
            </span>
            <span className="flex items-center gap-1">
              <box-icon color="white" type="solid" name="phone"></box-icon>
              <p>+880 1630-225015</p>
            </span>
          </div>
          <Link to="/contact">
            <p className="text-green-600 mt-2">Click to View Google Map</p>
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center text-center">
          <h4 className="text-2xl text-white">Robert Food</h4>
          <p className="text-white">1986 Hilltop DriveBorger, TX 79007</p>
          <div className="flex flex-col sm:flex-row gap-3 items-center mt-2">
            <span className="flex items-center gap-1">
              <box-icon color="white" name="stopwatch"></box-icon>
              <p>7.30 AM - 9.30 PM</p>
            </span>
            <span className="flex items-center gap-1">
              <box-icon color="white" type="solid" name="phone"></box-icon>
              <p>+880 1630-225015</p>
            </span>
          </div>
          <Link to="/contact">
            <p className="text-green-600 mt-2">Click to View Google Map</p>
          </Link>
        </div>
      </div>
      <div className="w-full bg-blue-950 h-14 flex justify-center items-center">
        <p className="text-white text-center text-sm md:text-base">
          Copyright © 2022 | Shaheen Uddin Ahmad
        </p>
      </div>
    </footer>
  );
}
