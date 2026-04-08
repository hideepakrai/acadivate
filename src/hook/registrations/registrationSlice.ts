import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RegistrationRecord } from './registrationType';
import {
  fetchRegistrationsThunk,
  createRegistrationThunk,
  updateRegistrationThunk,
  deleteRegistrationThunk,
} from './registrationThunk';

interface RegistrationState {
  allRegistration: RegistrationRecord[];
  isFetchedRegistration: boolean;
  isLoading: boolean;
  error: string | null;
}

const initialState: RegistrationState = {
  allRegistration: [],
  isFetchedRegistration: false,
  isLoading: false,
  error: null,
};

const registrationSlice = createSlice({
  name: 'registrations',
  initialState,
  reducers: {
    clearRegistrationError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch
      .addCase(fetchRegistrationsThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchRegistrationsThunk.fulfilled, (state, action: PayloadAction<RegistrationRecord[]>) => {
        state.isLoading = false;
        state.allRegistration = action.payload;
        state.isFetchedRegistration = true;
      })
      .addCase(fetchRegistrationsThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      // Create
      .addCase(createRegistrationThunk.fulfilled, (state, action: PayloadAction<RegistrationRecord>) => {
        state.allRegistration.unshift(action.payload);
      })
      // Update
      .addCase(updateRegistrationThunk.fulfilled, (state, action: PayloadAction<RegistrationRecord>) => {
        const index = state.allRegistration.findIndex((item) => item._id === action.payload._id);
        if (index !== -1) {
          state.allRegistration[index] = action.payload;
        }
      })
      // Delete
      .addCase(deleteRegistrationThunk.fulfilled, (state, action: PayloadAction<string>) => {
        state.allRegistration = state.allRegistration.filter((item) => item._id !== action.payload);
      });
  },
});

export const { clearRegistrationError } = registrationSlice.actions;
export default registrationSlice.reducer;
