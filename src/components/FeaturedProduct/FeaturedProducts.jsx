import React from "react";
import Card from "../Card/Card";
import { fakeProducts } from "../../constants";

const FeaturedProducts = () => {
  return (
    <div className="max-w-screen-2xl flex flex-col -mt-52 gap-10 mx-auto py-16 px-6 border-b-[1px] border-gray-300">
      {/* ================== Bottom container start here ================ */}
      <div className="flex flex-col md:flex-row flex-wrap items-center md:items-start justify-center gap-10">
        {fakeProducts.map((item) => (
          <Card item={item} key={item._id} />
        ))}
      </div>
      {/* ================== Bottom container end here ================== */}
    </div>
  );
};

export default FeaturedProducts;
