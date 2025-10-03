import { CircleCheckBig } from 'lucide-react';
import React from 'react';

const Features = ({ feature }) => {
    // console.log(feature);
    
  return (
      <p className='flex gap-2 mt-2'>
        <CircleCheckBig></CircleCheckBig> {feature}
      </p>
  );
};

export default Features;