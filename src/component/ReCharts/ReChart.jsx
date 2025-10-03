import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';

 const resultData = [
   {
     id: 1,
     name: "Arif",
     math: 77,
     physics: 81,
     chemistry: 69,
   },
   {
     id: 2,
     name: "Nusrat",
     math: 89,
     physics: 92,
     chemistry: 84,
   },
   {
     id: 3,
     name: "Rafi",
     math: 66,
     physics: 74,
     chemistry: 71,
   },
   {
     id: 4,
     name: "Mitu",
     math: 91,
     physics: 86,
     chemistry: 88,
   },
   {
     id: 5,
     name: "Shakil",
     math: 58,
     physics: 63,
     chemistry: 60,
   },
   {
     id: 6,
     name: "Sadia",
     math: 82,
     physics: 79,
     chemistry: 76,
   },
   {
     id: 7,
     name: "Imran",
     math: 73,
     physics: 67,
     chemistry: 65,
   },
   {
     id: 8,
     name: "Jannat",
     math: 96,
     physics: 94,
     chemistry: 90,
   },
   {
     id: 9,
     name: "Rakib",
     math: 62,
     physics: 70,
     chemistry: 64,
   },
   {
     id: 10,
     name: "Mim",
     math: 85,
     physics: 88,
     chemistry: 83,
   },
 ];



const ReChart = () => {
    return (
      <div className='mt-5 mx-10 grid justify-center'>
        <LineChart width={1000} height={300} data={resultData}>
            <XAxis dataKey={'name'}></XAxis>
            <YAxis></YAxis>
            <Line dataKey={'math'} stroke='red'></Line>
            <Line dataKey={'physics'} stroke='blue'></Line>
            <Line dataKey={'chemistry'} stroke='green'></Line>
        </LineChart>
      </div>
    );
};

export default ReChart;