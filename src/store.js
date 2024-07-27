import { configureStore } from "@reduxjs/toolkit";
import lastNewsReducer from './component/LastNew/lastNewsSlice'

export const store = configureStore({
    reducer:{
        lastNews: lastNewsReducer,
    }
})