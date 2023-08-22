import { createSlice } from "@reduxjs/toolkit";

const blogDataSlice = createSlice({
  name: "blogs",
  initialState: {
    blogs: [],
    loading: false,
    error: false,
  },

  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },

    getDataSuccess: (state, {payload}) => {
      state.loading = false;
      state[payload.url]= payload?.data;
    },
  },
});

export const { getDataSuccess, fetchStart, fetchFail } = blogDataSlice.actions;

export default blogDataSlice.reducer;
