import React from "react";
import { PieChart, Pie, Cell } from "recharts";
import goal from "../assets/goal.png"

export default function RightSide({ correctAnswers }) {
  const totalQuestions = 15; // Total number of questions

  // Pie chart data
  const pieData = [
    { name: "Correct", value: correctAnswers },
    { name: "Incorrect", value: totalQuestions - correctAnswers },
  ];

  // Pie chart colors
  const COLORS = ["#007bff", "#e5e5e5"]; // Blue for correct, light gray for incorrect

  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md w-full sm:w-2/3 lg:w-1/3 mt-6 sm:mt-10 lg:mt-28">
      <h4 className="text-base sm:text-lg font-bold h-10">Syllabus Wise Analysis</h4>
      <div className="mt-4 space-y-4">
        {[
          { title: "HTML Tools, Forms, History", color: "bg-blue-600", width: "80%" },
          { title: "Tags & References in HTML", color: "bg-orange-500", width: "60%" },
          { title: "Table & References in HTML", color: "bg-red-500", width: "24%" },
          { title: "Table & CSS Basics", color: "bg-green-500", width: "96%" },
        ].map((item, index) => (
          <div key={index} className="h-14">
            <p className="text-sm">{item.title}</p>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
              <div className={`${item.color} h-2 rounded-full`} style={{ width: item.width }}></div>
            </div>
          </div>
        ))}
      </div>

      {/* Pie Chart Section */}
      <div className="mt-6">
        {/* Heading Section */}
        <div className=" mb-4">
          <h4 className="text-lg font-bold">Question Analysis</h4>
          <p className="text-sm text-gray-600 mt-5">
            You scored <span className="font-bold text-blue-600">{correctAnswers} questions</span> correct out of{" "}
            <span className="font-bold">{totalQuestions}</span>. However, it still needs some improvements.
          </p>
        </div>

        {/* Pie Chart with Image in Center */}
        <div className="relative flex justify-center items-center">
          {/* Pie Chart */}
          <PieChart width={150} height={150}>
            <Pie
              data={pieData}
              dataKey="value"
              cx="50%"
              cy="50%"
              innerRadius={60} // Inner radius to create the doughnut shape
              outerRadius={75}
              startAngle={90} // Start angle for better alignment
              endAngle={-270} // End angle to match the circular direction
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
          </PieChart>

          {/* Image in Center */}
          <div className="absolute w-10 h-10 flex justify-center items-center">
            <img
              src={goal} // Replace this with the path to your image
              alt="Target"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Score Details */}
        <p className="mt-2 text-sm text-center">
          Correct: {correctAnswers}, Incorrect: {totalQuestions - correctAnswers}
        </p>
      </div>
    </div>
  );
}
