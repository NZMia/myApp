import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    authState: false
  },
  reducers: {
    authReducer(state) {
      state.authState = !state.authState;
    }
  }
});

export const { authReducer } = authSlice.actions;
export default authSlice.reducer;
