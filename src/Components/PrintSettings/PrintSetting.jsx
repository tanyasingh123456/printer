import React from 'react';
import ColorToggle from './ColorToggle';
import DiscountCode from './DiscountCode';
import PagesInput from './PagesInput';
import PaperSizeSelect from './PaperSizeSelect';
import PaperTypeSelect from './PaperTypeSelect';
import ShopSelector from './ShopSelector';
import Summary from './Summary';
const PrintSetting = () => {
    return (
            <div className='flex flex-col items-center justify-center bg-white-1700 h-[1200px] w-[370px] ml-290 mt-30 rounded-lg shadow-xl mb-500px mt-[-40rem] mb-[50px]'>
                <div className='relative mt-[-220px] '>
                <h1 className='text-black-50 mt-[190px] ml-[-160px] font-semibold text-xl'>Print Settings</h1>
                </div>
            <ColorToggle/>
            <PaperSizeSelect/>
            <PaperTypeSelect/>
            <PagesInput/>
            <ShopSelector/>
            <DiscountCode/>
            <Summary/>
            
        </div>
    );
}

export default PrintSetting;
