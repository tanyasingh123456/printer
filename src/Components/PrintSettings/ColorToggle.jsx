import React, { useState } from "react";

const ColorToggle = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className="flex items-center justify-between px-6 py-3 bg-white border border-gray-200 rounded-xl shadow-md w-[320px] mt-[-1px]">
      {/* Label */}
      <span className="text-base font-medium text-gray-700">
     {isOn ? (
    <>
      Black & White <br />
      <span className="text-sm text-gray-500">(₹5 per page)</span>
    </>
  ) : (
    <>
      Color <br />
      <span className="text-sm text-gray-500">(₹10 per page)</span>
    </>
  )}
</span>
      <div
        onClick={() => setIsOn(!isOn)}
        className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
          isOn ? "bg-blue-500" : "bg-gray-300"
        }`}
      >
        <div
          className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ${
            isOn ? "translate-x-6" : "translate-x-0"
          }`}
        ></div>
      </div>
    </div>
  );
};

export default ColorToggle;
