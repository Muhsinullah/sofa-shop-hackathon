// components/TopPicks.tsx
import React from 'react';

const TopPicks = () => {
  const picks = [
    { id: 1, name: 'Trenton modular sofa', price: 'Rs. 25,000.00', img: '/tp-1.png' },
    { id: 2, name: 'Granite dining table', price: 'Rs. 25,000.00', img: '/tp-2.png' },
    { id: 3, name: 'Outdoor bar table', price: 'Rs. 25,000.00', img: '/tp-3.png' },
    { id: 4, name: 'Plain console', price: 'Rs. 25,000.00', img: '/tp-4.png' },
  ];

  return (
    <section className="py-12 bg-white">
      <h2 className="text-center text-[36px] leading-[30px] font-poppins font-medium">Top Picks For You</h2>
      <p className=" text-center text-[#9F9F9F] text-[16px] leading-[24px] mt-2">
      Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.
      </p>
      <div className="flex justify-center gap-8 mt-8">
        {picks.map((pick) => (
          <div key={pick.id} className="text-center">
            <img src={pick.img} alt={pick.name} className="w-64 h-64 object-cover" />
            <h3 className="mt-4 text-lg font-medium">{pick.name}</h3>
            <p className="text-gray-700">{pick.price}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <button className="px-6 py-2 text-[16px] leading-[24px] font-poppins font-medium  border-b-2 border-black">View More</button>
      </div>
    </section>
  );
};

export default TopPicks;
