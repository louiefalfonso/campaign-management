import React, { useState } from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";
import CampaignList from "./components/CampaignList";
import CampaignForm from "./components/CampaignForm";
import CampaignFilter from "./components/CampaignFilter";

const App = () => {
  const [filter, setFilter] = useState("");

  return (
    <Provider store={store}>
      <div>
        {/*<CampaignForm / >*/}

        <CampaignFilter setFilter={setFilter} />
        <CampaignList filter={filter} />
      </div>
    </Provider>
  );
};

export default App;
