import React from "react";
import { NavLink } from "react-router";
const SingleToy = ({ toy }) => {
  const { toyName, price, rating, pictureURL, toyId, availableQuantity } = toy;

  return (
    <div>
      <div
        className=" shadow-md rounded-xl overflow-hidden py-2 px-3  transform transition-all duration-300 hover:scale-[1.04] hover:shadow-xl hover:-translate-y-1"
      >
        <figure className="h-56">
          <img
            src={pictureURL}
            alt="App"
            className="w-full h-full object-cover rounded-lg transition-all duration-300 hover:opacity-90"
          />
        </figure>

        <div className="py-2">
          <h2 className="text-[20px] font-semibold flex text-white">
            <span>{toyName}</span>
          </h2>
          <div className="flex justify-between items-center">
            <p className="mt-4 text-[16px]">
              Rating: <span className="font-black text-blue-500">{rating}</span>{" "}
            </p>
            <p className="mt-4 text-[16px]">
              Quantity:{" "}
              <span className="font-black text-blue-500">
                {availableQuantity}
              </span>{" "}
            </p>
          </div>

          <p className="mt-4 text-[20px] font-semibold">
            Price:
            <span className="font-black text-blue-500">${price}</span>{" "}
          </p>
          <div className="flex justify-center items-center">
            <NavLink
              to={`/toys/${toyId}`}
              className="py-2 px-4 w-full bg-blue-500 text-white mt-5 text-center"
            >
              View More
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleToy;
