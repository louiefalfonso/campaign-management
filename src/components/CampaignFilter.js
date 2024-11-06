import React from "react";

const CampaignFilter = ({ setFilter }) => {
  const handleFilterChange = (e) => setFilter(e.target.value);

  return (
    <select onChange={handleFilterChange}>
      <option value="">All</option>
      <option value="Type1">Type1</option>
      <option value="Type2">Type2</option>
    </select>
  );
};

export default CampaignFilter;
