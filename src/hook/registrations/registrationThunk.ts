import { createAsyncThunk } from '@reduxjs/toolkit';

const API_URL = '/api/registrations';

export const fetchRegistrationsThunk = createAsyncThunk(
  'registrations/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      if (!data.success) throw new Error(data.error || 'Failed to fetch registrations');
      return data.items;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const createRegistrationThunk = createAsyncThunk(
  'registrations/create',
  async (payload: any, { rejectWithValue }) => {
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      if (!data.success) throw new Error(data.error || 'Failed to create registration');
      return data.item;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateRegistrationThunk = createAsyncThunk(
  'registrations/update',
  async (payload: any, { rejectWithValue }) => {
    try {
      const response = await fetch(API_URL, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      if (!data.success) throw new Error(data.error || 'Failed to update registration');
      return data.item;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteRegistrationThunk = createAsyncThunk(
  'registrations/delete',
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await fetch(`${API_URL}?id=${id}`, {
        method: 'DELETE',
      });
      const data = await response.json();
      if (!data.success) throw new Error(data.error || 'Failed to delete registration');
      return id;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
