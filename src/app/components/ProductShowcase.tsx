
// components/ProductShowcase.tsx
import React from 'react';
import Image from 'next/image';

const ProductShowcase = () => {
  return (
    <section className="flex justify-center gap-5 bg-[#FAF4F4] py-12 relative">
      {/* Product 1 */}
      <div className="relative">
        <Image
          src="/table1.png"
          alt="Side table"
          width={520}
          height={640}
          className="object-cover"
        />
        <div className="absolute top-[70%] ml-28 transform   text-center">
          <h2 className="text-[36px] leading-[36px] font-poppins font-medium">Side table</h2>
          <button className="text-[24px] leading-[36px] font-poppins font-medium mt-2 px-4 py-2 border-b-2 border-black">
            View More
          </button>
        </div>
      </div>

      {/* Product 2 */}
      <div className="relative">
        <Image
          src="/sofa-three-seater.png"
          alt="Three-seater sofa"
          width={592}
          height={611}
          className="object-cover"
        />
        <div className="absolute top-[70%] ml-28 transform   text-center">
          <h2 className="text-[36px] leading-[36px] font-poppins font-medium">Side table</h2>
          <button className="text-[24px] leading-[36px] font-poppins font-medium mt-2 px-4 py-2 border-b-2 border-black">
            View More
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;


