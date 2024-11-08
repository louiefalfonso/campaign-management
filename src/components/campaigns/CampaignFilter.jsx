import { useState } from "react";
//import { campaignData } from "../data/campaignData.js";

// eslint-disable-next-line react/prop-types
const CampaignFilter = ({ setFilter }) => {
  const [searchName, setSearchName] = useState("");
  const [searchCode, setSearchCode] = useState("");

  const handleSearchChange = (e) => {
    const { name, value } = e.target;
    if (name === "searchName") {
      setSearchName(value);
    } else if (name === "searchCode") {
      setSearchCode(value);
    }
    setFilter({ name: value, externalCode: searchCode });
  };

  const resetFilters = () => {
    setSearchName("");
    setSearchCode("");
    setFilter({ name: "", externalCode: "" });
  };


  return (
    <>
      <div className="p-5 bg-white mb-4 border rounded border-black/10 dark:bg-darklight dark:border-darkborder">
        <div className="flex items-center justify-between">
          <div className="flex gap-4">
            <input
              type="text"
              name="searchName"
              value={searchName}
              onChange={handleSearchChange}
              placeholder="Search Name"
              className="form-input w-48 p-2 pl-10 text-sm text-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
            />
          </div>
          <button
            onClick={resetFilters}
            className="ml-4 p-2 bg-blue-500 text-black rounded"
          >
            Reset Filters
          </button>
        </div>
      </div>
    </>
  );
};

export default CampaignFilter;
