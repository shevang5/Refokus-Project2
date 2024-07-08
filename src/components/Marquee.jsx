import React from "react";
import { motion } from "framer-motion";

function Marquee({ imgUrl, direction }) {
  return (
    <div className="flex overflow-hidden ">
      {/* initial={{x:"0%"}} animate={{x:"-100%"}} transition={{ ease:"linear", duration:10, repeat: Infinity}}   direction==="left"? "0%":"-100%"*/}

      <motion.div
        initial={{ x: direction === "left" ? "0%" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0%" }}
        transition={{ ease: "linear", duration: 10, repeat: Infinity }}
        className="w-full gap-20 p-5 tr flex flex-shrink-0"
      >
        {imgUrl.map((e, i) => (
          <img key={i} src={e} className="w-20" alt="" />
        ))}
      </motion.div>
      <motion.div
        initial={{ x: direction === "left" ? "0%" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0%" }}
        transition={{ ease: "linear", duration: 10, repeat: Infinity }}
        className="w-full gap-20 p-5 tr flex flex-shrink-0"
      >
        {imgUrl.map((e, i) => (
          <img key={i} src={e} className="w-20" alt="" />
        ))}
      </motion.div>
      
    </div>
  );
}

export default Marquee;
