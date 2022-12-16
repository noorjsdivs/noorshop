import React, { useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";

const Product = () => {
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const images = [
    "https://images.pexels.com/photos/789305/pexels-photo-789305.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/2229490/pexels-photo-2229490.jpeg?auto=compress&cs=tinysrgb&w=600",
  ];
  return (
    <div className="max-w-screen-2xl flex gap-10 mx-auto py-4 px-4">
      {/* ========== left start ============== */}
      <div className="w-1/2 flex gap-4">
        <div className="flex flex-col gap-3">
          <img
            className="w-28 h-28 object-cover cursor-pointer"
            src={images[0]}
            alt="imgOne"
            onClick={(e) => setSelectedImg(0)}
          />
          <img
            className="w-28 h-28  object-cover cursor-pointer"
            src={images[1]}
            alt="imgTwo"
            onClick={(e) => setSelectedImg(1)}
          />
        </div>
        <div className="w-full">
          <img
            className="w-full h-[80vh] object-cover"
            src={images[selectedImg]}
            alt="MainImage"
          />
        </div>
      </div>
      {/* ========== right start ============== */}

      <div className="w-1/2 flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-bold">Lorem ipsum dolor sit amet.</h1>
          <span className="text-3xl font-semibold text-blue-600">$19.90</span>
          <p className="text-base text-gray-500">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum cum
            ratione nihil vitae ex unde, perferendis fuga delectus quia saepe
            doloribus, pariatur vero nostrum ullam consequuntur facere quaerat.
            Reiciendis, aut.
          </p>
        </div>
        <div className="flex items-center gap-1 w-96">
          <button
            className="text-xl bg-gray-900 text-white py-1 px-4 hover:bg-blue-900 duration-300"
            onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            -
          </button>
          <span className="font-semibold text-xl w-10 text-center">
            {quantity}
          </span>
          <button
            className="text-xl bg-gray-900 text-white py-1 px-4 hover:bg-blue-900 duration-300"
            onClick={() => setQuantity((prev) => prev + 1)}
          >
            +
          </button>
        </div>
        <div>
          <button className="flex items-center justify-center gap-4 text-lg font-semibold bg-blue-600 text-white w-60 uppercase h-12 hover:bg-blue-900 duration-300">
            <span>
              <AddShoppingCartIcon />
            </span>
            Add to Card
          </button>
        </div>
        <div className="flex gap-10">
          <button className="text-base uppercase text-blue-600 flex items-center gap-2 hover:text-blue-900 duration-300">
            <span>
              <FavoriteBorderIcon />
            </span>
            Add to wishlist
          </button>
          <button className="text-base uppercase text-blue-600 flex items-center gap-2 hover:text-blue-900 duration-300">
            <span>
              <BalanceIcon />
            </span>
            Add to compare
          </button>
        </div>

        <div className="text-base text-gray-500">
          <p>
            <span>Vendor: </span>Polo
          </p>
          <p>
            <span>Product Type: </span>T-Shirt
          </p>
          <p>
            <span>Tat: </span>T-Shirt, Women, Top
          </p>
        </div>
        <hr className="-mt-4 -mb-4" />
        <div className="text-base uppercase text-gray-500">
          <p className="underline underline-offset-4 decoration-[1px]">
            Description
          </p>
          <p className="underline underline-offset-4 decoration-[1px]">
            Additional Information
          </p>
          <p className="underline underline-offset-4 decoration-[1px]">FAQ</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
