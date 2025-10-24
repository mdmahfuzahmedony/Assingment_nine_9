import React from "react";
import "../Component/Custom.css";
import { NavLink } from "react-router";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
import { SiAmericanexpress, SiApplepay, SiGooglepay, SiMastercard, SiPaypal, SiVisa } from "react-icons/si";

const Footer = () => {
  return <div className=" bg-gray-800 ">

 <footer className="bg-gray-300 pt-16 pb-8 border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
          {/* Company Info Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              {/* Keedos Logo (Replace with your actual logo if you have one) */}
              {/* <img src={KeedosLogo} alt="Keedos Logo" className="h-10 w-auto mr-2" /> */}
              <span className="text-3xl font-black text-gray-800">Toy <span className="text-blue-700 ">varse</span></span>
              {/* If the flower logo is separate */}
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Toy varse System A/S, DK-7190 Billund, Denmark. Must be 18 years or older to purchase online.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-blue-600">
                <FaFacebookF className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-400">
                <FaTwitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-pink-600">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-700">
                <FaLinkedinIn className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-red-600">
                <FaYoutube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* About Us Section */}
          <div>
            <h4 className="font-semibold text-lg text-gray-800 mb-4">About Us</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">About the Toy varse</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Compliance Line</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Toy varse News</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Sustainability</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Supply Chain</a></li>
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h4 className="font-semibold text-lg text-gray-800 mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Replacement parts</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Shipping & Returns</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Payment Methods</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Product Recalls</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Gift Card</a></li>
            </ul>
          </div>

          {/* Attractions Section */}
          <div className="relative"> {/* for bird image */}
            <h4 className="font-semibold text-lg text-gray-800 mb-4">Attractions</h4>
            {/* Bird Image (Replace with your actual image if you have one) */}
           
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Toy varse House</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Toy varse land Parks</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Discovery Centers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Toy varse Catalogs</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Find a Toy varse Store</a></li>
            </ul>
          </div>

          {/* More from us Section */}
          <div>
            <h4 className="font-semibold text-lg text-gray-800 mb-4">More from us</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Toy varse Education</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Toy varse Foundation</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Affiliate Program</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Toy varse Braille Bricks</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Toy varse Life</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Toy varse Ideas</a></li>
            </ul>
          </div>
        </div>


        {/* Accepted Payments Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-6 border-t border-gray-200">
          <p className="text-gray-600 text-sm mb-4 sm:mb-0">Accepted Payments</p>
          <div className="flex flex-wrap justify-center sm:justify-end items-center gap-4">
            <SiApplepay className="w-8 h-8 text-gray-700" title="Apple Pay" />
            <SiGooglepay className="w-8 h-8 text-gray-700" title="Google Pay" />
            <SiVisa className="w-8 h-8 text-gray-700" title="Visa" />
            <SiMastercard className="w-8 h-8 text-gray-700" title="Mastercard" />
            <SiAmericanexpress className="w-8 h-8 text-gray-700" title="American Express" />
            <SiPaypal className="w-8 h-8 text-gray-700" title="PayPal" />
          </div>
        </div>
      </div>
    </footer>



  </div>;
};

export default Footer;
