import React from "react";
import Features from "./Features";

const PriceingCard = ({ priceing }) => {
  // console.log(priceing);

  return (
    // card
    <div className="bg-gray-300 p-4 border-2 border-red-500 rounded-2xl flex flex-col">
      {/* card header */}
      <div>
        <h2 className="text-5xl font-semibold">{priceing.plan}</h2>
        <h4 className="text-3xl font-bold text-orange-600">{priceing.price}</h4>
      </div>

      {/* card body */}
      <div className="bg-orange-400 mt-4 rounded-xl p-2 flex-1">
        <p className="mb-4">{priceing.description}</p>

        {priceing.features.map((feature, index) => (
          <Features key={index} feature={feature}></Features>
        ))}
      </div>

      {/* scscribe btn */}
      <button className="btn w-full mt-4 bg-blue-800 text-white">Subscribe</button>
    </div>
  );
};

export default PriceingCard;
