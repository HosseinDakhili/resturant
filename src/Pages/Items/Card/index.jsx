import React from "react";
import { Link } from "react-router-dom";

export default function Card({ id, name, caption, img, price }) {
  return (
    <div className="w-full max-w-xl rounded-xl border-2 px-3 py-5">
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <div className="flex-1 flex flex-col gap-3 text-center sm:text-left">
          <h5 className="text-blue-950 font-medium text-lg">{name}</h5>
          <p className="text-blue-950 opacity-90 text-sm">{caption}</p>
          <Link to={`/item-details/${id}/${name.replaceAll(" ", "-")}`}>
            <span className="text-blue-950 font-bold text-base">
              From {(price * 10)}$
            </span>
          </Link>
        </div>
        <div className="w-full sm:w-[198px] h-[160px] rounded-xl overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={img}
            alt={name}
          />
        </div>
      </div>
    </div>
  );
}
