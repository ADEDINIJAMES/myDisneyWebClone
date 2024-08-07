import React from "react";
import disney from "/src/assets/images/disney.png";
import marvel from "/src/assets/images/marvel.png";
import nationalG from "/src/assets/images/nationalG.png";
import pixar from "/src/assets/images/pixar.png";
import disneyV from "/src/assets/videos/disney.mp4";
import marvelV from "/src/assets/videos/marvel.mp4";
import nationalGeographicV from "/src/assets/videos/national-geographic.mp4";
import pixarV from "/src/assets/videos/pixar.mp4";
import starwarV from "/src/assets/videos/star-wars.mp4";
import starwar from "/src/assets/images/starwar.png";
function ProductionHouse() {
  const productionHouseList = [
    {
      id: 1,
      image: disney,
      video: disneyV,
    },
    {
      id: 2,
      image: pixar,
      video: pixarV,
    },
    {
      id: 3,
      image: marvel,
      video: marvelV,
    },
    {
      id: 4,
      image: starwar,
      video: starwarV,
    },
    {
      id: 5,
      image: nationalG,
      video: nationalGeographicV,
    },
  ];

  return (
    <div className="flex gap-5 p-2 px-5 md:px-16">
      {productionHouseList.map((item) => (
        <div
          className="border-[2px] border-gray-600
        rounded-lg hover:scale-110 transition-all duration-300
        ease-in-out cursor-pointer relative shadow-xl shadow-gray-800"
        >
          <img src={item.image} className="w-full z-[1]" />
          <video
            src={item.video}
            autoPlay
            loop
            playsInline
            className="absolute top-0 rounded-md z-0 opacity-0 hover:opacity-50"
          />
        </div>
      ))}
    </div>
  );
}

export default ProductionHouse;
