import React from 'react';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';

const data = [
  {
    id: 1,
    name: "Farhan",
    math: 81,
    physics: 76,
    chemistry: 72,
  },
  {
    id: 2,
    name: "Rima",
    math: 93,
    physics: 89,
    chemistry: 95,
  },
  {
    id: 3,
    name: "Tanvir",
    math: 68,
    physics: 73,
    chemistry: 66,
  },
  {
    id: 4,
    name: "Lamia",
    math: 87,
    physics: 91,
    chemistry: 85,
  },
  {
    id: 5,
    name: "Hasib",
    math: 59,
    physics: 62,
    chemistry: 61,
  },
  {
    id: 6,
    name: "Mahin",
    math: 79,
    physics: 83,
    chemistry: 77,
  },
  {
    id: 7,
    name: "Sohana",
    math: 74,
    physics: 69,
    chemistry: 71,
  },
  {
    id: 8,
    name: "Nayeem",
    math: 97,
    physics: 95,
    chemistry: 92,
  },
  {
    id: 9,
    name: "Priya",
    math: 64,
    physics: 67,
    chemistry: 70,
  },
  {
    id: 10,
    name: "Ayman",
    math: 84,
    physics: 90,
    chemistry: 86,
  },
];


const BarChats = () => {
    return (
      <div className="mt-10 grid justify-center">
        <BarChart width={1200} height={300} data={data}>
          <XAxis dataKey={"name"}></XAxis>
          <YAxis></YAxis>
          <Bar dataKey={"math"} fill="#8884d8"></Bar>
          <Bar dataKey={"physics"} fill="yellow"></Bar>
          <Bar dataKey={"chemistry"} fill="violet"></Bar>
        </BarChart>
      </div>
    );
};

export default BarChats;