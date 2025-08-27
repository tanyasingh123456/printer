import React from 'react';

const PagesInput = () => {
  return (
    <div className="w-[320px] mt-5">
      <div className="flex flex-col bg-white border border-gray-200 rounded-xl shadow-sm p-4">
        {/* Label */}
        <label className="text-sm font-medium text-gray-700 mb-2">
          Pages to Print
        </label>

        {/* Input */}
        <input
          type="text"
          placeholder="e.g., 1-5, 8, 10-12"
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <p className="mt-1 text-xs text-gray-500">Leave blank for all pages</p>
      </div>
    </div>
  );
};

export default PagesInput;
