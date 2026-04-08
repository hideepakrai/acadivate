import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { SliderRecord } from './sliderType';
import {
  createSliderThunk,
  deleteSliderThunk,
  fetchSlidersThunk,
  updateSliderThunk,
} from './sliderThunk';

export interface SliderState {
  allSlider: SliderRecord[];
  isFetchedSlider: boolean;
  isLoading: boolean;
  error: string | null;
}

const initialState: SliderState = {
  allSlider: [],
  isFetchedSlider: false,
  isLoading: false,
  error: null,
};

export const sliderSlice = createSlice({
  name: 'sliders',
  initialState,
  reducers: {
    resetSliderState: (state) => {
      state.allSlider = [];
      state.isFetchedSlider = false;
      state.isLoading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSlidersThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchSlidersThunk.fulfilled, (state, action) => {
        state.allSlider = action.payload;
        state.isFetchedSlider = true;
        state.isLoading = false;
      })
      .addCase(fetchSlidersThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || 'Failed to fetch sliders';
      })
      .addCase(createSliderThunk.fulfilled, (state, action) => {
        state.allSlider = [action.payload, ...state.allSlider];
        state.isLoading = false;
      })
      .addCase(updateSliderThunk.fulfilled, (state, action) => {
        state.allSlider = state.allSlider.map((item) =>
          item._id === action.payload._id ? action.payload : item
        );
        state.isLoading = false;
      })
      .addCase(deleteSliderThunk.fulfilled, (state, action) => {
        state.allSlider = state.allSlider.filter((item) => item._id !== action.payload);
        state.isLoading = false;
      });
  },
});

export const { resetSliderState } = sliderSlice.actions;
export default sliderSlice.reducer;
