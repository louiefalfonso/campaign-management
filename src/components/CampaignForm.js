import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCampaign } from "../redux/campaignSlice";

const CampaignForm = () => {
  const [campaign, setCampaign] = useState({
    name: "",
    type: "",
    startDate: "",
    endDate: "",
    status: "",
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCampaign((prevCampaign) => ({ ...prevCampaign, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCampaign(campaign));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" onChange={handleChange} />
      <input name="type" placeholder="Type" onChange={handleChange} />
      <input name="startDate" type="date" onChange={handleChange} />
      <input name="endDate" type="date" onChange={handleChange} />
      <input name="status" placeholder="Status" onChange={handleChange} />
      <button type="submit">Add Campaign</button>
    </form>
  );
};

export default CampaignForm;
