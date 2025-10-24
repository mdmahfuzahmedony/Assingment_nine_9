import React from 'react';
import { NavLink } from 'react-router';

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <h1 className="text-[150px] font-extrabold text-blue-600">404</h1>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Oops! Page not found</h2>
      <p className="text-gray-600 mb-6 text-center px-4 md:px-0">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <NavLink
        to="/home"
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
      >
        Go Back Home
      </NavLink>
    </div>
  );
};

export default Error;