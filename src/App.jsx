import React, { useState } from "react";
import Sidebar from "./component/Sidebar";
import Header from "./component/Header";
import Content from "./component/Content";
import RightSide from "./component/RightSide";

const App = () => {
  const [skillData, setSkillData] = useState({
    rank: 1,
    percentile: 30,
    correctAnswers: 8, // Starting value
    graphData: [
      { percentile: 0, students: 2 },
      { percentile: 25, students: 8 },
      { percentile: 50, students: 15 },
      { percentile: 72, students: 20 },
      { percentile: 90, students: 4 },
      { percentile: 100, students: 1 },
    ],
  });

  const handleUpdate = (newData) => {
    setSkillData((prevState) => ({
      ...prevState,
      ...newData,
    }));
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <Content skillData={skillData} onUpdate={handleUpdate} />
      </div>
      <RightSide correctAnswers={skillData.correctAnswers} />
    </div>
  );
};

export default App;
