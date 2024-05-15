import Image from "next/image";
import { logoblacktransparent } from "../assets/images/index";
import Link from "next/link";
import { PhoneIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  return (
    <nav className="w-screen h-20 absolute top-0 z-50" style={{
      background: 'linear-gradient(0deg, rgba(66,235,247,0.25) 0%, rgba(115,131,191,0.25) 100%)'}}>
      <div className="container mx-auto p-4">
        <div className="flex items-center justify-between md:h-[50px]">
          <div className="flex items-center">
            <Link href="/">
              <Image src={logoblacktransparent} alt="Logo" width={140} height={100} className="mr-2" />
            </Link>
          </div>

          <div className="flex space-x-6">
            <a href="#" className="text-lg font-semibold text-black hover:text-gray-900">Blog</a>
            <a href="#" className="text-lg font-semibold text-black hover:text-gray-900">Contact</a>
          </div>
          {/* <div className="md:hidden">
            <Image src={hamburger} alt="Hamburger" width={20} height={12} className="cursor-pointer" />
          </div> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
