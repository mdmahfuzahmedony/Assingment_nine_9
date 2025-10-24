import { useState, useContext, useRef } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../AuthContext/AuthContext";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../Firebase/Firebase";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // 👈 icons import

const Login = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // 👈 password toggle
  const { signInUser, signInWithGoogle } = useContext(AuthContext);
  const emailRef = useRef(null);
  const navigate = useNavigate();

  // Password toggle
  const handleTogglePassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  // Email/Password login
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    setError("");
    setSuccess(false);

    signInUser(email, password)
      .then(() => {
        setSuccess(true);
        navigate("/home");
      })
      .catch((err) => setError(err.message));
  };

  // Google login
  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((res) => {
        console.log("Google login success:", res.user);
        navigate("/home");
      })
      .catch((err) => setError(err.message));
  };

  // Forget password
  const handleForgetPassword = () => {
    const email = emailRef.current.value;
    if (!email) {
      setError("Please enter your email first.");
      return;
    }
    sendPasswordResetEmail(auth, email)
      .then(() => alert("Please check your email to reset password"))
      .catch((err) => setError(err.message));
  };

  return (
    <div className="max-w-[1400px] mx-auto flex justify-center items-center my-20">
      <div>
        <form onSubmit={handleLogin}>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 py-10">
            <div className="text-center font-bold text-blue-700 text-[30px]">Login</div>

            <label className="label">Email</label>
            <input
              type="email"
              className="input"
              name="email"
              ref={emailRef}
              placeholder="Email"
              required
            />

            <label className="label">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"} // 👈 toggle here
                className="input"
                name="password"
                placeholder="Password"
                required
              />
              <button
                onClick={handleTogglePassword}
                className=" absolute top-3 right-2"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            <button
              type="button"
              onClick={handleForgetPassword}
              className="text-left my-2 underline text-blue-500"
            >
              Forget Password?
            </button>

            <button type="submit" className="btn bg-blue-500 btn-neutral mt-4 w-full">
              Login
            </button>

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
            {success && (
              <p className="text-green-600 mt-2">You successfully logged in!</p>
            )}
            {error && <p className="text-red-500 mt-2">{error}</p>}
          </fieldset>
        </form>

        <p className="mt-4">
          New to our website?{" "}
          <Link to={"/register"} className="text-blue-500 underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
