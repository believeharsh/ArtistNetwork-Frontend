import React from "react";
import Navbar from "../components/Navbar";
import { MainButton } from "../components/Buttons";

const Dashboard = () => {
  return (
    <div style={{
      display:'flex',
      flexDirection:'column',
      justifyContent:'space-between',
      height:'100vh',
      width:'100%'
  }}>
      <Navbar />
      <div className="dashboard-bg h-[100vh] text-center flex justify-center items-center px-4">
      <div className="content flex flex-col justify-center items-center">
        <div className="text-white text-xs md:text-xl tracking-widest mb-6">
          The People's Gallery
        </div>
        <div className="text-white w-2/3 font-semibold text-center md:text-3xl tracking-widest mb-8">
        The Art Gallery with it’s unique collection is among those who love art and museums that attracts a wide array of people.
        </div>
        <div className="space-x-4">
          <MainButton val="START EXPLORING" navigation="/gallery" />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Dashboard;
