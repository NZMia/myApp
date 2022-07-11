import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../server/axios';

export const digioThunk = createAsyncThunk('digIO/me', async (userInfo) => {
  try {
    const res = await api.get('/digio');
    return res.data;
  } catch (err) {
    console.info('err', err);
  }
});

const digioSlice = createSlice({
  name: 'digio',

  initialState: {
    digio: {},
    loading: false
  },

  extraReducers: {
    [digioThunk.pending]: (state, { payload }) => {
      state.digio = {};
      state.loading = true;
    },
    [digioThunk.rejected]: (state, { payload }) => {
      state.digio = {};
      state.loading = false;
    },
    [digioThunk.fulfilled]: (state, { payload }) => {
      state.digio = payload;
      state.loading = false;
    }
  }
});

export default digioSlice.reducer;
