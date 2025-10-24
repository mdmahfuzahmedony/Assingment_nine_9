import React, { useContext } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../AuthContext/AuthContext";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => console.log("User logged out successfully"))
      .catch((error) => console.error(error));
  };

  return (
    <div className="max-w-[1400px] mx-auto mt-4">
      <div className="navbar bg-base-100 shadow-sm">
        {/* Left Side */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink to="/home">Home</NavLink>
              </li>
              {user && (
                <li>
                  <NavLink to="/myprofile">My Profile</NavLink>
                </li>
              )}
              {!user && (
                <>
                  <li>
                    <NavLink to="/login">Login</NavLink>
                  </li>
                  <li>
                    <NavLink to="/register">Register</NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
          <NavLink to="/home" className="text-xl font-bold text-white">
            ToyLand
          </NavLink>
        </div>

        {/* Right Side */}
        <div className="navbar-end gap-3">
          {/* Desktop menu */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <NavLink to="/home">Home</NavLink>
              </li>
              {user && (
                <li>
                  <NavLink to="/myprofile">My Profile</NavLink>
                </li>
              )}
              {!user && (
                <>
                  <li>
                    <NavLink to="/login">Login</NavLink>
                  </li>
                  <li>
                    <NavLink to="/register">Register</NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>

        
          {user ? (
            <>
              {user.photoURL ? (
                <img
                  src={user.photoURL}
                  alt="User"
                  className="w-10 h-10 rounded-full border-2 border-amber-500"
                  title={user.displayName || user.email}
                />
              ) : (
                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-black font-bold">
                  {user.displayName ? user.displayName[0].toUpperCase() : "U"}
                </div>
              )}

              <button
                onClick={handleLogOut}
                className="btn bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
              >
                Sign Out
              </button>
            </>
          ) : (
            <NavLink
              to="/login"
              className="btn bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
            >
              Sign In
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
