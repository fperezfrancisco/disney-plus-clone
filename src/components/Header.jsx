import React, { useState } from "react";
import logo from "../assets/Images/disney-logo-official.png";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
  HiPlus,
} from "react-icons/hi2";
import { HiDotsVertical } from "react-icons/hi";
import HeaderItem from "./HeaderItem";
import profileImg from "../assets/Images/profile-img.jpg";

function Header() {
  const [toggle, setToggle] = useState(false);

  const menu = [
    { name: "HOME", icon: HiHome },
    { name: "SEARCH", icon: HiMagnifyingGlass },
    { name: "WATCH LIST", icon: HiPlus },
    //{ name: "ORIGINALS", icon: HiStar },
    { name: "MOVIES", icon: HiPlayCircle },
    { name: "SERIES", icon: HiTv },
  ];

  return (
    <div className="flex items-center justify-between p-5">
      <div className="flex items-center gap-8">
        <img src={logo} className="w-[100px] md:w-[115px] object-cover" />
        <div className="hidden md:flex items-center gap-5">
          {menu.map((item) => (
            <HeaderItem name={item.name} Icon={item.icon} />
          ))}
        </div>
        <div className="flex md:hidden items-center gap-5">
          {menu.map(
            (item, index) =>
              index < 3 && <HeaderItem name={""} Icon={item.icon} />
          )}
          <div className="md:hidden" onClick={() => setToggle(!toggle)}>
            <HeaderItem name={""} Icon={HiDotsVertical} />
            {toggle ? (
              <div className="absolute mt-3 bg-[#121212] border-[1px] p-3 border-gray-700 px-5 py-4">
                {menu.map(
                  (item, index) =>
                    index >= 3 && (
                      <HeaderItem name={item.name} Icon={item.icon} />
                    )
                )}
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <div className="w-[40px] h-[40px] rounded-full bg-slate-500 text-black text-center flex  justify-center items-center font-bold text-xl">
        F
      </div>
    </div>
  );
}

export default Header;