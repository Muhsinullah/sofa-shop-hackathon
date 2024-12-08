// import Image from "next/image"


// function Signup(){
//     return(
//         <div className="w-full flex sm:flex-col md:flex-col lg:flex-row justify-start items-start">
//             {/* left */}
//             <div className="sm:w-full md:w-full lg:w-[600px] sm:h-full lg:h-[500px] sm:m-0 sm:mt-10 lg:m-11 cursor-pointer">
//                 <Image src={"/images/signup/mobile.png"}
//                 width={400}
//                 height={400}
//                 alt="Mobile"
//                 className="w-full"></Image>

//             </div>
//             {/* right */}
//             <div className="sm:w-full lg:w-[600px] sm:h-full lg:h-[500px]  my-11 flex flex-col justify-center items-center">
//               <div className="w-[70%] h-[80%] ">
//               <div>
//               <h1 className="sm:text-lg md:text-2xl lg:text-3xl">Create an account</h1>
//               <p className="text-sm pt-2">Enter your details below</p>
//               </div>
//               <form action="" >
//               <input type="text" placeholder="Name" className="py-2 px-3 mt-5 bg-transparent border-b-2"/> <br />
//               <input type="email" placeholder="Email or Phone Number" className="py-2 px-3 mt-5 bg-transparent border-b-2 "/> <br />
//               <input type="password" placeholder="password" className="py-2 px-3 mt-5 bg-transparent border-b-2"/> <br />
//               {/* <button className='bg-red-500 hover:bg-red-600 py-2 px-5 text-white rounded-sm  '>Create Account</button> */}
//                 <input className="py-2 px-12 mt-5 bg-red-500 hover:bg-red-600  text-white rounded-sm " type="button" value="Create Account" />
//               </form>
//               </div>
//             </div>
//         </div>
//     )
// }
// export default Signup




// Code for `pages/my-account.tsx`:
import React from 'react';
import Features from '../components/Features';
// import Footer from '../components/footer';
// import Banner from '../components/Banner';
import Navbar from '../components/Navbar';
import Image from 'next/image';

// Assuming `Footer` and `Features` components are in `components` folder


const MyAccount = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col justify-between">
      <Navbar/>

      <div className="bg-beige h-[306px] py-24 text-center flex flex-col items-center  bg-[url('/shopbg.png')] bg-cover ">
    <Image src="/shop-logo.png" alt='logo' width={50} height={50}></Image>
      <h1 className="text-[40px] font-poppins leading-10 font-semibold">Account</h1>
      <p><span className='font-poppins font-medium'>Home </span>{'>'} Account</p>
    </div>

      {/* Login and Register Section */}
      <section className="py-12">
        <div className="container flex  px-4 justify-evenly grid-cols-1 md:grid-cols-2 ">
          {/* Login */}
          <div className=" p-6  ">
            <h3 className="text-lg font-bold mb-4">Log In</h3>
            <form>
              <div className="mb-4">
                <label htmlFor="username" className="block text-gray-700">Username or email address</label>
                <input type="text" id="username" className="w-[340px]  border rounded-lg px-3 py-4 mt-1" />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-gray-700">Password</label>
                <input type="password" id="password" className="w-[340px] border rounded-lg px-3 py-4 mt-1" />
              </div>
              <div className="mb-4 flex items-center">
                <input type="checkbox" id="remember" className="mr-2 py-48 border rounded-lg" />
                <label htmlFor="remember" className="text-gray-700">Remember me</label>
              </div>
              <div className='flex items-center '>
              <button type="submit" className="w-[170px]  text-black border-[1px] border-black rounded-xl py-3">Log In</button>
              <p className="text-right text-black ml-5 text-sm">Lost Your Password?</p>
              </div>
            </form>
          </div>

          {/* Register */}
          <div className=" p-6">
            <h3 className="text-lg font-bold mb-4">Register</h3>
            <form>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700">Email address</label>
                <input type="email" id="email" className="w-[340px]  border rounded-lg px-3 py-4  mt-1" />
              </div>
              <p className="text-sm text-gray-600 mb-4">A link to set a new password will be sent to your email address.</p>
              <p className="text-sm text-gray-600 mb-4">
              Your personal data will be used to support your <br />experience throughout this website, to manage access <br /> to your account, and for other purposes described in our <br /> <span className='text-black font-poppins'> privacy policy.</span>
              </p>
              <button type="submit" className="w-[170px]  text-black border-[1px] border-black rounded-xl py-3">Register</button>
            </form>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <Features/>
    </div>
  );
};

export default MyAccount;
