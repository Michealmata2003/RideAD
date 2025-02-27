import React from "react";
import Slides from "./Slides";
import Campaigns from "./Campaigns";

const Dashboard = () => {
  return (
    <div className="bg-white p-md rounded-lg">
      <div>
        <Slides />
      </div>
      <Campaigns />
    </div>
  );
};

export default Dashboard;
