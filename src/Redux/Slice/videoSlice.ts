
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { Imagemapping } from '../../Api/Data';
import { MenuOption, CategoryData } from '../../types';

interface VideoState {
  videoData: CategoryData;
  menuOptions: MenuOption[];
  loading: boolean;
}

// Initial menu options
const initialMenuOptions: MenuOption[] = [
  { id: 1, text: 'ALL', count: 0 },
  { id: 2, text: 'ASOKA', count: 0 },
];

// Async thunk to fetch videos
export const fetchVideos = createAsyncThunk<{ categoryData: CategoryData, newMenuOptions: MenuOption[] }>(
  'videos/fetchVideos',
  async () => {
    const categories = ['ALL', 'ASOKA'];
    const categoryData: CategoryData = {};
    const newMenuOptions: MenuOption[] = [...initialMenuOptions];

    await Promise.all(categories.map(async (category) => {
      let response;
      if (category === 'ALL') {
        response = await axios.get('https://swapi.dev/api/films/');
      } else {
        response = await axios.get(`https://swapi.dev/api/films/?search=${category}`);
      }

      const films = response.data.results;
      categoryData[category] = films.map((film: any) => ({
        id: film.episode_id,
        img: Imagemapping[film.episode_id] || 'default-image-path',
        text: film.title,
        time: `${Math.floor(Math.random() * 10) + 1}:59`,
      }));

      // Create a new array with updated count
      const updatedMenuOptions = newMenuOptions.map(option => 
        option.text === category
          ? { ...option, count: categoryData[category].length }
          : option
      );

      newMenuOptions.length = 0; // Clear original array
      newMenuOptions.push(...updatedMenuOptions); // Push updated items
    }));

    return { categoryData, newMenuOptions };
  }
);

// Initial state
const initialState: VideoState = {
  videoData: {},
  menuOptions: initialMenuOptions,
  loading: true,
};

// Slice for videos
const videoSlice = createSlice({
  name: 'videos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideos.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchVideos.fulfilled, (state, action: PayloadAction<{ categoryData: CategoryData, newMenuOptions: MenuOption[] }>) => {
        state.videoData = action.payload.categoryData;
        state.menuOptions = action.payload.newMenuOptions;
        state.loading = false;
      })
      .addCase(fetchVideos.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default videoSlice.reducer;
