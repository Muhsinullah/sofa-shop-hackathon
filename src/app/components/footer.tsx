
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

