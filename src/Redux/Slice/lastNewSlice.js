import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { getImages, Videos } from '../../Api/Data';

export const fetchLastNewsDetail = createAsyncThunk('lastNew/fetchLastNewsDetail', async () => {
  const response = await axios.get('https://swapi.dev/api/films/');
  const images = getImages();
  const imagesLength = images.length;
  return response.data.results.map((item, index) => ({
    id: index + 1,
    videoSrc: Videos(),
    isVideo: true,
    videoImg: images[index % imagesLength].img,
    text: item.title,
    link: '/#',
    time: '0:14',
  }));
});

const lastNewsSlice = createSlice({
  name: 'lastNew',
  initialState: {
    data: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLastNewsDetail.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchLastNewsDetail.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchLastNewsDetail.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default lastNewsSlice.reducer;
