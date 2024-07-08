import { IoMdReturnRight } from "react-icons/io";
import React from 'react';

function Button({ val = "get started" }) {
  return (
    <button className="bg-white px-5 p-1 text-sm rounded-full flex items-center gap-2 sm:px-3 sm:py-0.5 sm:text-xs">
      <span className="pr-2">{val}</span>
      <IoMdReturnRight />
    </button>
  );
}

export default Button;
