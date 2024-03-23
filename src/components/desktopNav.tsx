import Image from "next/image";
import Link from "next/link";
import Tv from "../../public/tv.png";
import GrantSews from "../../public/grant-sews.png";

interface DesktopNavProps {
  isScrolled: boolean;
};

export default function DesktopNav() {
  return (
    <>
    <header className="hidden sm:flex flex-row fixed justify-between items-center h-20 w-full bg-purple-700 z-10">
      <div className="flex flex-row text-white h-full justify-center items-center w-2/5 gap-3">
        <Image
          src={GrantSews}
          alt="Logo"
          width={60}
          height={60}
          className="contrast-100 mix-blend-multiply filter-1"
        />
      <span className="text-2xl text-white">
        Grant Clothing
      </span>
      </div>
      <ul className="flex flex-row justify-around items-center h-10 w-1/2 ">
        <Link href='/signup'>
          <li className="text-white relative cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-1 after:bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 after:h-1 after:w-0 after:rounded-xl after:duration-300 hover:after:w-full">
            Home
          </li>
        </Link>
        <Link href='#about'>
          <li className="text-white relative cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-1 after:bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 after:h-1 after:w-0 after:rounded-xl after:duration-300 hover:after:w-full">
            About
          </li>
        </Link>
        <Link href='#services'>
          <li className="text-white relative cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-1 after:bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 after:h-1 after:w-0 after:rounded-xl after:duration-300 hover:after:w-full">
            Services
          </li>
        </Link>
        <Link href='#contact'>
          <li className="w-32 h-16 flex flex-row justify-center items-center text-white bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 rounded-full font-medium">
            Contact
          </li>
        </Link>
      </ul>
    </header>
    </>
  );
};
