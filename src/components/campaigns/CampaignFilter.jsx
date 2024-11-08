import React from "react";
import { campaignData } from "../data/campaignData.js";

const CampaignFilter = ({ setFilter}) => {

     const handleFilterChange = (e) => {
       const { name, value } = e.target;
       setFilter({ [name]: value });
     };


  return (
    <>
      <div className="p-5 bg-white mb-4 border rounded border-black/10 dark:bg-darklight dark:border-darkborder">
        <div className="flex items-center justify-between">
          <h2 className="font-bold">Filter Business Context List</h2>
          <div className="flex gap-4">
            <select
              onChange={handleFilterChange}
              name="name"
              className="form-input w-32 p-2 pl-10 text-sm text-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
            >
              w-1/4 p-2 pl-10 text-sm text-gray-700 rounded-lg
              focus:outline-none focus:ring-2 focus:ring-gray-600
              <option value="">Select Name</option>
              {campaignData.items.map((campaign) => (
                <option key={campaign.id} value={campaign.name}>
                  {campaign.name}
                </option>
              ))}
            </select>
            <select
              onChange={handleFilterChange}
              name="externalCode"
              className="form-input w-32 p-2 pl-10 text-sm text-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
            >
              <option value="">Select Code</option>
              {campaignData.items.map((campaign) => (
                <option key={campaign.id} value={campaign.externalCode}>
                  {campaign.externalCode}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </>
  );
}

export default CampaignFilter