import React, { use } from 'react';
import PriceingCard from '../PriceingCard/PriceingCard';

const PriceingOptions = ({ pricePromise }) => {
    const priceData = use(pricePromise);
    
  return (
    <div>
      <h2 className="text-red-400 text-5xl">get pricing datas</h2>

      {priceData.map((priceing) => (
        <PriceingCard key={priceing.id} priceing={priceing}></PriceingCard>
      ))}
    </div>
  );
};

export default PriceingOptions;