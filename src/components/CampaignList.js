import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampaigns } from "../redux/campaignSlice";
import { campaignData } from "../data/campaignData";
import "../styles/CampaignList.css";

const CampaignList = ({ filter }) => {
  const dispatch = useDispatch();
  const campaigns = useSelector((state) => state.campaigns.list);
  const status = useSelector((state) => state.campaigns.status);

  useEffect(() => {
    if (status === "idle") dispatch(fetchCampaigns());
  }, [status, dispatch]);

  const filteredCampaigns = campaigns.filter((campaign) => {
    if (filter.name && campaign.name !== filter.name) return false;
    if (filter.externalCode && campaign.externalCode !== filter.externalCode)
      return false;
    return true;
  });
  

  return (
    <div>
      <h2>Campaigns</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>External Code</th>
            <th>Description</th>
            <th>Last Modified Date</th>
          </tr>
        </thead>
        <tbody>
          {filteredCampaigns.map((campaign) => (
            <tr key={campaign.id}>
              <td>{campaign.name}</td>
              <td>{campaign.externalCode}</td>
              <td>{campaign.description}</td>
              <td>{campaign.lastModifiedDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CampaignList;
