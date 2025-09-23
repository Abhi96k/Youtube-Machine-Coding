import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    isSideBarOpen: true,
  },
  reducers: {
    setIsSideBarOpen: (state, action) => {
      state.isSideBarOpen = action.payload;
    },
    closeSideBar: (state) => {
      state.isSideBarOpen = false;
    },
  },
});

export const { setIsSideBarOpen, closeSideBar } = appSlice.actions;
export default appSlice.reducer;