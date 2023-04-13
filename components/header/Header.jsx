import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import HeaderMenu from "@/data/HeaderMenu";
import DarkMode from "../mode/DarkMode";
import DarkModeMobile from "../mode/DarkModeMobile";
import { isActiveLink } from "@/utilis/linkActiveCheker";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  return (
    <div className="z-50">
      <div className="container">
        {/* header menu start */}
        <header className="fixed lg:static top-0 left-0 z-[1111111] w-full flex justify-between items-center">
          {/* start flex container */}
          <div className="flex justify-between w-full px-4 lg:px-0 bg-[#F3f6f6] lg:bg-transparent lg:dark:bg-transparent dark:bg-black">
            <div className="flex justify-between w-full items-center space-x-4 lg:my-8 my-5 ">
              <Link href="/">
                {/* logo */}
                <Image
                  src="/images/logo/logo.png"
                  alt="logo"
                  className="h-[28px] lg:h-[32px]"
                  width={153}
                  height={26}
                  priority
                />
              </Link>
              {/* start mobile menu and toggle menu button */}
              <div className="flex items-center">
                <DarkModeMobile />
                {/* mobile menu close */}
                {!menuOpen ? (
                  <span
                    onClick={() => setMenuOpen(!menuOpen)}
                    // shown only on small screens hamburger icon
                    className="lg:opacity-0 lg:invisible  visible opacity-100 bg-[#ef4060] w-[40px] h-[40px] rounded-full flex justify-center items-center cursor-pointer text-white dark:text-white text-3xl ml-3"
                  >
                    <AiOutlineMenu />
                  </span>
                ) : (
                  // mobile menu open -> show close icon
                  <span
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="lg:opacity-0 cursor-pointer lg:invisible visible opacity-100  bg-[#ef4060] w-[40px] h-[40px] rounded-full flex justify-center items-center text-white text-3xl ml-3 "
                  >
                    <AiOutlineClose />
                  </span>
                )}
              </div>
              {/* end mobile menu and toggle menu button */}
            </div>
          </div>
          {/* end flex container */}

          {/* mobile menu start */}
          {/* open on small screens, block on lg screens */}
          <nav
            className={`${
              menuOpen ? "block dark:bg-black" : "hidden lg:block"
            }`}
          >
            {/* menu items start */}
            <ul
              className={`${
                // small drop down menu, lg - flex
                menuOpen
                  ? "block lg:hidden absolute left-0 top-20 z-[2222] rounded-b-[20px] w-full bg-white dark:bg-[#212425] drop-shadow-lg py-4 "
                  : "flex my-12"
              }`}
            >
              {HeaderMenu.map(item => (
                <li key={item.id} className="mb-1">
                  <Link
                    href={item.routePath}
                    // router.asPath: this is a string that represents the current URL path of the page
                    className={`${
                      isActiveLink(item.routePath, router.asPath)
                        ? "rounded-md font-poppins cursor-pointer bg-white text-gray-lite font-medium mx-2.5 flex text-xtiny py-2.5 px-2 md:px-4 xl:px-5 items-center transition-all duration-300 ease-in-out dark:hover:text-white dark:bg-[#212425] hover:text-white hover:bg-gradient-to-r from-[#fa5252] to-[#dd2476] dark:text-white linked bg-gradient-to-r"
                        : "px-2 rounded-md  cursor-pointer font-poppins bg-white text-gray-lite font-medium mx-2.5 flex text-xtiny py-2.5 md:px-4 xl:px-5 items-center transition-all duration-300 ease-in-out dark:hover:text-white dark:bg-[#212425] hover:text-white hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] dark:text-white"
                    }`}
                  >
                    <span className="mr-2 text-xl">{item.icon}</span>
                    {item.name}
                  </Link>
                </li>
              ))}
              <DarkMode />
            </ul>
            {/* menu items end */}
          </nav>
          {/* mobile menu end */}
        </header>
      </div>
    </div>
  );
};

export default Header;
