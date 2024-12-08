"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import CartModel from "./CartModel";

const NavIcons = () => {
  const [isCartOpen, setisCartOpen] = useState(false);

  return (
    <div className="flex items-center gap-4 xl:gap-6 relative">
      <Link href="/account">
        {" "}
        <Image
          src="/account.png"
          alt=""
          width={22}
          height={22}
          className="cursor-pointer bg-transparent"
        />
      </Link>

      <div className="absolute p-4 rounded-md top-12 left-0 text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2) z-20] "></div>
      <Link href="/account">
        <Image
          src="/vector.png"
          alt=""
          width={22}
          height={22}
          className="cursor-pointer bg-transparent"
        />{" "}
      </Link>
      <div className="relative cursor-pointer">
        <Image
          src="/cart.png"
          alt=""
          width={22}
          height={22}
          className="bg-transparent"
          onClick={() => setisCartOpen((prev) => !prev)}
        />
        <div className="absolute -top-4 -right-4 w-6 bg-lama rounded-full text-white text-sm flex items-center justify-center"></div>
      </div>
      {isCartOpen && <CartModel />}
    </div>
  );
};

export default NavIcons;
