import React from "react";
import Header from "./Header";
import "../Component/Custom.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import HomeProduct from "./HomeProduct";
import { NavLink } from "react-router";
import Catagory from "./Catagory";
import useToyproduct from "../Hook/useToyProduct";


const Home = () => {
  const { toyP, error, loading } = useToyproduct("");
  console.log(toyP);

  if (loading) {
    return <p className="text-center text-xl mt-10">Loading toys...</p>;
  }

  if (error) {
    return (
      <p className="text-center text-red-600 mt-10">
        Failed to load toys: {error.message}
      </p>
    );
  }

  return (
    <>
      <div className="main_container mx-auto">
        <div className="main_container mx-auto my-10 bg-gray-100 rounded-2xl shadow-md h-[500px]">
          {toyP && toyP.length > 0 ? (
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              autoplay={{ delay: 3000 }}
              loop
              spaceBetween={30}
              slidesPerView={1}
              pagination={{ clickable: true }}
              navigation
            >
              {toyP.map((toy) => (
                <SwiperSlide key={toy.toyId}>
                  <div className="flex flex-col md:flex-row items-center justify-between bg-white rounded-xl shadow-lg p-6">
                    {/* Left Content */}
                    <div className="md:w-1/2 text-left">
                      <h2 className="text-[40px] md:text-[50px] font-black text-gray-800">
                        {toy.toyName}
                      </h2>
                      <p className="text-gray-600 mt-2">{toy.description}</p>
                      <p className="text-xl text-blue-600 font-semibold mt-3">
                        ${toy.price}
                      </p>
                      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all">
                        Buy Now
                      </button>
                    </div>

                    {/* Right Image */}
                    <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
                      <img
                        src={toy.pictureURL}
                        alt={toy.toyName}
                        className="w-[400px] h-[400px] md:w-[500px] md:h-[500px] object-cover rounded-xl"
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

        {/* ✅ Category Section */}
        <div className="main-container mx-auto my-10 bg-gray-300 p-5 rounded-2xl shadow-md">
          <h1 className="text-black font-black text-[30px] px-3 mb-5">
            Top by Category
          </h1>
          <div className="main_container mx-auto">
            <Catagory />
          </div>
        </div>

        {/* ✅ Product Section */}
        <div className="mt-10">
          <p className="text-[30px] font-bold mb-5">Most Top Product</p>
          <div className="main_container mx-auto">
            <HomeProduct />
          </div>
          <div className="flex justify-center items-center mt-6">
            <NavLink
              to="/alltoy"
              className="px-10 py-2 rounded-[10px] bg-blue-700 text-white text-center hover:bg-blue-800 transition-all"
            >
              All Toy
            </NavLink>
          </div>
        </div>

        {/* ✅ Subscribe Section */}
        <section className="relative main_container bg-gradient-to-r from-pink-50 to-blue-50 py-16 md:py-24 rounded-2xl overflow-hidden my-20 mx-auto max-w-7xl">
          {/* Background blobs */}
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col items-center justify-center text-center">
              <p className="text-gray-600 text-lg mb-2">
                We welcome you to join us
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-800 leading-tight mb-6 max-w-3xl">
                Subscribe & start buying
              </h2>
              <p className="text-gray-500 text-base md:text-lg mb-10 max-w-2xl">
                Toys are scattered haphazardly, shelves are overflowing, and the
                overall atmosphere lacks the creativity and functionality that a
                playroom should provide.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center w-full max-w-lg space-y-4 sm:space-y-0 sm:space-x-4">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full sm:w-2/3 px-6 py-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 text-gray-800 text-lg shadow-sm"
                />
                <button className="w-full sm:w-1/3 flex items-center justify-center px-6 py-4 bg-gradient-to-r from-blue-400 to-blue-500 text-white font-semibold rounded-full shadow-lg hover:from-blue-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
                  Subscribe
                  <svg
                    className="ml-2 w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
