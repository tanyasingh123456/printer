import React from 'react';

const PaperTypeSelect = () => {
  return (
    <div className="w-[320px] mt-[100px]">
      <div className="flex flex-col bg-white border border-gray-200 rounded-xl shadow-sm p-4">
        <label className="text-sm font-medium text-gray-700 mb-2">
          Paper Type
        </label>

        <select className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="Regular (80 GSM)">Regular (80 GSM)</option>
          <option value="Premium (120 GSM)">Premium (120 GSM)</option>
          <option value="Glossy">Glossy</option>
        </select>
      </div>
    </div>
  );
};

export default PaperTypeSelect;
