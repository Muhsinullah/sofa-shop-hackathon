// import Image from "next/image"


// export default function Futured(){
//     return(
//         <div className="w-full flex justify-center items-center pt-7 ">
//             <div className="w-[80%]">
//                 {/* heading */}
//              <div className="w-full">
//              <h3 className="text-red-500 font-bold border-l-8  border-red-400 pl-3 ml-1">Featured</h3>
//              <h1 className="text-gray-800 font-bold sm:text-xl md:text-3xl lg:text-3xl pt-4">New Arrival</h1>
//             </div>
//             {/* container */}
//             <div className="flex sm:flex-col md:flex-row gap-x-8 gap-y-5 text-white pt-4">
//              {/* left side */}
//              <div className="bg-gray-950 sm:w-full md:w-[60%]  relative">
//                   {/* text  */}
//                   <div className="absolute left-3 bottom-3 text-white">
//                <h1 className="sm:text-lg font-bold md:text-xl">PlayStation 5</h1>
//                 <p className="relative bottom-0 text-xs py-1">Black and White version of the PS5 coming out on sale.</p>
//                 <button className="text-md font-sans underline underline-offset-8 hover:font-bold">Shop Now</button>
//                </div>
//                {/* image */}
//                <Image src={"/images/Futured/playstation.png"}
//                width={500}
//                height={500}
//                alt="playstation"
//                className="w-full h-full"></Image>
               
//                </div>
//                {/* right side */}
//              <div className="flex flex-col gap-y-5">
//                     {/* top */}
//                      <div className="bg-gray-950 flex  relative items-end h-full ">
//                           {/* text  */}
//                      <div className="absolute left-2 bottom-3">
//                        <h1 className="sm:text-lg font-bold md:text-xl">Women&apos;s Collections</h1>
//                         <p className="relative bottom-0 text-xs py-1">Featured woman collections that give you another vibe.</p>
//                         <button className="text-md font-sans underline underline-offset-8 hover:font-bold">Shop Now</button>
//                       </div>
//                              {/* image */}
//                      <div >
//                      <Image src={"/images/Futured/woman-wearing.png"}
//                       width={500}
//                       height={300}
//                       alt="playstationz" 
//                       ></Image>
//                      </div>
//                   </div>
//                      {/* bottom */}
//                      <div className="flex gap-x-5">
//                         {/* left side */}
//                         <div className="bg-gray-950 relative flex justify-center items-center w-[50%]">
//                               {/* text  */}
//                      <div className="absolute left-2 bottom-3">
//                        <h1 className="sm:text-sm font-bold md:text-xl">Speakers</h1>
//                         <p className="relative bottom-0 text-xs sm:py-0 md:py-1">Amazon wireless speakers.</p>
//                         <button className="sm:text-sm md:text-md font-sans underline underline-offset-8 hover:font-bold">Shop Now</button>
//                       </div>
//                              {/* image */}
//                       <Image src={"/images/Futured/speakers.png"}
//                       width={200}
//                       height={200}
//                       alt="playstation"></Image>
//                         </div>
//                         {/* right side */}
//                         <div className="bg-gray-950 relative flex justify-center items-center w-[50%]">
//                               {/* text  */}
//                      <div className="absolute left-2 bottom-3">
//                        <h1 className="sm:text-sm font-bold md:text-xl">Perfume</h1>
//                         <p className="relative bottom-0 text-xs sm:py-0 md:py-1">GUCCI INTENSE OUD EDP.</p>
//                         <button className="sm:text-sm md:text-md font-sans underline underline-offset-8 hover:font-bold">Shop Now</button>
//                       </div>
//                              {/* image */}
//                       <Image src={"/images/Futured/perfume.png"}
//                       width={200}
//                       height={200}
//                       alt="playstation"></Image>
//                         </div>
//                         </div>

//                      </div>
//                      </div>
//              </div>
//              </div>
        

//     )
// }



const Features = () => {
  const features = [
    {
      title: 'Free Delivery',
      description: 'For all orders over $50, consectetur  adipim scing elit.',
    },
    {
      title: '90 Days Return',
      description: 'If goods have problems, consectetur adipim scing elit.',
    },
    {
      title: 'Secure Payment',
      description: '100% secure payment, consectetur adipim scing elit.',
    },
  ];

  return (
    <div className="bg-[#FAF4F4] w-full flex items-center h-[240px] py-3 ">
      <div className="container mx-36 grid grid-cols-1 sm:grid-cols-3 gap-x-24 ">
        {features.map((feature, index) => (
          <div key={index} className="text-center">
            <h3 className="font-poppins text-[26px] mb-2">{feature.title}</h3>
            <p className="text-[#9F9F9F] text-[14px]" >{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
