import React, { useEffect } from 'react';

const Catagorys = ({Catagory}) => {

   useEffect(() => {
         document.title = "Catagorys | ToyStore";
       }, []);
  const { toyName, pictureURL, } = Catagory;
  
  return (
    <div className='border-2 border-black rounded-[10px] flex justify-center items-center px-3 mt-4'>
      <div>
          <img src={pictureURL} alt="" className='w-full mt-3' />
      <p className='text- font-bold mt-4 text-[20px] mb-2 md-mb-3 '>{toyName}</p>
      </div>
     
    </div>
  );
};

export default Catagorys;