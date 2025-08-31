import React from "react";
import { FaRegUser } from "react-icons/fa";
import { IoSearchSharp, IoMenu } from "react-icons/io5";
import { BsBag } from "react-icons/bs";
import Logo from "../assets/images/new_zealand_honey_logo.svg";

const Navbar = () => {
  return (
    <nav className="sticky top-0">
      <ul className="navbar">
        <li className="nav-item-1 cursor-pointer hover:border hover:border-[#f0b933] hover:bg-[#f0b933] hover:text-white">
          WHICH MANUKA IS FOR ME?
        </li>
        <li className="sm:hidden xl:block">
          <a href="">Shop</a>
        </li>
        <li className="sm:hidden xl:block">
          <a href="">Explore</a>
        </li>
        <li className="pl-8 xl:hidden">
          <IoMenu />
        </li>
        <li>
          <a href="">
            <img src={Logo} alt="logo" />
          </a>
        </li>
        <li className="sm:hidden xl:block">
          <a href="">About</a>
        </li>
        <li className="sm:hidden xl:block">
          <a href="">Rewards</a>
        </li>
        <li className="sm:hidden xl:block">
          <a href="">Contact</a>
        </li>
        <li className="right-nav-item">
          <a href="">
            <FaRegUser />
          </a>
          <a href="">
            <IoSearchSharp />
          </a>
          <a href="">
            <BsBag />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
