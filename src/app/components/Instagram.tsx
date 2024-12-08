// components/Instagram.tsx
import React from 'react';

const Instagram = () => {
  return (
    <section className="w-full h-[350px] py-12 bg-[url('/insta-bg.png')] text-center items-center">
      <h2 className="text-center pt-5 text-[50px]  font-poppins font-semibold">Our Instagram</h2>
      <p className="text-[#000000] mt-2">Follow our store on Instagram</p>
      <button className="mt-4 px-16 py-3 bg-[#FAF4F4] text-black rounded-full shadow-custom ">Follow Us</button>
    </section>
  );
};

export default Instagram;
