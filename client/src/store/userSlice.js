import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../utils/http';

export const fetchUserAsync = createAsyncThunk(
  'my/fetchUser',
  async (userName) => {
    try {
      const res = await api.post('/auth/login');
      console.info('res', res);

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
    }
  }
});

export default userSlice.reducer;
