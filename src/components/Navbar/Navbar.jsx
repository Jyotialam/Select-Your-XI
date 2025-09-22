import React from "react";
import navImg from "../../assets/logo.png";
import coinImg from "../../assets/coin.png";

const Navbar = ({availableBalance}) => {
  return (
    <div className="navbar max-w-[1200px] mx-auto shadow-sm">
      <div className="flex-1">
        <a className="text-xl">
          <img className="w-[60px] h-[60px]" src={navImg} alt="" />
        </a>
      </div>
      <div className="flex gap-1 items-center border border-gray-300 p-2 rounded-[12px] ">
        <span>{availableBalance}</span>
        <span>Coin</span>
        <img src={coinImg} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
