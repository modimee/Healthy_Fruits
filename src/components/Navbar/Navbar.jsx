import React, { useState } from "react";
import { FaCanadianMapleLeaf } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { HiMenuAlt3 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
import { motion } from 'framer-motion'

const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "Product",
    link: "/product",
  },
  {
    id: 3,
    title: "About",
    link: "/about",
  },
  {
    id: 4,
    title: "Shop",
    link: "/shop",
  },
  {
    id: 5,
    title: "Contacts",
    link: "/contact",
  },
];
function Navbar() {

const [open,setOpen] = React.useState(false);

  return (
    <>
    <nav>
      <motion.div
      initial={{opacity:0}}
      animate={{opacity:1,transition:0.5,duration:0.5}}
      className="container flex justify-between font-bold items-center py-4 md:pt-4 ">
        {/* Logo Section */}
        <div className="text 2xl flex items-center gap-2 font-bold uppercase">
          <p className="text-primary">Fruit</p>
          <p className="text-secondary">Store</p>
          <FaCanadianMapleLeaf className="text-green-500" />
        </div>

        {/* Menu Section */}

        <div className="hidden md:block mr-0">
          <ul className="flex items-center gap-6 text-gray-500">
            {NavbarMenu.map((menu) => (
              <li key={menu.id} className="text xl">
                <a
                  href={menu.link}
                  className="inline-block px-3 py-1 hover:text-primary 
                  hover:shadow-[0_3px_0_-1px_#ef4444] font-semibold duration-200"
                >
                  {menu.title}
                </a>
              </li>
            ))}
            <button className="hover:bg-primary text-2Xl hover:text-pink rounded-full p-2 duration-200">
            <FaCartShopping />
            </button>
          </ul>
        </div>

            {/* Mobile Toggle */}
        <div className="md:hidden p-5 " onClick={()=>setOpen(!open)}>
        <HiMenuAlt3  className="text-3xl cursor-pointer "/>
        </div>
      </motion.div>
    </nav>
    <ResponsiveMenu  open={open}/>
    </>
  );
}

export default Navbar;
