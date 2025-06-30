import React, { useEffect, useState } from "react";
import { data, useParams } from "react-router-dom";

export default function ItemDetails() {
  const { id } = useParams();
  const [food, setFood] = useState();
  useEffect(()=>{
     (async () => {
        try {
          const res = await fetch(
            `https://burgers-hub.p.rapidapi.com/burgers/${id}`,
            {
              method: "GET",
              headers: {
               	'x-rapidapi-key': '99057f12f3msh55c7f21e8307654p18213bjsn21c7af15dafc',
		'x-rapidapi-host': 'burgers-hub.p.rapidapi.com'
              },
            }
          );
          const data = await res.json();
          console.log('detail',data)
          setFood(data);
        } catch (error) {
          console.log(error);
        }
      })();
  },[id])
  return (
    <section className="w-full px-4 py-10 flex justify-center items-center">
      <div className="max-w-4xl w-full flex flex-col lg:flex-row items-center gap-8">
        <div className="w-full lg:w-1/2 rounded-xl overflow-hidden shadow-lg">
          <img src={food?.images[0]?.sm} alt={1} className="w-full h-72 sm:h-96 object-cover" />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col gap-6 text-center lg:text-left">
          <h2 className="text-3xl font-bold text-blue-900">{food?.name}</h2>
          <p className="text-gray-700 text-base leading-relaxed">{food?.desc}</p>
          <button className="bg-orange-500 text-white px-6 py-3 rounded-xl text-lg hover:bg-orange-600 transition">
            Order Now
          </button>
        </div>
      </div>
    </section>
  );
}
