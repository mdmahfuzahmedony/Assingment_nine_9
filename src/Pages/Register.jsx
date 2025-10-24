import React, { useState, useContext } from "react";
import { AuthContext } from "../AuthContext/AuthContext";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router";

const Register = () => {
  const { createUser, signInWithGoogle } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const formHandle = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value || "User"; // 🔹 Name from input
    const photoURL = e.target.PhotoURL.value;
    const checkbox = e.target.terms.checked;

    // Password validation
    const strongPasswordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!strongPasswordPattern.test(password)) {
      setError(
        "Password must be at least 8 characters, include uppercase, lowercase, number, and special character."
      );
      return;
    }

    if (!checkbox) {
      setError("Please accept our terms and conditions.");
      return;
    }

    setError("");
    setSuccess(false);

    createUser(email, password, name, photoURL)
      .then((res) => {
        setSuccess(true);
        if (res.user) {
          res.user.sendEmailVerification().then(() => {
            alert("Please verify your email address!");
            navigate("/login"); // redirect after verification
          });
        }
      })
      .catch((err) => setError(err.message));
  };

  const handleTogglePassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((res) => {
        console.log("Google login success:", res.user);
        navigate("/home");
      })
      .catch((err) => setError(err.message));
  };

  return (
    <div className="max-w-[1400px] mx-auto my-10">
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">
              Register <span className="text-blue-700">now!</span>
            </h1>
            <p className="py-6">
              Create your account and start exploring all our toys. Please fill all details.
            </p>
          </div>

          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={formHandle}>
                {/* 🔹 Name Field */}
                <label className="label">Name</label>
                <input
                  type="text"
                  className="input"
                  name="name"
                  placeholder="Your Name"
                  required
                />

                <label className="label">Email</label>
                <input
                  type="email"
                  className="input"
                  name="email"
                  placeholder="Email"
                  required
                />

                <label className="label">PhotoURL</label>
                <input
                  type="text"
                  className="input"
                  name="PhotoURL"
                  placeholder="PhotoURL"
                  required
                />

                <label className="label">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="input"
                    name="password"
                    placeholder="Password"
                    required
                  />
                  <button
                    onClick={handleTogglePassword}
                    className="absolute top-3 right-6"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>

                <label className="label mt-2">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="checkbox"
                    name="terms"
                  />
                  Accept terms and conditions
                </label>

                <button className="btn bg-blue-500 btn-neutral mt-4 w-full">
                  Register
                </button>

                {success && (
                  <p className="text-green-500 mt-2">
                    Account created successfully! Please verify your email.
                  </p>
                )}
                {error && <p className="text-red-600 mt-2">{error}</p>}
              </form>

              {/* 🔹 Google Login */}
              <button
                onClick={handleGoogleLogin}
                className="btn btn-outline border-none mt-4 w-full flex items-center justify-center gap-2"
              >
                <img
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  alt="Google"
                  className="w-5 h-5"
                />
                Continue with Google
              </button>

              <p className="mt-4">
                Already have an account?{" "}
                <Link to={"/login"} className="text-blue-500 underline">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
