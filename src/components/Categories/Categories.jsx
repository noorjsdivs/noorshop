import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="w-full h-full xl:h-[700px] mx-auto px-2 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2 place-content-center mt-10">
      <div className="w-full h-[600px] flex flex-col gap-2">
        <div className="w-full h-1/2 relative group">
          <img
            className="w-full h-full object-cover"
            src="https://images.pexels.com/photos/833052/pexels-photo-833052.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="imgOne"
          />
          <Link to="/products/1">
            <button className="absolute uppercase top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-green-600 group-hover:bg-gray-900 group-hover:text-white px-8 py-2 text-base tracking-wide font-semibold border-[3px] border-transparent group-hover:border-green-600 duration-300">
              Sale
            </button>
          </Link>
        </div>
        <div className="w-full h-1/2 relative group">
          <img
            className="w-full h-full object-cover"
            src="https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="imgOne"
          />
          <Link to="/products/1">
            <button className="absolute uppercase top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-green-600 group-hover:bg-gray-900 group-hover:text-white px-8 py-2 text-base tracking-wide font-semibold border-[3px] border-transparent group-hover:border-green-600 duration-300">
              Women
            </button>
          </Link>
        </div>
      </div>
      <div className="w-full h-[600px] relative group">
        <img
          className="w-full h-full object-cover"
          src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="imgThree"
        />
        <Link to="/products/1">
          <button className="absolute uppercase top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-green-600 group-hover:bg-gray-900 group-hover:text-white px-8 py-2 text-base tracking-wide font-semibold border-[3px] border-transparent group-hover:border-green-600 duration-300">
            New Season
          </button>
        </Link>
      </div>
      <div className="w-full h-auto md:h-[600px] md:col-span-2 flex flex-col gap-2">
        <div className=" w-full h-2/3 md:h-1/2 flex flex-col md:flex-row gap-2">
          <div className="relative group">
            <img
              className="w-full h-full object-cover"
              src="https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="imgFour"
            />
            <Link to="/products/1">
              <button className="absolute uppercase top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-green-600 group-hover:bg-gray-900 group-hover:text-white px-8 py-2 text-base tracking-wide font-semibold border-[3px] border-transparent group-hover:border-green-600 duration-300">
                Men
              </button>
            </Link>
          </div>
          <div className="relative group">
            <img
              className="w-full h-full object-cover"
              src="https://images.pexels.com/photos/458766/pexels-photo-458766.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="imgFive"
            />
            <Link to="/products/1">
              <button className="absolute uppercase top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-green-600 group-hover:bg-gray-900 group-hover:text-white px-8 py-2 text-base tracking-wide font-semibold border-[3px] border-transparent group-hover:border-green-600 duration-300">
                Asscessories
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full h-1/3 md:h-1/2 relative group">
          <img
            className="w-full h-full object-cover"
            src="https://images.pexels.com/photos/265705/pexels-photo-265705.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="imgSix"
          />
          <Link to="/products/1">
            <button className="absolute uppercase top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-green-600 group-hover:bg-gray-900 group-hover:text-white px-8 py-2 text-base tracking-wide font-semibold border-[3px] border-transparent group-hover:border-green-600 duration-300">
              Exceptional
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Categories;
