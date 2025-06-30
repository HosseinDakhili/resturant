import React, { useEffect, useState } from "react";
import Card from "./Card";
import Loading from "../../Components/Loading";
import { data } from "react-router-dom";

export default function Items() {
  const [foods, setFoods] = useState();
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("https://burgers-hub.p.rapidapi.com/burgers", {
          method: "GET",
          headers: {
           		'x-rapidapi-key': '99057f12f3msh55c7f21e8307654p18213bjsn21c7af15dafc',
		'x-rapidapi-host': 'burgers-hub.p.rapidapi.com'
          },
        });
        const data = await res.json();
        console.log("h1", data);
        setFoods(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const items = foods?.map((e) => {
    return (
      <Card
        key={e?.id}
        id={e?.id}
        name={e?.name}
        caption={e?.desc.split(" ").slice(0, 10).join(" ")}
        img={e?.images[0]?.sm}
        price={e?.price}
      />
    );
  });

  if (!foods) return <Loading />;

  return (
    <section className="flex flex-col justify-center items-center">
      <div className="w-full relative">
        <img
          className="w-full h-64 sm:h-96 object-cover"
          src="/assets/Media/Pages/items/items.png"
          alt=""
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center px-4 max-w-xs sm:max-w-md">
          <h5 className="text-xl sm:text-2xl font-semibold mb-2">Items</h5>
          <p className="text-sm sm:text-base leading-snug">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna.
          </p>
        </div>
      </div>

      <h3 className="text-orange-600 font-bold text-center text-xl sm:text-2xl mt-6 mb-6 sm:mt-8 sm:mb-8">
        Menu
      </h3>
      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-10 mb-10">
        {items}
      </div>
    </section>
  );
}
