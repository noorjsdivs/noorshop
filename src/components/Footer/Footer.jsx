import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="max-w-screen-2xl pt-16 px-4 mx-auto">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10">
        <div className="w-full">
          <h3 className="font-titleFont font-semibold text-xl mb-2">
            Categories
          </h3>
          <ul className="flex flex-col gap-1 text-gray-500 text-base">
            <li className="hover:text-gray-900 duration-300 hover:cursor-pointer hover:underline underline-offset-2 decoration-[1px]">
              Women
            </li>
            <li className="hover:text-gray-900 duration-300 hover:cursor-pointer hover:underline underline-offset-2 decoration-[1px]">
              Men
            </li>
            <li className="hover:text-gray-900 duration-300 hover:cursor-pointer hover:underline underline-offset-2 decoration-[1px]">
              Shoes
            </li>
            <li className="hover:text-gray-900 duration-300 hover:cursor-pointer hover:underline underline-offset-2 decoration-[1px]">
              Accessories
            </li>
            <li className="hover:text-gray-900 duration-300 hover:cursor-pointer hover:underline underline-offset-2 decoration-[1px]">
              New Arrivals
            </li>
          </ul>
        </div>
        <div className="w-full">
          <h3 className="font-titleFont font-semibold text-xl mb-2">Links</h3>
          <ul className="flex flex-col gap-1 text-gray-500 text-base">
            <li className="hover:text-gray-900 duration-300 hover:cursor-pointer hover:underline underline-offset-2 decoration-[1px]">
              FAQ
            </li>
            <li className="hover:text-gray-900 duration-300 hover:cursor-pointer hover:underline underline-offset-2 decoration-[1px]">
              Pages
            </li>
            <li className="hover:text-gray-900 duration-300 hover:cursor-pointer hover:underline underline-offset-2 decoration-[1px]">
              Stores
            </li>
            <li className="hover:text-gray-900 duration-300 hover:cursor-pointer hover:underline underline-offset-2 decoration-[1px]">
              Compare
            </li>
            <li className="hover:text-gray-900 duration-300 hover:cursor-pointer hover:underline underline-offset-2 decoration-[1px]">
              Cookies
            </li>
          </ul>
        </div>
        <div className="w-full">
          <h3 className="font-titleFont font-semibold text-xl mb-2">About</h3>
          <p className="text-gray-500 text-base text-justify tracking-tight">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            expedita numquam sint dolor quibusdam explicabo laborum porro.
            Cupiditate tenetur sint, eaque est qui quam ut magni non eius autem.
            Dolores.
          </p>
        </div>
        <div className="w-full">
          <h3 className="font-titleFont font-semibold text-xl mb-2">Contact</h3>
          <p className="text-gray-500 text-base text-justify tracking-tight">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            expedita numquam sint dolor quibusdam explicabo laborum porro.
            Cupiditate tenetur sint, eaque est qui quam ut magni non eius autem.
            Dolores.
          </p>
        </div>
      </div>
      <div className="pt-10 pb-4 flex flex-col lgl:flex-row items-center justify-between">
        <div className="flex flex-col lgl:flex-row gap-0 lgl:gap-6 items-center">
          <div className="font-titleFont uppercase tracking-wider font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-t from-blue-900 to-orange-900">
            <Link to="/">NoorShop</Link>
          </div>
          <div className="text-sm text-gray-500 flex items-center gap-1">
            <span className="w-4 h-4 text-[16px] font-semibold flex items-center justify-center rounded-full border-[1px] border-gray-500">
              c
            </span>
            <p>
              <a
                href="https://reactbd.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="font-semibold hover:underline duration-300 cursor-pointer">
                  ReactBD 2023
                </span>
              </a>
              , All Rights Reserved
            </p>
          </div>
        </div>
        <div>
          <img className="w-96" src="/images/payment.png" alt="paymentImg" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
