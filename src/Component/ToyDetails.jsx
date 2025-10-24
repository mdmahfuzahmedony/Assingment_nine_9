import React from "react";
import { useParams } from "react-router"; // ✅ URL থেকে id ধরার জন্য
import useToyproduct from "../Hook/useToyProduct";

const ToyDetails = () => {
  const { toyP, loading } = useToyproduct();
  const { id } = useParams(); 

  if (loading) {
    return <h1>Loading......</h1>;
  }

  // ✅ এখানে সঠিকভাবে compare করা হয়েছে
  const singleToy = toyP.find((toyItem) => String(toyItem.toyId) === id);

  if (!singleToy) {
    return <h1 className="text-center text-red-600 mt-10">Toy not found 😢</h1>;
  }

  const {
    toyName,
    sellerName,
    price,
    rating,
    availableQuantity,
    description,
    pictureURL,
  } = singleToy;

  return (
    <div className="p-6">
      {/* ---------- Toy Info Section ---------- */}
      <div className="flex flex-col md:flex-row">
        {/* Left Image */}
        <div className="flex flex-1 justify-center items-center">
          <img
            src={pictureURL}
            alt={toyName}
            className="w-[500px] h-[500px] object-cover rounded-lg shadow"
          />
        </div>

        {/* Right Info */}
        <div className="flex-1 p-4">
          <h1 className="text-[30px] font-bold text-white">{toyName}</h1>
          <p className="mt-2 text-white font-semibold">
            Quantity: <span className="text-blue-500">{availableQuantity}</span>
          </p>
          <p className="mt-4 text-white font-semibold">
            Price: <span className="text-blue-500">{price}</span>
          </p>
          <p className="mt-4 text-white font-semibold">
            Rating: <span className="text-blue-500">{rating}</span>
          </p>
          <p className="mt-4 text-white font-semibold">
            Seller: <span className="text-blue-500">{sellerName}</span>
          </p>
          <p className="mt-4 text-gray-300">{description}</p>

          <div className="flex justify-start mt-4">
            <button className="py-3 px-5 bg-blue-600 text-[15px] font-semibold rounded-[10px]">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="mt-20 max-w-[1300px] mx-auto">
        <h1 className="text-[25px] font-bold text-white">Description</h1>
        <p className="mt-5 text-gray-200">{description}</p>
      </div>
    </div>
  );
};

export default ToyDetails;
