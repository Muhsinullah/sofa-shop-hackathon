// import Link from "next/link";
// /* eslint-disable @typescript-eslint/no-unused-vars */
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faYoutube, faLinkedin, faTiktok , faFacebook, faWhatsapp, } from '@fortawesome/free-brands-svg-icons'; // Social icons
// import { faArrowCircleRight,faCopyright} from '@fortawesome/free-solid-svg-icons'; // Social icons

// export default function Footer(){
//     return(
//         <main className="bg-neutral-900">
//         <div className="w-full  sm:h-full lg:h-[350px] bg-neutral-900 flex justify-center items-center">
//              <div className="sm:pl-[5%] md:pl-[10%] lg:pl-0 w-full gap-y-9 pt-3 sm:pb-6  flex sm:flex-col lg:flex-row justify-evenly text-white">
//                    <div className=" w-[200px]">
//                     <h1 className="font-bold text-xl mr-4">Exclusive</h1>
//                     <ul>
//                       <li className="pt-2 cursor-pointer">Subscribe</li>
//                       <li className="pt-2 cursor-pointer">Get 10% off your first order</li>
//                       <li className="mt-3 cursor-pointer py-1 border flex justify-center">
//                         <input type="text" placeholder="Enter your Email" className="bg-gray-900 border-none text-white"/>
//                         <FontAwesomeIcon icon={faArrowCircleRight}className="text-xl  sm:hidden md:block" ></FontAwesomeIcon></li>
//                     </ul>
//                    </div>
//                    <div className=" w-[200px]  ">
//                     <h1 className="font-bold text-xl">Support</h1>
//                     <ul>
//                       <li className="pt-1 cursor-pointer">111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</li>
//                       <li className="pt-1 cursor-pointer">exclusive@gmail.com</li>
//                       <li className="pt-1 cursor-pointer">+88015-88888-9999</li>
//                     </ul>
//                    </div>
//                    <div className=" w-[200px] ">
//                     <h1 className="font-bold text-xl">Account</h1>
//                     <ul>
//                       <li  className="pt-1 cursor-pointer">My Account</li>
//                       <li  className="pt-1 cursor-pointer">Login / Register</li>
//                       <li  className="pt-1 cursor-pointer">Cart</li>
//                       <li  className="pt-1 cursor-pointer">Wishlist</li>
//                       <li  className="pt-1 cursor-pointer">Shop</li>
//                     </ul>
//                    </div>
//                    <div className=" w-[200px]">
//                     <h1 className="font-bold text-xl">Quick Link</h1>
//                     <ul>
//                       <li  className="pt-1 cursor-pointer">Privacy Policy</li>
//                       <li  className="pt-1 cursor-pointer">Terms Of Use</li>
//                       <li  className="pt-1 cursor-pointer">FAQ</li>
//                       <li  className="pt-1 cursor-pointer">Contact</li>
//                     </ul>
//                    </div>
//                    <div className="">
//             <h1 className="font-bold text-xl pb-4">Social Links</h1>
//        <ul className="list-none flex gap-x-3">
     
//       <li>
//         <Link href="https://www.youtube.com/@Noureenramzan925"  target="_blank" rel="noopener noreferrer">
//           <FontAwesomeIcon icon={faYoutube} className=" text-3xl mr-2  transition duration-200 ease-out hover:scale-105 hover:ease-in" />
//         </Link>
//       </li>

//       <li>
//         <Link href="https://www.linkedin.com/in/noureen-ramzan-a744b12ba/" target="_blank" rel="noopener noreferrer" >
//           <FontAwesomeIcon icon={faLinkedin} className=" text-3xl mr-2  transition duration-200 ease-out hover:scale-105 hover:ease-in" />
//         </Link>
//       </li>

//       <li>
//         <Link href=""  target="_blank" rel="noopener noreferrer">
//           <FontAwesomeIcon icon={faTiktok} className=" text-3xl mr-2  transition duration-200 ease-out hover:scale-105 hover:ease-in" />
//         </Link>
//       </li>
//       <li>
//         <Link href=""  target="_blank" rel="noopener noreferrer">
//           <FontAwesomeIcon icon={faFacebook} className=" text-3xl mr-2  transition duration-200 ease-out hover:scale-105 hover:ease-in" />
//         </Link>
//       </li>
//       <li>
//         <Link href=""  target="_blank" rel="noopener noreferrer">
//           <FontAwesomeIcon icon={faWhatsapp} className=" text-3xl mr-2  transition duration-200 ease-out hover:scale-105 hover:ease-in" />
//         </Link>
//        </li>
//     </ul>
//      </div>
//              </div>
//         </div>
//         <p className="text-white text-center text-sm pb-4"><FontAwesomeIcon icon={faCopyright}className="text-lg mr-3  " ></FontAwesomeIcon>Copyright Rimel 2022. All right reserved</p>


//         </main>
//     )
// }







// // components/Footer.tsx
// import React from 'react';

// const Footer = () => {
//   return (
//     <footer className="py-8 bg-gray-900 text-white text-center">
//       <p>2023 Neutral House. All rights reserved.</p>
//     </footer>
//   );
// };

// export default Footer;




// components/InstagramWithFooter.tsx
const Footer = () => {
  return (
    <div className="">
      {/* Footer Section */}
      <footer className="bg-[#FFFFFF] py-8">
        <div className="h-[255px] container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 h ">
          {/* Address Section */}
          <div className="flex items-center mt-8 ml-16">
            <p className="text-[#9F9F9F] text-[15px] items-center">
              400 University Drive Suite 200 Coral <br /> Gables, <br /> FL 33134 USA
            </p>
          </div>

          {/* Links */}
          <div className="flex justify-between md:justify-center space-x-32">
            <div className="flex flex-col space-y-10">
              <h3 className="font-semibold text-[#9F9F9F]">Links</h3>
              <ul className="mt-2 space-y-5 font-poppins text-[14px] text-black">
                <li>Home</li>
                <li>Shop</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className="flex flex-col space-y-10">
              <h3 className="font-semibold flex flex-col space-y-10 text-[#9F9F9F]">Help</h3>
              <ul className="mt-2 space-y-5 font-poppins text-[14px] text-black">
                <li>Payment Options</li>
                <li>Returns</li>
                <li>Privacy Policies</li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col space-y-10">
            <h3 className="font-semibold text-[#9F9F9F]">Newsletter</h3>
            <div className="mt-2 flex space-x-2">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="border-b-[1.5px] border-black bg-transparent py-3 text-[14px] h-[21px]"
              />
              <button className=" font-poppins  border-b-[1.5px] text-[14px] border-black text-black ">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <hr className="mx-auto w-11/12 text-[#D9D9D9]" />
        <div className="mt-8 ml-10 text-black text-sm">
          © 2022 Meubel House. All rights reserved
        </div>
      </footer>
    </div>
  );
};

export default Footer;

