import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../http';

export const fetchUserAsync = createAsyncThunk(
  'github/fetchUser',
  async (userName) => {
    try {
      const res = await api.get(`/${userName}`);
      return res.data;
    } catch (err) {
      const res = err.response;
      return res.data.message;
    }
  }
);

export const fetchUserReposAsync = createAsyncThunk(
  'github/fetchUserRepos',
  async (userName) => {
    try {
      const res = await api.get(`/${userName}/repos`);
      res.data.sort((frist, second) => {
        if (frist.created_at < second.created_at) {
          return 1;
        }
        if (frist.created_at > second.created_at) {
          return -1;
        }
        return 0;
      });

      return res.data.slice(0, 4);
    } catch (err) {
      throw Error(err.message);
    }
  }
);
export const userSlice = createSlice({
  name: 'user',

  initialState: {
    userInfo: {},
    userRepos: []
  },

  extraReducers: {
    [fetchUserAsync.fulfilled]: (state, { payload }) => {
      state.userInfo = payload;
    },
    [fetchUserReposAsync.fulfilled]: (state, { payload }) => {
      state.userRepos = payload;
    }
  }
});

export default userSlice.reducer;
