import React from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const Cart = () => {
  const data = [
    {
      id: 1001,
      img: "https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, consequuntur sint? Blanditiis magnam nam, nihil a culpa quia eius ducimus?",
      title: "Long Sleeve Graphic T-shirt",
      isNew: true,
      oldPrice: 20,
      price: 15,
    },
    {
      id: 1002,
      img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=600",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, consequuntur sint? Blanditiis magnam nam, nihil a culpa quia eius ducimus?",
      title: "T-shirt",
      isNew: true,
      oldPrice: 30,
      price: 25,
    },
    {
      id: 1003,
      img: "https://images.pexels.com/photos/1375849/pexels-photo-1375849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Shorts",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, consequuntur sint? Blanditiis magnam nam, nihil a culpa quia eius ducimus?",
      isNew: false,
      oldPrice: 80,
      price: 70.85,
    },
  ];
  return (
    <div className="w-[500px] px-4 bg-gray-100 rounded-md fixed top-20 right-4">
      <h2 className="text-3xl font-semibold mb-6 mt-4">
        Products on your Cart
      </h2>
      <div className="h-[55vh] overflow-y-scroll">
        {data?.map((item) => (
          <div
            key={item.id}
            className="flex items-center justfy-between gap-4 mb-6"
          >
            <div className="w-1/5">
              <img className="w-full h-36 object-cover" src={item.img} alt="" />
            </div>
            <div className="w-3/5 flex flex-col gap-4">
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="text-[14px] text-gray-800">
                {item.des?.substring(0, 100)}
              </p>
              <p className="text-base text-blue-700">1 X ${item.price}</p>
            </div>
            <div className="ml-4 text-red-600 cursor-pointer">
              <DeleteOutlineIcon />
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center py-4 text-lg uppercase font-bold">
        <h2>Subtotal</h2>
        <p>$125.00</p>
      </div>
      <div>
        <button className="flex items-center justify-center gap-4 text-base font-semibold bg-blue-600 text-white w-60 uppercase h-10 mb-4 hover:bg-blue-900 duration-300">
          Procceed to Checkout
        </button>
      </div>
      <div>
        <button className="text-red-600 text-base font-semibold mb-4 hover:underline underline-offset-2 duration-300">
          Reset Cart
        </button>
      </div>
    </div>
  );
};

export default Cart;
