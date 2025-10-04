import React, { use } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const MarksData = ({ marksPromise }) => {
  const marksDataRes = use(marksPromise);
  const marksData = marksDataRes.data;

  // Process data
  const processingData = marksData.map((studentData) => {
    const student = {
      id: studentData.id,
      name: studentData.name,
      math: studentData.marks.math,
      physics: studentData.marks.physics,
      chemistry: studentData.marks.chemistry,
    };
    student.avg = (
      (student.chemistry + student.math + student.physics) /
      3
    ).toFixed(2);
    return student;
  });

  return (
    <div style={{ width: "100%", height: 400 }}>
      <ResponsiveContainer>
        <BarChart
          data={processingData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="math" fill="#8884d8" name="Math" />
          <Bar dataKey="physics" fill="#82ca9d" name="Physics" />
          <Bar dataKey="chemistry" fill="#ffc658" name="Chemistry" />
          <Bar dataKey="avg" fill="#ff7300" name="Average" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MarksData;
