import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../server/axios';
import axios from 'axios';

export const fetchUserAsync = createAsyncThunk(
  'me/fetchUser',
  async (userInfo) => {
    try {
      const res = await api.post('/auth/login', userInfo);
      window.localStorage.setItem('token', res?.data?.token);
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

export const logoutUserAsync = createAsyncThunk('me/logoutUser', async () => {
  try {
    const res = await api.post('/auth/logout');
    return res.data;
  } catch (err) {
    console.info('err', err);
  }
});

const userSlice = createSlice({
  name: 'userSlice',

  initialState: {
    currentUser: {},
    loading: false
  },

  extraReducers: {
    [fetchUserAsync.pending]: (state, { payload }) => {
      state.currentUser = {};
      state.loading = true;
    },
    [fetchUserAsync.rejected]: (state, { payload }) => {
      state.currentUser = {};
      state.loading = false;
    },
    [fetchUserAsync.fulfilled]: (state, { payload }) => {
      state.currentUser = payload;
      state.loading = false;
    },

    [logoutUserAsync.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [logoutUserAsync.rejected]: (state, { payload }) => {
      state.loading = false;
    },
    [logoutUserAsync.fulfilled]: (state, { payload }) => {
      state.currentUser = {};
      state.loading = false;
    }
  }
});

export default userSlice.reducer;
