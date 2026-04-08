import { createAsyncThunk } from '@reduxjs/toolkit';
import type { SliderCreateInput, SliderRecord, SliderUpdateInput } from './sliderType';

const API_URL = '/api/sliders';

type ApiResponse<T> = {
  success?: boolean;
  items?: T[];
  item?: T;
  deletedId?: string;
  error?: string;
  message?: string;
};

async function parseResponse<T>(response: Response, fallbackMessage: string): Promise<T> {
  const data = (await response.json().catch(() => null)) as ApiResponse<T> | null;

  if (!response.ok) {
    throw new Error(data?.error || data?.message || fallbackMessage);
  }

  return data as T;
}

export const fetchSlidersThunk = createAsyncThunk<
  SliderRecord[],
  void,
  { rejectValue: string }
>('sliders/fetchAll', async (_, { rejectWithValue }) => {
  try {
    const response = await fetch(API_URL);
    const data = await parseResponse<{ items?: SliderRecord[] }>(
      response,
      'Failed to fetch sliders'
    );

    return data.items ?? [];
  } catch (error) {
    return rejectWithValue(error instanceof Error ? error.message : 'Failed to fetch sliders');
  }
});

export const createSliderThunk = createAsyncThunk<
  SliderRecord,
  SliderCreateInput,
  { rejectValue: string }
>('sliders/create', async (payload, { rejectWithValue }) => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const data = await parseResponse<{ item?: SliderRecord }>(
      response,
      'Failed to create slider'
    );

    if (!data.item) throw new Error('Unable to create slider');
    return data.item;
  } catch (error) {
    return rejectWithValue(error instanceof Error ? error.message : 'Failed to create slider');
  }
});

export const updateSliderThunk = createAsyncThunk<
  SliderRecord,
  SliderUpdateInput,
  { rejectValue: string }
>('sliders/update', async (payload, { rejectWithValue }) => {
  try {
    const response = await fetch(API_URL, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const data = await parseResponse<{ item?: SliderRecord }>(
      response,
      'Failed to update slider'
    );

    if (!data.item) throw new Error('Unable to update slider');
    return data.item;
  } catch (error) {
    return rejectWithValue(error instanceof Error ? error.message : 'Failed to update slider');
  }
});

export const deleteSliderThunk = createAsyncThunk<
  string,
  string,
  { rejectValue: string }
>('sliders/delete', async (id, { rejectWithValue }) => {
  try {
    const response = await fetch(`${API_URL}?id=${encodeURIComponent(id)}`, {
      method: 'DELETE',
    });

    const data = await parseResponse<{ deletedId?: string }>(
      response,
      'Failed to delete slider'
    );

    return data.deletedId ?? id;
  } catch (error) {
    return rejectWithValue(error instanceof Error ? error.message : 'Failed to delete slider');
  }
});
