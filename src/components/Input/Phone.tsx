import React from "react";

const Phone = () => {
  return (
    <div>
      <label className="text-gray-600">Phone number</label>
      <div className="relative mt-2 max-w-xs text-gray-500">
        <div className="absolute inset-y-0 left-3 my-auto h-6 flex items-center border-r pr-2">
          <select className="text-sm bg-transparent outline-none rounded-lg h-full">
            <option>+91</option>
          </select>
        </div>
        <input
          type="number"
          placeholder="+1 (555) 000-000"
          className="w-full pl-[4.5rem] pr-3 py-2 appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
        />
      </div>
    </div>
  );
};

export default Phone;
