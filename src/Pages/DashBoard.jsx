import React, { useEffect } from "react";

const Dashboard = () => {

   useEffect(() => {
      document.title = "Dashboard | ToyStore";
    }, []);
  return (

    
    <div className="max-w-4xl mx-auto mt-10 p-8 bg-white shadow-lg rounded-xl">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <p>Welcome to your private dashboard! Here you can see your private info, stats, or tools.</p>
    </div>
  );
};

export default Dashboard;
