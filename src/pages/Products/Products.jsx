import React, { useState } from "react";
import { useParams } from "react-router-dom";
import List from "../../components/List/List";

const Products = () => {
  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null);

  return (
    <div className="flex py-10 px-6 h-screen overflow-y-scroll">
      {/* ============= Left part =========== */}

      <div className="w-1/4 h-[100%] sticky top-0 left-0 ">
        <div>
          <h2 className="text-xl font-semibold mb-5">Product Categories</h2>
          <div className="flex flex-col gap-1 mb-6">
            <div className="flex gap-2">
              <input type="checkbox" id="1" value={1} />
              <label htmlFor="1">Shoes</label>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" id="2" value={2} />
              <label htmlFor="1">Skirts</label>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" id="3" value={3} />
              <label htmlFor="1">Coats</label>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-5">Filter by Price</h2>
          <div className="mb-6">
            <span>0</span>
            <input
              type="range"
              min={0}
              max={1000}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span>{maxPrice}</span>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Sort by</h2>
          <div className="flex flex-col gap-1">
            <div className="flex gap-2">
              <input
                type="radio"
                id="abc"
                value="abc"
                name="price"
                onChange={() => setSort("abc")}
              />
              <label htmlFor="abc">Price (Lowest first)</label>
            </div>
            <div className="flex gap-2">
              <input
                type="radio"
                id="desc"
                value="desc"
                name="price"
                onChange={() => setSort("desc")}
              />
              <label htmlFor="desc">Price (Higest first)</label>
            </div>
          </div>
        </div>
      </div>
      {/* ============= Right part ========== */}
      <div className="w-full flex flex-col gap-4">
        <div>
          <img
            className="w-full h-[250px] object-cover"
            src="https://amazonproone.vercel.app/static/media/img2.bc1bdb910ead16c65197.jpg"
            alt="CatImg"
          />
        </div>
        <div className="w-full">
          <List catId={catId} maxPrice={maxPrice} sort={sort} />
        </div>
      </div>
    </div>
  );
};

export default Products;
