import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <div className="header w-full h-80 min-h-headerHeigth bg-headerImage  bg-no-repeat bg-cover bg-center flex items-center justify-center">
      <div className="header-container flex flex-col items-center w-widthFull">
        <div className="header-container__text mb-8">
          <h1 className="header-container__text-title text-headerText text-white uppercase font-headerFont ">
            Rick And Morty
          </h1>
        </div>
        <div className="header-container__search w-widthFull flex justify-center font-headerFont text-searchInputText">
          <input
            type="text"
            placeholder="Name..."
            className="w-searchInputWidth h-14 outline-none p-5 text-gray-400 rounded-md text-xs border-2 placeholder:text-gray-300"
          />
        </div>
      </div>
    </div>
  );
}
