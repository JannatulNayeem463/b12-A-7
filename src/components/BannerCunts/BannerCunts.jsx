import React, { useEffect, useState } from 'react';
const BannerCunts = ({ bannerPromies , inProgressCount , resolvedCount }) => {
  const [bannerData, setBannerData] = useState([]);
 

  useEffect(() => {
    bannerPromies.then(data => {
      setBannerData(data);
      console.log("Fetched Banner Data:", data);
    }).catch(err => {
      console.error("Error fetching banner data:", err);
    });
  }, [bannerPromies]);

  return (
    <div className=" flex items-center  gap-5 max-w-[1000px] mx-auto">
       
      <div className="card bg-gradient-to-r from-[#632ee3] to-[#9f62f2]  text-white w-200 h-50 mt-5 items-center  text-center  " >
  <div className="card-body text-2xl  font-bold   ">
    <h2 className="card-title justify-center text-2xl ">In-Progress</h2>
    <h2 className="card-p text-2xl  ">{inProgressCount}</h2>
   
  </div>
  </div>

<div className="card bg-gradient-to-r from-[#54cf68] to-[#00827a] text-white w-200 h-50 mt-5  items-center text-center  ">
  <div className="card-body   text-2xl font-bold   ">
    <h2 className="card-title justify-center text-2xl ">Resolved</h2>
    <h2 className="card-p text-2xl  ">0{resolvedCount}</h2>
   
     </div>
    </div>
 </div>
  );
};

export default BannerCunts;
