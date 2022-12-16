import React from "react";
import Card from "../Card/Card";

const FeaturedProducts = ({ type }) => {
  const data = [
    {
      id: 1001,
      img: "https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Long Sleeve Graphic T-shirt",
      isNew: true,
      oldPrice: 20,
      price: 15,
    },
    {
      id: 1002,
      img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "T-shirt",
      isNew: true,
      oldPrice: 30,
      price: 25,
    },
    {
      id: 1003,
      img: "https://images.pexels.com/photos/1375849/pexels-photo-1375849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Shorts",
      isNew: false,
      oldPrice: 80,
      price: 70,
    },
    {
      id: 1004,
      img: "https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Coat",
      isNew: false,
      oldPrice: 60,
      price: 40,
    },
  ];
  return (
    <div className="max-w-screen-2xl flex flex-col gap-10 mx-auto py-16 px-6 border-b-[1px] border-gray-300">
      {/* ================== Top container start here =================== */}
      <div className="flex flex-col xl:flex-row items-center justify-between">
        <h3 className="w-full xl:w-2/5 text-2xl font-bold uppercase text-center xl:text-left">
          {type} products
        </h3>
        <p className="w-full xl:w-3/5 text-gray-500 leading-relaxed text-center xl:text-left">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non
          magni facilis blanditiis molestias soluta eveniet illum accusantium
          eius mollitia eligendi, ex iste doloribus magnam. Lorem ipsum dolor
          sit amet consectetur, adipisicing elit. Inventore vitae rem eius sunt
          corrupti eligendi nesciunt reprehenderit blanditiis reiciendis est!
        </p>
      </div>
      {/* ================== Top container end here ===================== */}
      {/* ================== Bottom container start here ================ */}
      <div className="flex flex-col md:flex-row flex-wrap items-center md:items-start justify-center gap-10">
        {data.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
      {/* ================== Bottom container end here ================== */}
    </div>
  );
};

export default FeaturedProducts;
