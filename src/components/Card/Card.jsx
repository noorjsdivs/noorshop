import React from "react";
import { useNavigate } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";

const Card = ({ item }) => {
  const navigate = useNavigate();
  const handleProduct = () => {
    navigate(`/product/${item._id}`, {
      state: {
        item: item,
      },
    });
  };
  return (
    <div
      onClick={handleProduct}
      className="w-[300px] flex flex-col cursor-pointer group"
    >
      <div className="w-full h-[400px] relative overflow-hidden group">
        {item.isNew && (
          <p className="absolute top-2 left-2 bg-white text-green-600 group-hover:bg-gray-900 group-hover:text-white py-2 px-4 text-base font-semibold z-30">
            New Season
          </p>
        )}
        <img
          className="w-full h-full object-cover absolute z-10 group-hover:scale-110 duration-300"
          src={item.image}
          alt="mainImage"
        />
      </div>
      <div className="border-[1px] border-t-0 border-gray-300 px-2 py-3 shadow-lg group-hover:shadow-none duration-300 flex flex-col gap-1">
        <div className="flex justify-between items-center">
          <h2 className="text-base font-semibold tracking-wide font-titleFont">
            {item.title}
          </h2>
          <p className="text-sm text-gray-500 hover:text-gray-900 underline underline-offset-2 italic decoration-gray-300 hover:decoration-slate-900 duration-300">
            {item.category}
          </p>
        </div>
        <div className="flex items-center justify-between text-base font-semibold text-gray-900">
          <div className="flex items-center gap-3">
            <h3 className="line-through text-gray-500">${item.oldPrice}</h3>
            <h3>${item.price}</h3>
          </div>
          <div>
            <StarIcon className="text-yellow-500" />
            <StarIcon className="text-yellow-500" />
            <StarIcon className="text-yellow-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
