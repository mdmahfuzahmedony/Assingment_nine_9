import React from 'react';

const Catagorys = ({Catagory}) => {
  const { toyName, pictureURL, } = Catagory;
  
  return (
    <div className='border-2 border-black rounded-[10px] px-3 mt-4'>
      <img src={pictureURL} alt="" className='w-full mt-3' />
      <p className='text-black font-bold mt-4 '>{toyName}</p>
    </div>
  );
};

export default Catagorys;