"use client"

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Tv from '../../public/tv.png';
import GrantSews from "../../public/grant-sews.png";
import Grant from "../../public/grant.jpg";
import { FaHome } from "react-icons/fa";
import { IoMenuOutline } from "react-icons/io5";
import Menu from "../../public/menu.svg";

export default function MobileNav() {
  const sidebarRef = useRef<HTMLDivElement>();
  const [isToggle, setToggle] = useState<boolean>(false);
  const switchToggle = () => setToggle(!isToggle);
  const handleClickOutside = (e: any) => {
    if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
      setToggle(false);
    }
  };
  useEffect(() => {
    // Event listener logic
    if (isToggle) {
      document.addEventListener('mousedown', handleClickOutside);
    };
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isToggle]);

  return (
    <>
    <header className="flex sm:hidden fixed justify-between items-center h-16 w-full bg-purple-700 z-10">
      <div className="flex text-white justify-start items-center w-2/3 gap-1 pl-5">
        <Image
          src={GrantSews}
          alt="Logo"
          width={50}
          height={50}
          className="contrast-100 mix-blend-multiply filter-1"
        />
        <span className="text-xl bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 inline-block text-transparent bg-clip-text">
          Grant Clothing
        </span>
      </div>
      <ul className="flex justify-between items-center pr-5">
        <button type="button" ref={sidebarRef} onClick={switchToggle} className="">
            <IoMenuOutline className="text-4xl text-yellow-200" />
        </button>
      </ul>
      <div ref={sidebarRef} className={`z-10 bg-purple-700 fixed top-0 h-full w-3/4 transition-all duration-700 ease-in-out overflow-auto ${isToggle ?  "left-0" : "-left-3/4" }`}>
        <ul className="mt-5 flex flex-col gap-4">
          <div className="flex flex-col gap-1 text-white justify-center items-center">
            <Image
              src={Grant}
              alt="Logo"
              className="rounded-full  w-52 h-52 object-cover"
            />
            <span className="text-2xl text-white">Grant Gwawoh{' '}👋</span>
          </div>
          <Link href="/">
            <li className="w-full h-8 leading-8 text-center text-2xl hover:text-white">
              HOME
            </li>
          </Link>
          <Link href="/">
            <li className="w-full h-8 leading-8 text-center text-2xl hover:text-white">
              ABOUT
            </li>
          </Link>
          <Link href="/">
            <li className="w-full h-8 leading-8 text-center text-2xl hover:text-white">
              SERVICES
            </li>
          </Link>
          <Link href="/">
            <li className="w-full h-8 leading-8 text-center text-2xl hover:text-white">
              CONTACT
            </li>
          </Link>
        </ul>
      </div>
      </header>  
    </>
  );
};
