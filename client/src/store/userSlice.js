import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../utils/http';

export const fetchUserAsync = createAsyncThunk(
  'me/fetchUser',
  async (userName) => {
    try {
      const res = await api.post('/auth/login');
      return res.data;
    } catch (err) {
      console.info('err', err);
    }
  }
);

export const createUserAsync = createAsyncThunk(
  'me/createUser',
  async (userInfo) => {
    try {
      const res = await api.post('/auth/register', userInfo);
      return res.data;
    } catch (err) {
      console.info('err', err);
    }
  }
);

const userSlice = createSlice({
  name: 'userSlice',

  initialState: {
    user: {}
  },

  extraReducers: {
    [fetchUserAsync.fulfilled]: (state, { payload }) => {
      state.user = payload;
    },
    [createUserAsync.fulfilled]: (state, { payload }) => {
      state.user = payload;
    }
  }
});

export default userSlice.reducer;
