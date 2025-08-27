import React, { useState } from 'react';
import { FaStar } from "react-icons/fa";
const ShopSelector = () => {
    const [rating,setRating] = useState(0);
    const [hover,setHover] = useState(0);
    return (
        <div className="w-[320px] mt-5" >
            <label className="text-sm font-semibold text-gray-700 block mb-2">
                Selected shop
            </label>
            <div className="flex justify-between items-center bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div>
                    <h3 className="font-semibold">Print Solution</h3>
                    <p className="text-sm text-gray-500">0.8 km • Sector 15</p>
                    <div className="flex items-center space-x-1 mt-2 text-xl cursor-pointer">
                        {[1, 2, 3, 4, 5].map((star) => (
                        <FaStar
                         key={star}
                             onClick={() => setRating(star)}
                            onMouseEnter={() => setHover(star)}
                            onMouseLeave={() => setHover(0)}
                            className={`${
                            star <= (hover || rating) ? "text-yellow-400" : "text-gray-300"
                            } transition-colors duration-200`}
                        />
                         ))}
                    <span className="ml-2 text-sm text-gray-700">
                        {rating > 0 ? `${rating}/5`: ""}
                    </span>

                    </div>
                </div>
                <button className="text-blue-600 text-sm font-medium hover:underline">
                     Change
                </button>
            </div>
        </div>
    );
}

export default ShopSelector;
