import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    authState: Cookies.get('authedJwt') || false
  },
  reducers: {
    authToggle(state) {
      state.authState = !state.authState;
    }
  }
});

export const { authToggle } = authSlice.actions;
export default authSlice.reducer;
