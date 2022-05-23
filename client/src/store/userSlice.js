import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchUserAsync = createAsyncThunk(
  'my/fetchUser',
  async (userName) => {
    try {
      console.info('userName', userName);
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
