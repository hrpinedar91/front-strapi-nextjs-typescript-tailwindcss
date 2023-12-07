/* eslint-disable react/react-in-jsx-scope */
"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { Menu } from "lucide-react";

// import { Navbar } from "flowbite-react";
// import { usePathname } from "next/navigation";
// import { cn } from "@/helpers/classnames";
// // import { useContext } from "react";
// // import { cartContext } from "@/context/CartContext";

const navLinks = [
  {
    href: "/",
    text: "Home",
  },
  {
    href: "/blog",
    text: "Blog",
  },
  {
    href: "/productos",
    text: "Productos",
  },
  {
    href: "/contacto",
    text: "Contacto",
  },
  {
    href: "/fails",
    text: "Fallas",
  },
  {
    href: "/nosotros",
    text: "Nosotros",
  },
  // {
  //   href: "/cart",
  //   text: "Cart",
  // },
];

const Header = () => {
  // const pathname = usePathname();
  // const { totalQuantityProduct } = useContext(cartContext);

  const [state, setState] = useState(false);

  return (
    // <Navbar fluid={true} rounded={true} className="bg-[#f4f4f4]">
    //   <Navbar.Brand href="/">
    //     <Image
    //       priority // Change this line
    //       alt="logo"
    //       height="100"
    //       width="200"
    //       className="
    //         hidden
    //         md:block
    //         cursor-pointer
    //       "
    //       src={"/logo_movil_center.svg"}
    //     />
    //   </Navbar.Brand>
    //   <Navbar.Toggle />
    //   <Navbar.Collapse>
    //     {navLinks.map((navLink) => (
    //       <Navbar.Link
    //         key={navLink.href}
    //         href={navLink.href}
    //         active={pathname === navLink.href}
    //         as={Link}
    //         className={cn(
    //           pathname === navLink.href && "md:text-blue-500 bg-gray-950"
    //         )}
    //       >
    //         <span className="relative">
    //           {navLink.text}
    //           {/* {navLink.text === "Cart" && (
    //             <div className="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full -top-2 -right-5">
    //               {totalQuantityProduct}
    //             </div>
    //           )} */}
    //         </span>
    //       </Navbar.Link>
    //     ))}
    //   </Navbar.Collapse>
    // </Navbar>
    <nav className="bg-[#f4f4f4] w-full border-b md:border-0">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <Link href="/">
            {/* <h1 className="text-3xl font-bold text-purple-600">Logo</h1> */}
            <Image
              priority // Change this line
              alt="logo"
              height="100"
              width="200"
              className="
            hidden
            md:block
            cursor-pointer
          "
              src={"/logo_movil_center.svg"}
            />
          </Link>
          <div className="md:hidden">
            <button
              className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
              onClick={() => setState(!state)}
            >
              <Menu />
            </button>
          </div>
        </div>
        <div
          className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="justify-end items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            {navLinks.map((item, idx) => (
              <li key={idx} className="text-gray-600 hover:text-indigo-600">
                <Link href={item.href}>{item.text}</Link>
              </li>
            ))}
            {/* <form className="flex items-center  space-x-2 border rounded-md p-2">
              <Search className="h-5 w-5 flex-none text-gray-300" />
              <input
                className="w-full outline-none appearance-none placeholder-gray-500 text-gray-500 sm:w-auto"
                type="text"
                placeholder="Search"
              />
            </form> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Header;
