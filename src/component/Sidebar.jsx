import React from 'react';

const Sidebar = () => {
  return (
    <div className="w-64 bg-white shadow-lg">
      <div className="p-6">
        <h1 className="text-2xl font-bold">WhatBytes</h1>
      </div>
      <nav className="mt-8">
        <ul>
          <li className="py-2 px-6 hover:bg-gray-200 cursor-pointer">Dashboard</li>
          <li className="py-2 px-6 hover:bg-gray-200 cursor-pointer">Skill Test</li>
          <li className="py-2 px-6 hover:bg-gray-200 cursor-pointer">Internship</li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;