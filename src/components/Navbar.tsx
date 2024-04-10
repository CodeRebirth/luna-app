// components/Navbar.js
import Image from "next/image";
import logo from "../assets/images/logo.svg";
import hamburger from "../assets/images/hamburger.svg";
import { logoblack, lunnaLogo2, logoblacktransparent } from "../assets/images/index";
import Search from "./Search";
import Socials from "./Footer/Socials";

const Navbar = () => {
  return (
    <nav className="absolute z-10 w-full h-[auto] bg-no-repeat bg-cover">
      <div className="container mx-auto px-1 py-2">
        <div className="flex items-center justify-between md:h-[50px]">
          <div className="flex items-cente pt-1">
            <Image src={logoblacktransparent} alt="Logo" width={140} height={100} className="mr-2" />
            {/* <div className="text-white font-semibold text-lg">Luna Nanna</div> */}
          </div>

          <div className="hidden md:flex space-x-4">
            {/* Add your navigation links here */}

            <div className="flex justify-center items-center">
              <div className="mr-3">
                <span className="text-xs">Contact: 9319487537</span>
              </div>
              <a href="#!" className="mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="#1877F2" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a href="#!" className="mr-3 text-neutral-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="#000000" viewBox="0 0 512 512">
                  <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                </svg>
              </a>
              <a href="#!" className="mr-3 text-neutral-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="#FF0000" viewBox="0 0 576 512">
                  <path
                    d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a href="#!" className="text-neutral-200 mr-3">
                <img
                  className="h-6 w-6"
                  src="https://res.cloudinary.com/dwwmpwo9b/image/upload/v1712404187/insta-removebg-preview_wtqsjg.png"
                ></img>
              </a>
            </div>
            {/* <a href="#" className="text-black hover:text-gray-300">Home</a>
            <a href="#" className="text-black hover:text-gray-300">About</a>
            <a href="#" className="text-black hover:text-gray-300">Services</a> */}
            {/* ... more links */}
          </div>
          <div className="md:hidden">
            <Image src={hamburger} alt="Hamburger" width={20} height={12} className="cursor-pointer" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;