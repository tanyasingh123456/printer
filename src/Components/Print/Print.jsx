import React, { useState } from 'react';

const Print = () => {
    const [file,setFile] = useState(null);
    const handleFileChange = (e)=>{
        setFile(e.target.files[0]);
    }
    const remove = () =>{
        setFile("");
    }
    return (
        <div className='flex flex-col items-center justify-center bg-white-1000 h-[650px] w-[800px] ml-40 mt-30 rounded-lg shadow-2xl'>
              <h2 className='text-2xl font-semibold text-black-800 text-center mb-4 pb-4'>
                    Upload Your Document
                </h2>
            <div className='w-[700px] border-2 border-dashed border-blue-400 p-8 rounded-lg bg-white shadow-sm hover:bg-blue-50'>
              
                <div className='flex flex-col items-center justify-center p-10 cursor-pointer '>
                    <div className='text-blue-500 text-4xl mb-3'>⬆️</div>
                        <p className='text-blac
                        k-800 font-semibold'>Drag & drop your PDF here.</p>
                        <span className='text-gray-400'>or</span>
                        <label className='mt-3'>
                            <input 
                                type="file" 
                                accept='application/pdf'
                                className='hidden'
                                onChange={handleFileChange}
                             />
                             <span className='px-4 py-2 bg-blue-600 text-white rounded-md cursor-pointer hover:bg-blue-400 transition'>Browser Files</span>
                        </label>
                </div>
                    <div className='flex justify-center gap-5 mt-4 text-sm text-black-500'>
                        <p>✅ PDF only</p>
                        <p> 📦 Max 25MB</p>
                        <p> 🔒 Secure upload</p>
                    </div>
            </div>
            {file && (
                <div className='mt-6 w-[700px] bg-white shadow p-4 rounded-md flex items-center gap-4 border'>
                    <div className='text-blue-500 text-3xl'>📄</div>
                    <div className='flex-1'>
                        <p 
                            className='font-medium text-black-800'
                            onClick={() => {
                                console.log(file);
                            }}  
                        >{file.name}</p>
                        <p className='text-sm text-black-500'>{Math.ceil(file.size/1024/1024)}MB . Upload Complete</p>
                        <div className='w-full bg-black-200 h-2 rounded mt-2'>
                            <div className='h-2 bg-green-500 rounded w-full'></div>
                        </div>
                    </div>
                    <button className='text-red-500 hover:bg-red-400' onClick={remove}>✖</button>
                </div>
            )}
        </div>
    );
}


export default Print;
