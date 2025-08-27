import React, { useState } from "react";
import { FaTag } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const DiscountCode = () => {
  const [code, setCode] = useState("");
  const [appliedCode, setAppliedCode] = useState("");

  const handleApply = ()=>{
    if(code.trim()){
        setAppliedCode(code.trim().toUpperCase());
        setCode("");
    }
  }

  const handleRemove = () => {
    setAppliedCode("");
  };

  return (
    <div className="w-[320px] mt-10">
      <div className="flex">
        <input
          type="text"
          placeholder="Discount code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="flex-1 px-3 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleApply}
          className="px-4 py-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 transition"
        >
          Apply
        </button>
      </div>

      {appliedCode && (
        <div className="flex items-center justify-between bg-green-50 border border-green-200 rounded-lg px-3 py-2 text-green-700 mt-8">
          <div className="flex items-center space-x-2">
            <FaTag className="text-green-500" />
            <span className="font-medium">{appliedCode}</span>
          </div>
          <button onClick={handleRemove} className="text-gray-500 hover:text-gray-700">
            <IoMdClose size={18}/>
          </button>
        </div>
      )}
    </div>
  );
};

export default DiscountCode;
