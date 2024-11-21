import React from 'react';
import { motion } from 'framer-motion';
import BanPng from '../assets/fruit-plate2.png';
import { FadeUp } from "../../utility/animation";

function Banner2() {
  return (
    <section className="">
      <div className='container grid grid-cols-1 md:grid-cols-2 gap-6 py-24'>
       
        {/* Brand info */}
        <div className='flex flex-col justify-center'>
          <div className='text-center md:text-left space-y-4 lg:max-w-[400px]'>
            <motion.h1
              className='text-3xl lg:text-4xl font-bold uppercase' 
              variants={FadeUp(0.5)}
              initial="hidden"
              whileInView="visible"
              viewport={{once:true}}
              animate={{ opacity: 1 }} 
              transition={{ duration: 0.5 }}
            >
              Online Fruit Store
            </motion.h1>
            <motion.p 
            variants={FadeUp(0.7)}
            initial="hidden"
            whileInView="visible"
            viewport={{once:true}}

            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quod rerum saepe voluptas officia non numquam? Sed ipsum et quasi ad a libero explicabo molestias, expedita dolorum eum consequatur consectetur!</motion.p>
            <motion.p 
            variants={FadeUp(1)}
            initial="hidden"
            whileInView="visible"
            viewport={{once:true}}

            >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque dicta expedita quasi sequi tempore architecto?</motion.p>
            <motion.div
              variants={FadeUp(1.1)}
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
                <span>Download the App</span>
              </button>
            </motion.div>
          </div>
        </div>
         {/* Banner Image */}
         <div className='flex justify-center items-center'>
          <motion.img
          initial={{ opacity: 0 ,scale:0.5}}
          whileInView={{opacity:1,scale:1}}
          transition={{type:"spring",stiffness:100,delay:0.2
          }}
            src={BanPng} 
            className='w-[350px] md:max-w-[500px] h-auto object-cover' 
            alt="A vibrant splash of fruits" 
          />
        </div>
      </div>
    </section>
  );
}

export default Banner2;
