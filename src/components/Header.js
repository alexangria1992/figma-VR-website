import React from "react";

import Logo from "../assets/img/logo.svg";
import Nav from "./Nav";

import { HiMenu } from "react-icons/hi";

const Header = () => {
  return (
    <header className="py-6 bg-green-300">
      <div className="container mx-auto bg-cyan-700">
        <div className="bg-purple-300">
          {/* LOGO */}
          <a href="/">
            <img src={Logo} alt="" />
          </a>
          {/* NAV */}
          <Nav />
        </div>
      </div>
    </header>
  );
};

export default Header;
