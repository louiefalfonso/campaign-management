import { useState, useEffect } from "react";
import { Provider } from "react-redux";
import store from "../../redux/store";

import CampaignList from "./CampaignsList";
import CampaignFilter from "./CampaignFilter";
import { campaignData } from "../data/campaignData.js";

const Campaign = () => {
    const [filter, setFilter] = useState({});
    const [filteredCampaigns, setFilteredCampaigns] = useState([]);

    useEffect(() => {
      if (campaignData && campaignData.items) {
        const filteredCampaigns = campaignData.items.filter((campaign) => {
          if (filter.name && campaign.name !== filter.name) return false;
          if (
            filter.externalCode &&
            campaign.externalCode !== filter.externalCode
          )
            return false;
          return true;
        });
        setFilteredCampaigns(filteredCampaigns);
      }
    }, [filter]);

  return (
    <Provider store={store}>
      <div>
        <CampaignFilter setFilter={setFilter} />
        {filteredCampaigns && <CampaignList campaigns={filteredCampaigns} />}
      </div>
    </Provider>
  );
}

export default Campaign