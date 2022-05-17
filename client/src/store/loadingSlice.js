import { createSlice } from '@reduxjs/toolkit';
import { fetchUserAsync } from './userSlice';

const isLoadingReducer = (state) => {
  state.loadingState = true;
};
const noneLoadingReducer = (state) => {
  state.loadingState = false;
};

export const loadingSlice = createSlice({
  name: 'loading',

  initialState: {
    loadingState: false
  },

  extraReducers: {
    [fetchUserAsync.pending]: isLoadingReducer,
    [fetchUserAsync.fulfilled]: noneLoadingReducer,
    [fetchUserAsync.rejected]: noneLoadingReducer
  }
});

export default loadingSlice.reducer;
