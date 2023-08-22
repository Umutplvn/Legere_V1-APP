import { createSlice } from "@reduxjs/toolkit";

const blogDataSlice = createSlice({
  name: "blogs",
  initialState: {
    blogs: [],
    loading: false,
    error: false,
    likes:[]
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

    getLikeSuccess:(state, {payload})=>{
      state.likes=payload
    }
  },
});

export const { getDataSuccess, fetchStart, fetchFail, getLikeSuccess } = blogDataSlice.actions;

export default blogDataSlice.reducer;
