
import React from 'react';
import Image from 'next/image';

// Assuming `Footer` and `Features` components are in `components` folder
import Features from '../components/Features';
// import Footer from '../components/footer';
import Navbar from '../components/Navbar';

const Contact = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col justify-between">
      {/* Header */}
          <Navbar/>

      {/* Banner */}
      <div className="bg-beige h-[306px] py-24 text-center flex flex-col items-center  bg-[url('/shopbg.png')] bg-cover ">
    <Image src="/shop-logo.png" alt='logo' width={50} height={50}></Image>
      <h1 className="text-[40px] font-poppins leading-10 font-semibold">Contact</h1>
      <p><span className='font-poppins font-medium'>Home </span>{'>'} Contact</p>
    </div>

      {/* Contact Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Get In Touch With Us</h3>
            <p className="text-gray-600">
              For more information about our products & services, feel free to drop us an email. Our staff is always here to help you.
            </p>

            <div>
              <p className="flex items-center text-gray-700">
                <span className="mr-2">📍</span>
                236 5th SE Avenue, New York NY10000, United States
              </p>
            </div>
            <div>
              <p className="flex items-center text-gray-700">
                <span className="mr-2">📞</span>
                Mobile: (+84) 546-6789 | Hotline: (+84) 456-6789
              </p>
            </div>
            <div>
              <p className="flex items-center text-gray-700">
                <span className="mr-2">⏰</span>
                Monday-Friday: 9:00 - 22:00 | Saturday-Sunday: 9:00 - 21:00
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="border p-6 rounded shadow-sm">
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700">Your Name</label>
                <input type="text" id="name" className="w-full border rounded px-3 py-2 mt-1" placeholder="Your Name" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700">Email Address</label>
                <input type="email" id="email" className="w-full border rounded px-3 py-2 mt-1" placeholder="Your Email" />
              </div>
              <div className="mb-4">
                <label htmlFor="subject" className="block text-gray-700">Subject</label>
                <input type="text" id="subject" className="w-full border rounded px-3 py-2 mt-1" placeholder="Subject (Optional)" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700">Message</label>
                <textarea id="message" className="w-full border rounded px-3 py-2 mt-1" rows={4} placeholder="Your Message"></textarea>
              </div>
              <button type="submit" className="w-full text-black mr-2  border rounded-lg py-2">Submit</button>
            </form>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <Features />
    </div>
  );
};

export default Contact;
