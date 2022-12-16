import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";

const Navbar = () => {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <div className="w-full bg-white sticky h-20 top-0 z-50 border-b-[1px] border-b-gray-300">
      <nav className="max-w-screen-2xl mx-auto  ">
        <div className="px-4 py-6 items-center flex justify-center md:justify-between text-gray-900">
          {/* =================== Left side start here ================= */}
          <div className="hidden xl:flex gap-6 text-base font-semibold">
            <div className="flex">
              <div>
                <img className="w-8 mt-1" src="/images/flag.webp" alt="" />
              </div>
              <div>
                <KeyboardArrowDownIcon />
              </div>
            </div>
            <div>
              <span>BDT</span>
              <KeyboardArrowDownIcon />
            </div>
            <div>
              <Link to="/products/1">Women</Link>
            </div>
            <div>
              <Link to="/products/2">Men</Link>
            </div>
            <div>
              <Link to="/products/3">Children</Link>
            </div>
          </div>
          {/* =================== Center side start end ================== */}

          <div className="font-titleFont uppercase tracking-wider font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-orange-900">
            <Link to="/">NoorShop</Link>
          </div>
          {/* =================== Right side start end ================== */}
          <div className="hidden md:flex items-center gap-6 font-semibold text-base">
            <div>
              <Link to="/">Homepage</Link>
            </div>
            <div>
              <Link to="/">About</Link>
            </div>
            <div>
              <Link to="/">Contact</Link>
            </div>
            <div>
              <Link to="/">Stores</Link>
            </div>
            <div className="flex gap-4">
              <SearchOutlinedIcon />
              <PersonOutlineIcon />
              <FavoriteBorderIcon />
              <div
                onClick={() => setCartOpen(!cartOpen)}
                className="relative cursor-pointer"
              >
                <ShoppingCartOutlinedIcon />
                <span className="absolute -top-2 -right-1 flex items-center justify-center text-[10px] w-4 h-4 rounded-full bg-blue-800 font-normal text-white">
                  0
                </span>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {cartOpen && (
        <>
          <Cart />
        </>
      )}
    </div>
  );
};

export default Navbar;
