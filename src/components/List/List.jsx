import React from "react";
import Card from "../Card/Card";
import { TrendingProductsData } from "../../constants";

const List = () => {
  return (
    <div className="flex gap-4">
      {TrendingProductsData?.map((item) => (
        <Card item={item} key={item._id} />
      ))}
    </div>
  );
};

export default List;
