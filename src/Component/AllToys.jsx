import React from 'react';

import SingleToy from './SingleToy';


const AllToys = ({toy}) => {
  return (
   
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-10 max-w-[1300px] mx-auto">
      {toy.map((singletoy) => (
        <SingleToy key={singletoy.toyId} toy={singletoy} />
      ))}
    </div>
  );
};

export default AllToys;