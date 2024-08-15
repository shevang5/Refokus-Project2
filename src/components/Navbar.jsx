import React from "react";
import Button from "./Button";

function Navbar() {
  return (
    <div  id='navbar' className="max-w-screen-lg mx-auto p-3  flex gap-10 border-b-[1px]">
      <img
        src="https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
        alt=""
      />
      <div className=" flex justify-between w-full ">
        <div  className="links hidden sm:flex text-white gap-10  ">
          {["Home", "Work", "Culture", "", "News"].map((elem, index) =>
            elem.length === 0 ? (
              <span key={index}>|</span>
            ) : (
              <a key={index} className="text-xs gap-1 flex items-center ">
                {index === 1 && (
                  <span key={index}
                    style={{ boxShadow: "0 0 0.25em #00FF19" }}
                    className="inline-block w-1 h-1 bg-[#00FF19] rounded-full"
                  ></span>
                )}
                {elem}
              </a>
            )
          )}
        </div>
        <Button/>
      </div>
    </div>
  );
}

export default Navbar;
