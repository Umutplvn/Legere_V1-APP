import { createSlice } from "@reduxjs/toolkit";

const blogDataSlice = createSlice({
  name: "blogs",
  initialState: {
    blogs: [],
    loading: false,
    error: false,
    likes:[], 
    comments:[],
    categories:[],
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
      state[payload.url]= payload.data;
    },

    postDataSuccess: (state, {payload}) => {
      state.loading = false;
      state.error = true;
      state[payload.url]= payload.data;
    },

  
    getDataLikeSuccess:(state, {payload})=>{
      state.loading = false;
      state.likes=payload[0]
      state.blogs=payload[1]
      state.comments=payload[2]
    },



  }
}
)


export const { getDataSuccess, fetchStart, fetchFail, getDataLikeSuccess, postDataSuccess } = blogDataSlice.actions;

export default blogDataSlice.reducer;
