// main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // আপনার CSS ফাইল
import { RouterProvider } from "react-router"; // <--- এখানে react-router-dom থেকে RouterProvider ইম্পোর্ট করুন
import { router } from "./Pages/Router";
import AuthProvider from "./AuthContext/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
