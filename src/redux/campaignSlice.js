import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../services/api";

export const fetchCampaigns = createAsyncThunk(
  "campaigns/fetchCampaigns",
  async () => {
    const response = await api.get("/campaigns");
    return response.data;
  }
);

const campaignSlice = createSlice({
  name: "campaigns",
  initialState: { list: [], status: "idle", error: null },
  reducers: {
    addCampaign: (state, action) => {
      state.list.push(action.payload);
    },
    updateCampaign: (state, action) => {
      const index = state.list.findIndex((c) => c.id === action.payload.id);
      if (index >= 0) state.list[index] = action.payload;
    },
    deleteCampaign: (state, action) => {
      state.list = state.list.filter((c) => c.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampaigns.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCampaigns.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.list = action.payload;
      })
      .addCase(fetchCampaigns.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { addCampaign, updateCampaign, deleteCampaign } =
  campaignSlice.actions;
export default campaignSlice.reducer;
