import { createSlice } from "@reduxjs/toolkit";
import { FilesState } from "./fileType";
import { fetchFilesByNominationIdThunk, fetchAllFilesThunk } from "./fileThunk";

const initialState: FilesState = {
  items: [],
  loading: false,
  error: null,
};

const fileSlice = createSlice({
  name: "files",
  initialState,
  reducers: {
    clearFiles: (state) => {
      state.items = [];
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilesByNominationIdThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFilesByNominationIdThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchFilesByNominationIdThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(fetchAllFilesThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllFilesThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchAllFilesThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearFiles } = fileSlice.actions;
export default fileSlice.reducer;
