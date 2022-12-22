import React, { useState } from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../../redux/cartReducer";
import { resetCart } from "../../redux/cartReducer";
import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.products);
  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => (total += item.quantity * item.price));
    return total.toFixed(2);
  };
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="w-[500px] px-4 bg-gray-100 rounded-md fixed overflow-y-scroll top-20 right-4">
      <h2 className="text-3xl font-semibold mb-6 mt-4">
        Products on your Cart
      </h2>
      <div className="h-auto py-2 max-h-[350px] border-b-[1px] border-b-gray-300 overflow-y-scroll scrollbarHide">
        {products?.map((item) => (
          <div
            key={item._id}
            className="flex items-center justfy-between gap-4 mb-6 border-b-[1px] border-b-red-700 py-2"
          >
            <div className="w-1/5">
              <img className="w-full h-36 object-cover" src={item.img} alt="" />
            </div>
            <div className="w-3/5 flex flex-col gap-2">
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="text-[14px] text-gray-800">
                {item.desc?.substring(0, 100)}
              </p>
              <div className="flex justify-between items-center">
                <div className="flex">
                  <button
                    className="text-xl border border-gray-300 text-black px-2 hover:bg-gray-300 duration-300"
                    onClick={() =>
                      setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                    }
                  >
                    -
                  </button>
                  <span className="font-semibold text-xl w-10 text-center">
                    {quantity}
                  </span>
                  <button
                    className="text-xl border border-gray-300 text-black px-2 hover:bg-gray-300 duration-300"
                    onClick={() => setQuantity((prev) => prev + 1)}
                  >
                    +
                  </button>
                </div>
                <div>
                  <p className="text-sm font-normal justify-between flex items-center gap-1">
                    Unit Price:
                    <span className="text-base font-semibold text-blue-900 flex items-center gap-2">
                      ${item.price}
                    </span>
                  </p>
                  <p className="text-sm font-normal flex justify-between items-center gap-1">
                    Quantity:
                    <span className="text-base font-semibold text-blue-900 flex items-center gap-2">
                      {item.quantity}
                    </span>
                  </p>

                  <p className="text-base font-semibold text-blue-900 flex justify-between items-center gap-2">
                    <span className="text-sm font-normal text-gray-900">
                      Sub Total:
                    </span>
                    ${item.price * item.quantity}
                  </p>
                </div>
              </div>
            </div>
            <div
              onClick={() => dispatch(removeItem(item._id))}
              className="ml-4 text-red-600 cursor-pointer"
            >
              <DeleteOutlineIcon />
            </div>
          </div>
        ))}
      </div>
      <div className="flex gap-4 items-center py-4 text-lg uppercase font-bold">
        Total : <p>${totalPrice()}</p>
      </div>
      <div>
        <button className="flex items-center justify-center gap-4 text-base font-semibold bg-blue-600 text-white w-60 uppercase h-10 mb-4 hover:bg-blue-900 duration-300">
          Procceed to Checkout
        </button>
      </div>
      <Link to="/cart">
        <div className="text-gray-600 text-base font-semibold mb-4 flex gap-2 hover:text-blue-600 duration-300 group">
          <button className=" hover:underline underline-offset-4 duration-300 ">
            Go to Cart Page
          </button>
        </div>
      </Link>
      <div>
        <button
          onClick={() => dispatch(resetCart())}
          className="text-red-600 text-base font-semibold mb-4 hover:underline underline-offset-2 duration-300"
        >
          Reset Cart
        </button>
      </div>
    </div>
  );
};

export default Cart;
