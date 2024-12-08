import Link from "next/link";
import Menu from "./Menu";
import Image from "next/image";
import SearchBar from "./SearchBar";
import NavIcons from "./NavIcons";
import Shop from "../shop/page";

const Navbar = () => {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-18 2xl:m-64 relative z-50 top-0 bg-transparent">
      {/* MOBILE */}
      <div className="flex justify-between items-center h-full md:hidden">
        <Menu />
      </div>
      {/* BIGGER SCREEN */}
      <div className="hidden md:flex items-center  gap-8 h-full">
        {/* LEFT  */}
        {/* <div className="w-1/3 lg:w-1/2 flex items-center justify-center gap-12 "> */}
        <div className=" h-[24px] w-[430] mt-[38px] ml-[505px] flex gap-12  ">
          <div className="hidden lg:flex text-[16px] gap-4">
            <Link href="/">Home</Link>
            <Link href="/shop">Shop</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>

        {/* Right  */}
        {/* <div className="w-2/3 lg:w-1/2 flex items-center justify-between gap-8 "> */}
        <div className=" mt-[36px] ml-[158px]  flex items-center justify-between gap-8 ">
          <SearchBar />
          <NavIcons />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
