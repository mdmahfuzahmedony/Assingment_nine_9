import React, { useEffect } from "react";
import useToyproduct from "../Hook/useToyProduct";
import Catagorys from "./Catagorys";

const Catagory = () => {
  // ✅ Dynamic Page Title
  useEffect(() => {
    document.title = "Category | ToyStore";
  }, []);

  const { toyP, error, loading } = useToyproduct();

  const catagoryProduct = toyP.slice(0, 6);

  if (loading) {
    return <p className="text-center text-lg mt-5">Loading categories...</p>;
  }

  if (error) {
    return (
      <p className="text-center text-red-600 mt-5">
        Failed to load categories: {error.message}
      </p>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-6 gap-5">
      {catagoryProduct.map((toy) => (
        <Catagorys key={toy.toyId} Catagory={toy}></Catagorys>
      ))}
    </div>
  );
};

export default Catagory;
