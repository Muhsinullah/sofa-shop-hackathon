// components/Blogs.tsx
import React from 'react';

const Blogs = () => {
  const blogs = [
    { id: 1, title: 'Going all-in with millennial design', img: '/blg-1.png' },
    { id: 2, title: 'Going all-in with millennial design', img: '/blg-2.png' },
    { id: 3, title: 'Going all-in with millennial design', img: '/blg-3.png' },
  ];

  return (
    <section className="w-full h-[934px] py-12 bg-gray-100">
      <h2 className="text-center py-5 text-[36px] leading-[24px] font-semibold">Our Blogs</h2>
      <p className=" pb-5 text-center text-[#9F9F9F] text-[16px] leading-[24px] mt-2">
      Find a bright ideal to suit your taste with our great selection.
      </p>
      <div className="flex justify-center gap-8 mt-8">
        {blogs.map((blog) => (
          <div key={blog.id} className="text-center">
            <img src={blog.img} alt={blog.title} className="w-[355px] h-[355px] object-cover" />
            <h3 className="mt-4 text-lg font-medium">{blog.title}</h3>
            <div className="text-center mt-8">
        <button className="px-6 py-5 text-[24px] leading-[24px] font-poppins font-medium  underline underline-offset-4 decoration-[0.4]">Read More</button>
      </div>
            <p className="text-gray-500">5 min · 12th Oct 2022</p>
          </div>
        ))}
    

      </div>
      <div className='flex flex-col mt-24'>
      <button className="px-6 py-2 text-[20px]  font-poppins font-medium  underline decoration-[0.5] space-y-24">View All Post</button>
      </div>
    
    </section>
  );
};

export default Blogs;
