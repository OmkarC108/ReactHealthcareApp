import React from "react";
import { motion } from "framer-motion";
import { RiSearch2Line } from "react-icons/ri";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

// Add the heart icon to the library
library.add(faHeart);

const BodyVisualization = () => {
  return (
    <div className="relative h-full flex flex-col">
      <div className="absolute top-0 right-0">
        <motion.button
          className="w-8 h-8 rounded-full bg-neutral-200 flex items-center justify-center text-neutral-700"
          whileHover={{ scale: 1.1 }}
        >
          <RiSearch2Line />
        </motion.button>
      </div>

      <div className="flex-1 relative flex items-center justify-center">
        <div className="relative">
          <motion.img
            src="/src/assets/anatomy-placeholder.png"
            alt="Human body anatomy"
            className="h-[350px] object-contain mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />

          {/* Heart indicator */}
          <motion.div
            className="absolute top-[100px] left-[100px]"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
          >
            <motion.div
              className="relative z-10 bg-accent rounded-lg text-white text-xs py-1 px-3 flex items-center gap-1 shadow-md"
              whileHover={{ scale: 1.05 }}
            >
              <FontAwesomeIcon icon={faHeart} className="text-red-500" />
              <span>Healthy Heart</span>
            </motion.div>
            <div className="w-2 h-2 bg-accent absolute -top-1 left-4 rotate-45"></div>
          </motion.div>

          {/* Leg indicator */}
          <motion.div
            className="absolute bottom-[100px] left-[100px]"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
          >
            <motion.div
              className="relative z-10 bg-primary rounded-lg text-white text-xs py-1 px-3 flex items-center gap-1 shadow-md"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src="/src/assets/leg.png"
                alt="Leg"
                className="w-4 h-4 object-contain"
              />{" "}
              Healthy Leg
            </motion.div>
            <div className="w-2 h-2 bg-primary absolute -top-1 left-4 rotate-45"></div>
          </motion.div>
        </div>
      </div>

      {/* Static Parabolic Design */}
      <div className="flex items-center justify-center gap-6 px-6 mt-6">
        <div className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-neutral-400">
          <span className="text-xl font-light">-</span>
        </div>
        <div className="relative flex-1 max-w-[260px]">
          {/* Curved Track Background */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-12 bg-gradient-to-b from-transparent via-neutral-100 to-transparent rounded-full opacity-50"></div>

          {/* Main Track */}
          <div className="relative h-2 bg-white rounded-full shadow-inner overflow-hidden">
            <div className="absolute left-0 top-0 h-full w-[60%] bg-gradient-to-r from-secondary to-primary rounded-full"></div>
          </div>

          {/* Curved Lines Decoration */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-2">
            {[...Array(7)].map((_, i) => (
              <div
                key={i}
                className="w-px h-8 bg-gradient-to-b from-transparent via-neutral-200 to-transparent rounded-full"
                style={{
                  transform: `rotate(${-15 + i * 5}deg)`,
                  opacity: 0.5,
                }}
              />
            ))}
          </div>
        </div>
        <div className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-neutral-400">
          <span className="text-xl font-light">+</span>
        </div>
      </div>
    </div>
  );
};

export default BodyVisualization;
