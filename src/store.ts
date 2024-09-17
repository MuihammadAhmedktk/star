import { configureStore } from '@reduxjs/toolkit';
import videoReducer from './Redux/Slice/videoSlice';
import lastNewsReducer from './Redux/Slice/lastNewSlice';

const store = configureStore({
  reducer: {
    videos: videoReducer,
    lastNew: lastNewsReducer,
  },
});
// Define RootState and AppDispatch types based on the store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

