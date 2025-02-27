import Dashboard from "@/components/dashboard/Dashboard";
import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/sidebar/Sidebar";
import React from "react";

const page = () => {
  return (
    <div className="">
      <div className="w-full flex h-[100vh] bg-[#D0D7DB]">
        <div className="">
          <Sidebar />
        </div>
        <div className="w-full">
          <div className="w-full">
            <Navbar />
          </div>
          <div className="p-md">
            <Dashboard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

// #0A3D33
// #20948B,