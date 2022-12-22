import React from "react";
import Card from "../Card/Card";
import { TrendingProductsData } from "../../constants";

const TrendingProducts = () => {
  return (
    <div className="max-w-screen-2xl flex flex-col gap-10 mx-auto py-16 px-6 border-b-[1px] border-gray-300">
      {/* ================== Top container start here =================== */}
      <div className="flex flex-col xl:flex-row items-center justify-between">
        <h3 className="w-full xl:w-2/5 text-2xl font-bold uppercase text-center xl:text-left">
          Trending products
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
        {TrendingProductsData.map((item) => (
          <Card item={item} key={item._id} />
        ))}
      </div>
      {/* ================== Bottom container end here ================== */}
    </div>
  );
};

export default TrendingProducts;
