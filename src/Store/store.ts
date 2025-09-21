import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice/appSlice";
import videoReducer from "./VideoSlice/VideoSlice";

export const store = configureStore({
  reducer: {
    app: appReducer,
    video: videoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;