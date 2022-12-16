import React from "react";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  return (
    <Link to={`/product/${item.id}`}>
      <div className="w-[300px] flex flex-col gap-2">
        <div className="w-full h-[400px] relative overflow-hidden group">
          {item.isNew && (
            <p className="absolute top-2 left-2 bg-white text-green-600 group-hover:bg-gray-900 group-hover:text-white py-2 px-4 text-base font-semibold z-30">
              New Season
            </p>
          )}
          <img
            className="w-full h-full object-cover absolute z-10 group-hover:scale-110 duration-300"
            src={item.img}
            alt="mainImage"
          />
          <img
            className="w-full h-full object-cover absolute group-hover:z-20"
            src={item.img2}
            alt=""
          />
        </div>
        <h2 className="text-lg font-normal tracking-wide font-titleFont">
          {item.title}
        </h2>
        <div className="flex items-center gap-3 text-base font-semibold text-gray-900">
          <h3 className="line-through text-gray-500">${item.oldPrice}</h3>
          <h3>${item.price}</h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;