"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import target from "../assets/images/target.svg";
import Image from "next/image";

export default function Search({ placeholder }: { placeholder: string }) {
  function handleSearch(term: string) {
    console.log(term);
  }

  return (
    <div className="absolute w-full md:w-5/6 px-5 z-10 -mt-[70px] md:-mt-[110px] top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div className="relative flex flex-col md:flex-row flex-1 flex-shrink-0 justify-center items-center">
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <div className="relative w-full md:w-3/6">
          <input
            className="block w-full h-[50px] rounded-full pl-10 text-base outline-2 placeholder:text-gray-300 bg-white bg-opacity-80  focus:outline-none"
            placeholder={placeholder}
            onChange={(e) => {
              handleSearch(e.target.value);
            }}
          />
          <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-600 peer-focus:text-gray-200" />
          <div className="absolute z-10 right-4 top-1/2 h-[18px] w-[18px] -translate-y-1/2">
            <Image src={target} alt="target-icon" />
          </div>
          <div className="absolute right-2 top-1/2 -translate-y-1/2">
            <button
              className="rounded-full bg-blue-100 text-black py-1 pl-5 pr-8"
              onClick={() => {
                // Add your button click functionality here
              }}
            >
              Set my location
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
