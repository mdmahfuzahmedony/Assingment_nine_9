// import useToyproduct from "../Hook/useToyProduct";
import { useEffect } from "react";
import useToyproduct from "../Hook/useToyProduct";
import SingleToy from "./SingleToy";

const HomeProduct = () => {


    useEffect(() => {
        document.title = "HomeProduct | ToyStore";
      }, []);

 const {toyP ,error , loading} = useToyproduct()
  const treandingToy = toyP.slice(0, 8);
  console.log(loading);
  console.log(error);

 
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-y  ">
      {treandingToy.map((toyP) => (
       <SingleToy key={toyP.toyId} toy = {toyP}></SingleToy>
      ))}
    </div>
  );
};

export default HomeProduct;
