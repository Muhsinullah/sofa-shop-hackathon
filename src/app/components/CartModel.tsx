"use client"
import Image from "next/image";

const CartModel = () => {
  const cartItems = false;
  return (
    <div className="absolute p-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-6 z-20">
      {!cartItems ? (
        <div className="">Cart is Empty</div>
      ): (
        <div>
          <Image src="" alt="" width={72} height={96} className="object-cover rounded-md" />
        </div>
      )}
    </div>
  )
}

export default CartModel
