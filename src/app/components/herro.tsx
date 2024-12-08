
import Image from "next/image";
import Navbar from "./Navbar";


const HeroSection = () => {
    return (
      <section className="bg-[#FBEBB5] h-[900px] ">
         <Navbar/>
         <div className="   flex justify-between items-center">
        <div >
          {/* <h1 className="text-4xl font-poppins font-semibold">Rocket single seater</h1> */}
          <h1 className="text-[50px] transform scale-y-125 font-custom510 leading-[96px]  w-full  font-poppins ml-56">
              Rocket single <br className="" /> seater
            </h1>
            
          <button className=" text-[24px] leading-[36px] font-poppins font-medium  mt-4 px-4 py-2 border-b-2 border-black ml-56">Shop Now</button>
        </div>
        <Image
            src="/single-seater.png"
            alt=""
            width={950}
            height={1000}
            className=" ml-5 text- -rotate-[180°]">
            </Image>
            </div>
      </section>
    );
  };
  
  export default HeroSection;
  
