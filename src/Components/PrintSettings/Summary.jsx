import React from 'react';
import icon from '../../assets/icon .webp'

const Summary = () => {
  return (
    <>
    <div className="flex justify-between items-center text-sm py-2 mt-8">
      <span className="text-gray-600">Subtotal (12 pages)</span>
      <span className="font-medium text-gray-800 ml-35">₹120.00</span>
    </div>
    <div className="flex justify-between items-center text-sm py-2 ">
        <span className="text-gray-600">Discount</span>
        <span className="font-medium text-gray-800 ml-52">-₹60.00</span>
    </div>
    <div className="flex justify-between items-center text-sm py-2">
        <span className="text-gray-600">Subtotal Service Fee</span>
        <span className="font-medium text-gray-800 ml-35">₹10.00</span>
    </div>
    <div className="flex justify-between items-center text-sm py-2">
        <span className="text-gray-600 font-semibold text-xl">Total</span>
        <span className="font-medium text-gray-800 ml-55  font-semibold text-xl ">₹70.00</span>
    </div>
    <div>
     
    <button className="w-[325px] h-[50px] mb-5 text-white bg-blue-500 border border-blue-400 rounded-xl flex items-center justify-center gap-2 ml-[25px]">
  <img src={icon} alt="icon" className="w-10 h-10 mr-[100px]" />
  <span className='ml-[-100px]'>Place Order</span>
</button>
<p className='ml-[25px] text-sm'>By placing your order, you agree to our Terms and Privacy Policy
</p>



</div>


</>
  );
};

export default Summary;
