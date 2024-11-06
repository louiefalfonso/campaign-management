import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampaigns, deleteCampaign } from "../redux/campaignSlice";

const CampaignList = () => {
  const dispatch = useDispatch();
  const campaigns = useSelector((state) => state.campaigns.list);
  const status = useSelector((state) => state.campaigns.status);

  useEffect(() => {
    if (status === "idle") dispatch(fetchCampaigns());
  }, [status, dispatch]);

  return (
    <div>
      <h2>Campaigns</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {campaigns.map((campaign) => (
            <tr key={campaign.id}>
              <td>{campaign.name}</td>
              <td>{campaign.type}</td>
              <td>{campaign.startDate}</td>
              <td>{campaign.endDate}</td>
              <td>{campaign.status}</td>
              <td>
                <button onClick={() => dispatch(deleteCampaign(campaign.id))}>
                  Delete
                </button>
                <button>Edit</button>
                
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CampaignList;
