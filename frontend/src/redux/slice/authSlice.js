import { createSlice } from "@reduxjs/toolkit";
//!INITIAL STATE
const authSlice = createSlice({
  name: "auth", //unique for each slice of the application
  initialState: {
    //represent initial state of the application
    user: JSON.parse(localStorage.getItem("userInfo")) || null,
  },
  //REDUCERS
  reducers: {
    //loginaction reducer function
    //?Reducer functions define how the state should change in response to dispatched actions?//
    loginAction: (state, action) => {
      state.user = action.payload;
      //?payload is the data fetched by the reactquery if data is fetched then state of the user will be uodated with the fecthed data i.e payload
    },
    //logoutaction reducer funxtion
    logoutAction: (state, action) => {
      state.user = null;
      //?if a user is loggingout we will make it null
    },
  },
});
//!GENERATE ACTIONS
export const { loginAction, logoutAction } = authSlice.actions;
//!GENERATE REDUCERS
const authReducer = authSlice.reducer;
export default authReducer;
