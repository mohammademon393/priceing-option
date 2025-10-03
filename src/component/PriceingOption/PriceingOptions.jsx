import React, { use } from 'react';
import PriceingCard from '../PriceingCard/PriceingCard';

const PriceingOptions = ({ pricePromise }) => {
    const priceData = use(pricePromise);
    
  return (
    <div>
      <h2 className="text-red-400 text-2xl">get pricing datas</h2>

      {/* card container */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-10'>
        {priceData.map((priceing) => (
          <PriceingCard key={priceing.id} priceing={priceing}></PriceingCard>
        ))}
      </div>
    </div>
  );
};

export default PriceingOptions;