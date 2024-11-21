import React from 'react'
import { motion } from 'framer-motion';
import BannerPng from '../assets/banner-bg.jpg'
import { FaShopify } from "react-icons/fa";
import { FadeLeft,FadeUp } from "../../utility/animation";

const bgStyle={
    backgroundImage: `url(${BannerPng})`,
        backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    Width:"100%",
    Height:"100%",


}

function Banner3() {
  return (
    <section className="">
    <div 
    style={bgStyle}
    className='container grid grid-cols-1 md:grid-cols-2 gap-6 py-14 '>
        {/* black img */}
        <div>

        </div>
      {/* Brand info */}
      <div className='flex flex-col justify-center'>
        <div className='text-center md:text-left space-y-4 lg:max-w-[400px]'>
          <motion.h1 
            className='text-3xl lg:text-4xl font-bold uppercase' 
            variants={FadeLeft(0.5)}
            initial="hidden"
            whileInView="visible"
            viewport={{once:true}}
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.5 }}
          >
            Get Fresh Fruits Today
          </motion.h1>
          <motion.p 
          variants={FadeLeft(0.7)}
          initial="hidden"
          whileInView="visible"
          viewport={{once:true}}

          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quod rerum saepe voluptas officia non numquam? Sed ipsum et quasi ad a libero explicabo molestias, expedita dolorum eum consequatur consectetur!</motion.p>
          <motion.p 
          variants={FadeLeft(1)}
          initial="hidden"
          whileInView="visible"
          viewport={{once:true}}

          >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque dicta expedita quasi sequi tempore architecto?</motion.p>
          <motion.div
            variants={FadeLeft(1.1)}
            initial="hidden"
            animate="visible"
            className="flex justify-center md:justify-start"
          >
            <button
              onClick={() => window.location.href='/learn-more'} // Example link
              className="bg-primary text-white font-semibold py-3 px-6 rounded-xl shadow-md 
              hover:scale-105 transition-transform duration-300 flex items-center gap-2"
              aria-label="Learn more about our fruits"
            >
                <FaShopify />
              <span>Order Now</span>
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Banner3