import React from "react";
import { campaignData } from "../data/campaignData";
import "../styles/CampaignFilter.css";

const CampaignFilter = ({ setFilter, applyFilter }) => {
  
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter({ [name]: value });
    
  };
  return (
    <>
      <select onChange={handleFilterChange} name="name">
        <option value="">Select Name</option>
        {campaignData.items.map((campaign) => (
          <option key={campaign.id} value={campaign.name}>
            {campaign.name}
          </option>
        ))}
      </select>
      <select onChange={handleFilterChange} name="externalCode">
        <option value="">Select External Code</option>
        {campaignData.items.map((campaign) => (
          <option key={campaign.id} value={campaign.externalCode}>
            {campaign.externalCode}
          </option>
        ))}
      </select>
      <button onClick={applyFilter}>Apply Filter</button>
    </>
  );
};

export default CampaignFilter;
