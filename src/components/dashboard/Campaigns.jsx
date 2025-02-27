import React from "react";
import Image from "next/image";
import ad1 from "@/assets/images/ad1.png";
import ad2 from "@/assets/images/ad2.png";


const Campaigns = () => {
  return (
    <div>
      <div className="flex py-md gap-[2rem]">
        <div className="space-y-1 p-md rounded-lg bg-[#EEE1D9] w-1/3">
          <h6 className="text-blg font-bold text-ash border-b pb-xsm w-2/3 border-ash">Company Details</h6>
          <p className="text-xs text-ash font-normal">Name: Obina Studios </p>
          <p className="text-xs text-ash font-normal">Email: support@obueze.com </p>
          <p className="text-xs text-ash font-normal">Address: 34 rere Road </p>
          <p className="text-xs text-ash font-normal">Industry: Media and Entertainment </p>
        </div>
        <div className="w-2/3 p-md rounded-lg bg-[#EDE1D9]">
          <h6 className="text-blg font-bold text-ash border-b pb-xsm w-1/3 border-ash">Campaign Summary</h6>
          <div className="flex gap-[3.5rem] justify-center py-sm m-auto">
            <div className="py-md px-sm bg-white rounded-lg border-Fade ">
              <p className="text-xs text-ash font-normal">Total Campaigns</p>
              <h2 className="text-center py-sm text-xl font-bold text-ash">8, 784</h2>
            </div>
            <div className="py-md px-sm bg-white rounded-lg border-Fade ">
              <p className="text-xs text-ash font-normal">Active Campaigns</p>
              <h2 className="text-center py-sm text-xl font-bold text-ash">2, 035</h2>
            </div>
            <div className="py-md px-sm bg-white rounded-lg border-Fade ">
              <p className="text-xs text-ash font-normal">Avg. Scan Per Campaigns</p>
              <h2 className="text-center py-sm text-xl font-bold text-ash">2, 035</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-[2rem]">
        <div className="flex w-2/3 p-lg rounded-lg bg-[#EEE1D9]">
          <div className="flex gap-[1rem]">
            <div>
              <Image
                src={ad1}
                alt={"Image"}
                className="w-[90%] p-xsm  bg-white rounded-xl"
              />
              <h6 className="font-normal text-xs text-[#837F7F] text-center">Softa Drink</h6>
            </div>
            <div>
              <Image
                src={ad2}
                alt={"Image"}
                className="w-[90%] p-xsm  bg-white rounded-xl"
              />
              <h6 className="font-normal text-xs text-[#837F7F] text-center">Keke Fruit</h6>
            </div>
            <div>
              <Image
                src={ad1}
                alt={"Image"}
                className="w-[90%] p-xsm  bg-white rounded-xl"
              />
              <h6 className="font-normal text-xs text-[#837F7F] text-center">Compass Locate</h6>
            </div>
          </div>
          <div className="cursor-pointer">
            <h4>Create Campaign</h4>
          </div>
        </div>
        <div className="space-y-1 p-md rounded-lg bg-[#EEE1D9] w-1/3">
          <h6 className="text-blg font-bold text-ash border-b pb-xsm w-2/3 border-ash">Company Officer</h6>
          <p className="text-xs text-ash font-normal">Name: Obina Emeka Kalu </p>
          <p className="text-xs text-ash font-normal">Email: obinakalu@obueze.com </p>
          <p className="text-xs text-ash font-normal">Phone Number:+233544116083 </p>
          <p className="text-xs text-ash font-normal">Campaigns Created: 287 </p>
        </div>
      </div>
    </div>
  );
};

export default Campaigns;
