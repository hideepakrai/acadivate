import { createSlice } from '@reduxjs/toolkit';
import { fetchDashboardStatsThunk } from './dashboardStatsThunk';

interface DashboardStatsState {
  stats: Record<string, number>;
  isLoading: boolean;
  error: string | null;
}

const initialState: DashboardStatsState = {
  stats: {},
  isLoading: false,
  error: null,
};

const dashboardStatsSlice = createSlice({
  name: 'dashboardStats',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDashboardStatsThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchDashboardStatsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.stats = action.payload;
      })
      .addCase(fetchDashboardStatsThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export default dashboardStatsSlice.reducer;
