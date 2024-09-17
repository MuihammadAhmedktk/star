// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';
// import { getImages, Videos } from '../../Api/Data';

// export const fetchLastNewsDetail = createAsyncThunk('lastNew/fetchLastNewsDetail', async () => {
//   const response = await axios.get('https://swapi.dev/api/films/');
//   const images = getImages();
//   const imagesLength = images.length;
//   return response.data.results.map((item, index) => ({
//     id: index + 1,
//     videoSrc: Videos(),
//     isVideo: true,
//     videoImg: images[index % imagesLength].img,
//     text: item.title,
//     link: '/#',
//     time: '0:14',
//   }));
// });

// const lastNewsSlice = createSlice({
//   name: 'lastNew',
//   initialState: {
//     data: [],
//     status: 'idle',
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchLastNewsDetail.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(fetchLastNewsDetail.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.data = action.payload.map(item => ({
//           ...item,
//           videoSrc: item.videoSrc || { url: Videos(), sources: [] } // Default value if missing
//         }));
//       })
//       .addCase(fetchLastNewsDetail.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message;
//       });
//   },
// });

// export default lastNewsSlice.reducer;
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { getImages, Videos } from '../../Api/Data';

// Define types for API response and the state
interface LastNewsItem {
  id: number;
  videoSrc: string | { url: string; sources: any[] }; // Allow either string or object for videoSrc
  isVideo: boolean;
  videoImg: string;
  text: string;
  link: string;
  time: string;
}

interface LastNewsState {
  data: LastNewsItem[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

// Initial state for lastNews
const initialState: LastNewsState = {
  data: [],
  status: 'idle',
  error: null,
};

// Thunk for fetching last news details
export const fetchLastNewsDetail = createAsyncThunk<LastNewsItem[]>(
  'lastNew/fetchLastNewsDetail',
  async () => {
    try {
      const response = await axios.get('https://swapi.dev/api/films/');
      const images = getImages();
      const imagesLength = images.length;

      return response.data.results.map((item: any, index: number) => ({
        id: index + 1,
        videoSrc: Videos(), // Provide video source
        isVideo: true, // Marks item as video
        videoImg: images[index % imagesLength].img, // Get cyclic image
        text: item.title, // Title from API
        link: '/#', // Default link
        time: '0:14', // Static time for demo
      }));
    } catch (error) {
      throw new Error('Failed to fetch last news detail.');
    }
  }
);

// Slice for lastNews
const lastNewsSlice = createSlice({
  name: 'lastNew',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLastNewsDetail.pending, (state) => {
        state.status = 'loading'; // Set loading status
      })
      .addCase(fetchLastNewsDetail.fulfilled, (state, action: PayloadAction<LastNewsItem[]>) => {
        state.status = 'succeeded'; // Mark as succeeded
        state.data = action.payload.map(item => ({
          ...item,
          videoSrc: item.videoSrc || { url: Videos(), sources: [] }, // Fallback for missing videoSrc
        }));
      })
      .addCase(fetchLastNewsDetail.rejected, (state, action) => {
        state.status = 'failed'; // Set failed status
        state.error = action.error.message || 'Something went wrong'; // Capture error message
      });
  },
});

export default lastNewsSlice.reducer;
