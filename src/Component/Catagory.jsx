import React from 'react';
import useToyproduct from '../Hook/useToyProduct';
import Catagorys from './Catagorys';

const Catagory = () => {

   const {toyP ,error , loading} = useToyproduct()

  const catagoryProduct = toyP.slice(0, 6);
  console.log(loading);
  console.log(error);

  return (
    <div className="flex gap-5  ">
      {catagoryProduct.map((toyP) => (
       <Catagorys key={toyP.toyId} Catagory = {toyP}></Catagorys>
      ))}
    </div>
  );
};

export default Catagory;