import React, { use } from 'react';

const MarksData = ({ marksPromise }) => {
    const marksData = use(marksPromise);
    const marks = marksData.data;
    console.log(marks);
    
  return <div></div>;
};

export default MarksData;