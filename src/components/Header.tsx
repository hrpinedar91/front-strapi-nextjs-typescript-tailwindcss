/* eslint-disable react/react-in-jsx-scope */
"use client";

import { Navbar } from "flowbite-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/helpers/classnames";
import Image from "next/image";
// import { useContext } from "react";
// import { cartContext } from "@/context/CartContext";

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
    href: "/store",
    text: "Store",
  },
  {
    href: "/contact",
    text: "Contact",
  },
  {
    href: "/fails",
    text: "Fallas",
  },
  {
    href: "/cart",
    text: "Cart",
  },
];

const Header = () => {
  const pathname = usePathname();
  // const { totalQuantityProduct } = useContext(cartContext);

  return (
    <Navbar fluid={true} rounded={true}>
      <Navbar.Brand href="https://flowbite.com/">
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
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        {navLinks.map((navLink) => (
          <Navbar.Link
            key={navLink.href}
            href={navLink.href}
            active={pathname === navLink.href}
            as={Link}
            className={cn(
              pathname === navLink.href && "md:text-blue-500 bg-gray-950"
            )}
          >
            <span className="relative">
              {navLink.text}
              {/* {navLink.text === "Cart" && (
                <div className="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full -top-2 -right-5">
                  {totalQuantityProduct}
                </div>
              )} */}
            </span>
          </Navbar.Link>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Header;
