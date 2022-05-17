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

export const userSlice = createSlice({
  name: 'user',

  initialState: {
    userInfo: {}
  },

  extraReducers: {
    [fetchUserAsync.fulfilled]: (state, { payload }) => {
      state.userInfo = payload;
    }
  }
});

export default userSlice.reducer;
