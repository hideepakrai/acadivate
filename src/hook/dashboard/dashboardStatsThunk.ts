import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchDashboardStatsThunk = createAsyncThunk(
  'dashboard/fetchStats',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('/api/dashboard/stats');
      const data = await response.json();
      
      if (!response.ok || !data.success) {
        return rejectWithValue(data.error || 'Failed to fetch dashboard stats');
      }
      
      return data.stats;
    } catch (error: any) {
      return rejectWithValue(error.message || 'An error occurred');
    }
  }
);
