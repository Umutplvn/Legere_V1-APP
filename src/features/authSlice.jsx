import { createSlice } from '@reduxjs/toolkit'



export const authSlice = createSlice({
  name: 'auth',

  initialState: {
    loading:false,
    error:false,
    currentUser:null,
    token:null,
    id:null,
  },




  reducers: {
    fetchStart: (state)=> {
      state.loading=true;
      state.error = false;

   },
   fetchFail: (state)=> {
    state.loading=false;
    state.error = true;

 },
   loginSuccess: (state, {payload})=>{
    state.loading=false;
    state.error=false;
    state.currentUser=payload?.user?.username;
    state.token=payload?.key;
    state.id=payload?.user?.id
   },
   logoutSuccess: (state)=>{
    state.loading=false;
    state.error=false;  
    state.currentUser=null;
    state.token=null;
    state.id=null;
  },

   registerSuccess: (state, {payload})=>{
    state.loading=false;
    state.error=false;
    state.currentUser=payload?.username;
    state.token=payload?.token;
    state.id=payload?.id
   } 
  }
})

export const {fetchStart, fetchFail, loginSuccess, logoutSuccess, registerSuccess} = authSlice.actions

export default authSlice.reducer