import React from "react";

const PaperSizeSelect = () => {
  return (
    <div className="w-[320px] h-[20px] mt-[20px]">
      <div className="flex flex-col bg-white border border-gray-200 rounded-xl shadow-sm p-4">
        <label className="text-sm font-medium text-gray-700 mb-2">
          Paper Size
        </label>
        <select className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="A4">A4</option>
          <option value="Letter">Letter</option>
          <option value="Legal">Legal</option>
        </select>
      </div>
    </div>
  );
};

export default PaperSizeSelect;
