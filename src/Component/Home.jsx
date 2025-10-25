import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { NavLink } from "react-router";

import Header from "./Header";
import HomeProduct from "./HomeProduct";
import Catagory from "./Catagory";
import useToyproduct from "../Hook/useToyProduct";
import "../Component/Custom.css";

const Home = () => {
  const { toyP, error, loading } = useToyproduct("");

  useEffect(() => {
    document.title = "Home | ToyStore";
  }, []);

  if (loading)
    return <p className="text-center text-xl mt-10">Loading toys...</p>;

  if (error)
    return (
      <p className="text-center text-red-600 mt-10">
        Failed to load toys: {error.message}
      </p>
    );

  return (
    <div className="main_container mx-auto px-4 sm:px-6 lg:px-8">
      {/* Featured Toys Slider */}
      <div className="my-10 bg-gray-100 rounded-2xl shadow-md">
        {toyP && toyP.length > 0 ? (
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 3000 }}
            loop
            spaceBetween={30}
            slidesPerView={1}
          >
            {toyP.map((toy) => (
              <SwiperSlide key={toy.toyId}>
                <div className="flex flex-col md:flex-row items-center justify-between bg-white rounded-xl shadow-lg p-4 md:p-6 lg:p-8">
     
                  <div className="w-full md:w-1/2 text-center md:text-left">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-800">
                      {toy.toyName}
                    </h2>
                    <p className="text-gray-600 mt-2 text-Sm sm:text-base md:text-lg">
                      {toy.description}
                    </p>
                    <p className="text-lg sm:text-xl md:text-2xl text-blue-600 font-semibold mt-3 mb-5">
                      ${toy.price}
                    </p>
                    <NavLink
                      to={`/toys/${toy.toyId}`}
                      className="inline-block mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all text-sm sm:text-base md:text-lg"
                    >
                      View More
                    </NavLink>
                  </div>

   
                  <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
                    <img
                      src={toy.pictureURL}
                      alt={toy.toyName}
                      className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] object-cover rounded-xl"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="text-center text-gray-500 py-10">
            <p>No featured toys to display right now.</p>
          </div>
        )}
      </div>


      <div className="my-10 bg-gray-300 p-5 rounded-2xl shadow-md">
        <h1 className="text-black font-black text-2xl sm:text-3xl mb-5 px-3">
          Top by Category
        </h1>
        <Catagory />
      </div>

 
      <div className="mt-10">
        <p className="text-2xl sm:text-3xl font-bold mb-5">Most Top Product</p>
        <HomeProduct />
        <div className="flex justify-center items-center mt-6">
          <NavLink
            to="/alltoy"
            className="px-8 sm:px-10 py-2 rounded-lg bg-blue-700 text-white text-center hover:bg-blue-800 transition-all"
          >
            All Toy
          </NavLink>
        </div>
      </div>


      <section className="relative bg-gradient-to-r from-pink-50 to-blue-50 py-16 md:py-24 rounded-2xl overflow-hidden my-20 mx-auto max-w-7xl">
        <div className="absolute -bottom-10 -left-10 w-32 h-32 sm:w-40 sm:h-40 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -top-10 -right-10 w-32 h-32 sm:w-40 sm:h-40 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>

        <div className="relative z-10 text-center px-4 sm:px-6">
          <p className="text-gray-600 text-lg mb-2">We welcome you to join us</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-800 leading-tight mb-6 max-w-3xl mx-auto">
            Subscribe & start buying
          </h2>
          <p className="text-gray-500 text-sm sm:text-base md:text-lg mb-10 max-w-2xl mx-auto">
            Toys are scattered haphazardly, shelves are overflowing, and the overall atmosphere lacks the creativity and functionality that a playroom should provide.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center w-full max-w-lg mx-auto space-y-4 sm:space-y-0 sm:space-x-4">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full sm:w-2/3 px-4 sm:px-6 py-3 sm:py-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 text-gray-800 text-base sm:text-lg shadow-sm"
            />
            <button className="w-full sm:w-1/3 flex items-center justify-center px-6 py-3 sm:py-4 bg-gradient-to-r from-blue-400 to-blue-500 text-white font-semibold rounded-full shadow-lg hover:from-blue-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 text-base sm:text-lg">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
