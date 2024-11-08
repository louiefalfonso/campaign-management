import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampaigns } from "../../redux/campaignSlice.js";

const CampaignsList = ({ campaigns }) => {

  const dispatch = useDispatch();
  const campaignsList = useSelector((state) => state.campaigns.list);

  useEffect(() => {
    if (campaignsList.status === "idle") dispatch(fetchCampaigns());
  }, [campaignsList.status, dispatch]);


  return (
    <>
      <div className="flex flex-col gap-4 min-h-[calc(100vh-212px)]">
        <div className="p-5 bg-white border rounded border-black/10 dark:bg-darklight dark:border-darkborder">
          
          <div className="overflow-auto">
            <table className="min-w-[640px] w-full mt-4 table-striped">
              <thead>
                <tr className="ltr:text-left rtl:text-right">
                  <th>Name</th>
                  <th>External Code</th>
                  <th>Description</th>
                  <th>Last Modified Date</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {campaigns &&
                  campaigns.map((campaign) => (
                    <tr
                      key={campaign.id}
                      className="ltr:text-left rtl:text-right"
                    >
                      <td>{campaign.name}</td>
                      <td>{campaign.externalCode}</td>
                      <td>{campaign.description}</td>
                      <td>{campaign.lastModifiedDate}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      
    </>
  );
}

export default CampaignsList