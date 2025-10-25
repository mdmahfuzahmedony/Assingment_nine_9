import React, { useEffect } from "react";
import "../Component/Custom.css";
import AllToys from "./AllToys";
import useToyproduct from "../Hook/useToyProduct";

const AllToy = () => {
  useEffect(() => {
    document.title = "AllToys | ToyStore";
  }, []);

  const { toyP, loading } = useToyproduct();
  if (loading) {
    return (
      <h1 className="text-center text-xl font-semibold mt-20">Loading...</h1>
    );
  }

  return (
    <div className="text-center px-4 ">


                          {/* ---------- Heading ---------- */}
      <h1 className="text-[40px] font-bold text-white mt-10">Our All Toys</h1>
      <p className="text-[18px] font-light text-gray-400 mt-2">
        Explore all the Toy
      </p>

                            {/* ---------- Search Bar & Count ---------- */}
      <div className="flex flex-col md:flex-row justify-between  items-center gap-4 mt-8 max-w-[1300px] mx-auto">
        <p className="text-white font-medium">
          <span className="text-white">({toyP.length})</span> Toy Found
        </p>

        <div className="relative w-full border-red-300 border-1 rounded-lg  md:w-80 max-w-[1300px]">
          <input
            type="search"
            placeholder="Search App..."

            // value={searchTerm}
            // onChange={(e) => setSearchTerm(e.target.value)}
            
            className="w-full text-white py-2 pl-10 pr-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <svg
            className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-200"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
        </div>
      </div>

      {/* ---------- Apps Grid / Not Found ---------- */}
      <div className="mt-10 ">
        <AllToys key={toyP.toyId} toy={toyP}></AllToys>
      </div>
    </div>
  );
};

export default AllToy;
