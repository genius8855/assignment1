import React from "react";
import { PieChart, Pie, Cell } from "recharts";

export default function RightSide({ correctAnswers }) {
  const totalQuestions = 15; // Total number of questions

  // Pie chart data
  const pieData = [
    { name: "Correct", value: correctAnswers },
    { name: "Incorrect", value: totalQuestions - correctAnswers },
  ];

  // Pie chart colors
  const COLORS = ["#0088FE", "#FF8042"];

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
        <h4 className="text-base sm:text-lg font-bold">Performance Overview</h4>
        <div className="flex justify-center">
          <PieChart width={150} height={150}>
            <Pie
              data={pieData}
              dataKey="value"
              cx="50%"
              cy="50%"
              outerRadius={60}
              fill="#8884d8"
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
          </PieChart>
        </div>
        <p className="mt-2 text-sm text-center">
          Correct: {correctAnswers}, Incorrect: {totalQuestions - correctAnswers}
        </p>
      </div>
    </div>
  );
}
