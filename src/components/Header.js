import React from "react";

import Logo from "../assets/img/logo.svg";
import Nav from "./Nav";

import { HiMenu } from "react-icons/hi";

const Header = ({ setNavMobile }) => {
  return (
    <header className="py-6 bg-green-300">
      <div className="container mx-auto bg-cyan-700">
        <div className="bg-purple-300 flex items-center justify-between">
          {/* LOGO */}
          <a href="/">
            <img className="h-[30px]" src={Logo} alt="" />
          </a>
          {/* NAV */}
          <Nav />
          <HiMenu
            onClick={() => setNavMobile(true)}
            className="lg:hidden text-3xl text-white cursor-pointer"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
