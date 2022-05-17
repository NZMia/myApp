import { createSlice } from '@reduxjs/toolkit';
import { fetchUserAsync, fetchUserReposAsync } from './userSlice';

const isUserLoadingReducer = (state) => {
  state.loadingUserState = true;
};
const noneUesrLoadingReducer = (state) => {
  state.loadingUserState = false;
};

const isRepoLoadingReducer = (state) => {
  state.loadingRepoState = true;
};
const noneRepoLoadingReducer = (state) => {
  state.loadingRepoState = false;
};

export const loadingSlice = createSlice({
  name: 'loading',

  initialState: {
    loadingUserState: false,
    loadingRepoState: false
  },

  extraReducers: {
    [fetchUserAsync.pending]: isUserLoadingReducer,
    [fetchUserAsync.fulfilled]: noneUesrLoadingReducer,
    [fetchUserAsync.rejected]: noneUesrLoadingReducer,

    [fetchUserReposAsync.pending]: isRepoLoadingReducer,
    [fetchUserReposAsync.fulfilled]: noneRepoLoadingReducer,
    [fetchUserReposAsync.rejected]: noneRepoLoadingReducer
  }
});

export default loadingSlice.reducer;
