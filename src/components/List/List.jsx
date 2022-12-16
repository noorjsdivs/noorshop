import React from "react";
import Card from "../Card/Card";

const List = () => {
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
    <div className="flex gap-4">
      {data?.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
};

export default List;
