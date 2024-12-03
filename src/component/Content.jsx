import React, { useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, ReferenceDot } from "recharts";

const Content = ({ skillData, onUpdate }) => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    rank: skillData.rank,
    percentile: skillData.percentile,
    correctAnswers: skillData.correctAnswers,
  });
  const [errors, setErrors] = useState({
    percentile: "",
    correctAnswers: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errors.percentile && !errors.correctAnswers) {
      onUpdate(formData);
      setShowForm(false);
    }
  };

  const handleChange = (field, value) => {
    let error = "";

    if (field === "percentile") {
      if (value > 100) error = "Percentile cannot be greater than 100.";
      else if (value < 0) error = "Percentile cannot be negative.";
    } else if (field === "correctAnswers") {
      if (value > 15) error = "Correct answers cannot be greater than 15.";
      else if (value < 0) error = "Correct answers cannot be negative.";
    }

    setErrors((prev) => ({ ...prev, [field]: error }));
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // Find the student's data point (the point where their percentile lies)
  const studentDataPoint = skillData.graphData.find(
    (point) => point.percentile === skillData.percentile
  );

  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Skill Test Card */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-bold">Hyper Text Markup Language</h3>
        <p className="text-sm text-gray-600">Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021</p>
        <button
          onClick={() => setShowForm(true)}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg"
        >
          Update
        </button>
      </div>

      {/* Update Form */}
      {showForm && (
        <form onSubmit={handleSubmit} className="mt-4 bg-gray-50 p-6 rounded-lg shadow-md">
          <label className="block">
            Rank:
            <input
              type="number"
              value={formData.rank}
              onChange={(e) =>
                setFormData({ ...formData, rank: parseInt(e.target.value, 10) || 0 })
              }
              className="block w-full mt-1 p-2 border rounded"
            />
          </label>
          <label className="block mt-4">
            Percentile:
            <input
              type="number"
              value={formData.percentile}
              onChange={(e) =>
                handleChange("percentile", parseInt(e.target.value, 10) || 0)
              }
              className={`block w-full mt-1 p-2 border rounded ${
                errors.percentile ? "border-red-500" : ""
              }`}
            />
            {errors.percentile && (
              <p className="text-red-500 text-sm mt-1">{errors.percentile}</p>
            )}
          </label>
          <label className="block mt-4">
            Correct Answers:
            <input
              type="number"
              value={formData.correctAnswers}
              onChange={(e) =>
                handleChange("correctAnswers", parseInt(e.target.value, 10) || 0)
              }
              className={`block w-full mt-1 p-2 border rounded ${
                errors.correctAnswers ? "border-red-500" : ""
              }`}
            />
            {errors.correctAnswers && (
              <p className="text-red-500 text-sm mt-1">{errors.correctAnswers}</p>
            )}
          </label>
          <button
            type="submit"
            className={`mt-4 px-4 py-2 rounded-lg ${
              errors.percentile || errors.correctAnswers
                ? "bg-gray-400 text-white cursor-not-allowed"
                : "bg-green-600 text-white"
            }`}
            disabled={errors.percentile || errors.correctAnswers}
          >
            Save
          </button>
        </form>
      )}

      {/* Quick Statistics */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-bold">{skillData.rank}</h4>
          <p className="text-sm text-gray-600">Your Rank</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-bold">{skillData.percentile}%</h4>
          <p className="text-sm text-gray-600">Percentile</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-bold">{skillData.correctAnswers}</h4>
          <p className="text-sm text-gray-600">Correct Answers</p>
        </div>
      </div>

      {/* Comparison Graph */}
      <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
        <h4 className="text-lg font-bold">Comparison Graph</h4>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={skillData.graphData}>
            <XAxis dataKey="percentile" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="students" stroke="#8884d8" />
            {/* Highlight student's position */}
            {studentDataPoint && (
              <ReferenceDot
                x={studentDataPoint.percentile}
                y={studentDataPoint.students}
                r={6}
                fill="red"
                stroke="black"
                strokeWidth={2}
              />
            )}
          </LineChart>
        </ResponsiveContainer>
        <p className="mt-4 text-sm">
          You scored {skillData.percentile}% percentile, which is lower than the average percentile 72% of all the
          engineers who took this assessment.
        </p>
      </div>
    </div>
  );
};

export default Content;
