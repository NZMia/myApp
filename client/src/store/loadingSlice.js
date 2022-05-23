import { createSlice } from '@reduxjs/toolkit';
import { fetchUserAsync } from './userSlice';

export const loadingSlice = createSlice({
  name: 'loadingSlice',

  initialState: {
    userLoadingState: false
  },

  reducers: {
    toggleLoading(state) {
      state.userLoadingState = !state.userLoadingState;
    }
  },

  extraReducers: {
    [fetchUserAsync.pending]: (state) => {
      state.userLoadingState = true;
    },
    [fetchUserAsync.rejected]: (state) => {
      state.userLoadingState = true;
    },
    [fetchUserAsync.fulfilled]: (state) => {
      state.userLoadingState = false;
    }
  }
});

export default loadingSlice.reducer;
