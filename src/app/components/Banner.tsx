import React from 'react'
import Image from 'next/image'

const Banner = () => {
  return (
    <div className="bg-beige h-[306px] py-24 text-center flex flex-col items-center  bg-[url('/shopbg.png')] bg-cover ">
    <Image src="/shop-logo.png" alt='logo' width={50} height={50}></Image>
      <h1 className="text-[40px] font-poppins leading-10 font-semibold">Shop</h1>
      <p><span className='font-poppins font-medium'>Home </span>{'>'} Shop</p>
    </div>
  )
}

export default Banner;
