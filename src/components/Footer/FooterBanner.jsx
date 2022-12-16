import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const FooterBanner = () => {
  return (
    <div className="max-w-screen-2xl mx-auto bg-gray-900 text-white py-6 px-4 mt-10 flex flex-col lgl:flex-row gap-6 xl:gap-0 items-center justify-evenly">
      <div>
        <h3 className="text-lg uppercase font-semibold tracking-wide">
          Be in touch with us
        </h3>
      </div>
      <div className="flex">
        <input
          className="w-50 md:w-72 px-2 py-1 outline-none text-black rounded-tl-md rounded-bl-md"
          type="email"
          placeholder="Enter your Email"
        />
        <button className="px-4 py-1 bg-gray-700 text-base uppercase hover:bg-blue-700 duration-300 rounded-tr-md rounded-br-md">
          Join Us
        </button>
      </div>
      <div className="flex gap-4">
        <FacebookOutlinedIcon className="opacity-90 hover:opacity-100 scale-100 hover:scale-110 cursor-pointer" />
        <InstagramIcon className="opacity-90 hover:opacity-100 scale-100 hover:scale-110 cursor-pointer" />
        <TwitterIcon className="opacity-90 hover:opacity-100 scale-100 hover:scale-110 cursor-pointer" />
        <LinkedInIcon className="opacity-90 hover:opacity-100 scale-100 hover:scale-110 cursor-pointer" />
        <GitHubIcon className="opacity-90 hover:opacity-100 scale-100 hover:scale-110 cursor-pointer" />
      </div>
    </div>
  );
};

export default FooterBanner;
