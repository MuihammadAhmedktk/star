import { configureStore } from '@reduxjs/toolkit';
import videoReducer from './Redux/Slice/videoSlice';
import lastNewsReducer from './Redux/Slice/lastNewSlice';

const store = configureStore({
  reducer: {
    videos: videoReducer,
    lastNew: lastNewsReducer,
  },
});

export default store;
