import React, { useState } from "react";
import { motion } from "framer-motion";
import Product from "./Product";

function Products() {
  const proData = [
    {
      title: "Arqitel",
      disc: "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      live: true,
      case: false,
      isActive: false,
    },
    {
      title: "Cula",
      disc: "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      live: true,
      case: true,
      isActive: false,
    },
    {
      title: "Layout Land",
      disc: "An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow.",
      live: true,
      case: false,
      isActive: false,
    },
    {
      title: "TTR",
      disc: "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
      live: true,
      case: true,
      isActive: false,
    },
    {
      title: "Maniv",
      disc: "A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.",
      live: true,
      case: false,
      isActive: false,
    },
    {
      title: "Singularity",
      disc: "We designed and developed a magical gaming experience made in Webflow to promote the translation service and their sponsorship of the 2022 Webflow Conference.",
      live: true,
      case: false,
      isActive: false,
    },
    {
      title: "Silvr",
      disc: "We teamed up with financing solutions provider Silvr to audit, refine and evolve their brand.",
      live: true,
      case: false,
      isActive: false,
    },
    {
      title: "Rainfall",
      disc: "We crafted a website for Rainfall Ventures, developing prototypes and custom code that ultimately allows their team to update content regularly and with ease.",
      live: true,
      case: true,
      isActive: false,
    },
  ];
  const [pos, setPos] = useState("00");
  const mover = (val) => {
    setPos(val * 100);
  };

  return (
    <div className="mt-32 w-full h-[15%]  relative">
      {proData.map((elem, index) => {
        return <Product key={index} val={elem} mover={mover} count={index} />;
      })}
      <div className="w-full h-full  pointer-events-none absolute top-0 ">
        <motion.div
          initial={{ y: pos, x: "70%" }}
          animate={{ y: pos + `%` }}
          className="w-[25rem]  h-[12.4%] absolute left-[10%]  overflow-hidden -translate-x-[-50%]"
        >
          <motion.div
            animate={{ y: -pos + "%" }}
            className="h-full w-full   "
          >
            <img src="src\assets\img1.jpg" alt=""  />
          </motion.div>
          <motion.div
            animate={{ y: -pos + "%" }}
            className="h-full w-full   "
          >
            <img src="src\assets\img2.jpg" alt="" srcset="" />
          </motion.div>
          <motion.div
            animate={{ y: -pos + "%" }}
            className="h-full w-full   "
          >
            <img src="src\assets\img3.png" alt="" srcset="" />
          </motion.div>
          <motion.div
            animate={{ y: -pos + "%" }}
            className="h-full w-full   "
          >
            <img src="src\assets\img4.png" alt="" srcset="" />
          </motion.div>
          <motion.div
            animate={{ y: -pos + "%" }}
            className="h-full w-full   "
          >
            <img src="src\assets\img5.png" alt="" srcset="" />
          </motion.div>
          <motion.div
            animate={{ y: -pos + "%" }}
            className="h-full w-full   "
          >
            <img src="src\assets\img6.png" alt="" srcset="" />
          </motion.div>
          <motion.div
            animate={{ y: -pos + "%" }}
            className="h-full w-full   "
          >
            <img src="src\assets\img7.webp" alt="" srcset="" />
          </motion.div>
          <motion.div
            animate={{ y: -pos + "%" }}
            className="h-full w-full   "
          >
            <img src="src\assets\img8.png" alt="" srcset="" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Products;
