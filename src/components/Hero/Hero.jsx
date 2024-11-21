import React from "react";
import { motion } from "framer-motion";
import { FaShopify } from "react-icons/fa";
import HeroPng from "../assets/fruit-plate.png";
import LeafPng from "../assets/leaf.png";
import { FadeRight } from "../../utility/animation";


function Hero() {
  return (
    <section>
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative">
        {/* Brand info */}
        <motion.div
          className="flex flex-col justify-center py-14 md:py-0 relative z-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center md:text-left py-14 space-y-6 lg:max-w-[400px]">
            <motion.h1
              variants={FadeRight(0.6)}
              initial="hidden"
              animate="visible"
              className="text text-5xl lg:text-6xl font-bold leading-relaxed xl:leading-loose font-averia"
            >
              Healthy
              <br />
              Fresh <span className="text-secondary">Fruits!</span>
            </motion.h1>
            <motion.p
              variants={FadeRight(0.9)}
              initial="hidden"
              animate="visible"
              className="text-2xl tracking-wide"
            >
              Order Now For Fresh Healthy Life
            </motion.p>
            <motion.p
              variants={FadeRight(1.2)}
              initial="hidden"
              animate="visible"
              className="text-gray-400"
            >
              Healthy and yummy food for fresh morning breakfast. Eat Daily for
              good health and mind. Order Now And Get 20% off on your First
              Order!
            </motion.p>

            {/* Button */}
            <motion.div
              variants={FadeRight(1.5)}
              initial="hidden"
              animate="visible"
              className="flex justify-center md:justify-start"
            >
              <button
                className="bg-primary text-white font-semibold py-3 px-6 rounded-xl shadow-[0px_10px_14px_-7px_#de0029] 
                hover:!scale-110 duration-300 flex items-center gap-2"
                aria-label="Order fruits now"
              >
                <FaShopify />
                <span>Order Now</span>
              </button>
            </motion.div>
          </div>
        </motion.div>

        {/* Hero image */}
        <div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center items-center"
        >
          <motion.img
            initial={{ opacity: 0, x: 200, rotate: 75 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            src={HeroPng}
            alt="Plate of fresh fruits"
            className="w-[350px] h-auto md:w-[550px] drop-shadow:(-6px 8px 15px rgba(0,0,0,0.2))"
          />
        </div>

        {/* leaf img */}

        <div className="absolute top-14 md:top-0 right-1/2 blur-sm opacity-80 rotate-[40deg]">
          <motion.img
            initial={{ opacity: 0, x: 200, rotate: 75 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            src={LeafPng}
            className="w-full md:max-w-[300px]"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
