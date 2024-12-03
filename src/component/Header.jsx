import React from 'react';
import image from "../assets/image.png"
const Header = () => {
  return (
    <div className="flex items-center justify-between p-4 md:p-6 bg-white shadow-md">
      <h2 className="text-lg md:text-xl font-semibold">Skill Test</h2>
      <div className="flex items-center space-x-2 md:space-x-4">
        <span className="text-sm md:text-base font-medium">Sahil Srivastava</span>
        <img
          src = {image}
          alt="Sahil Srivastava's Profile Picture"
          className="w-8 h-8 md:w-10 md:h-10 rounded-full"
        />
      </div>
    </div>
  );
};

export default Header;
