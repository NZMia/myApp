import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',

  initialState: {
    credential: null,
    token: null
  },

  reducers: {
    setCredital: (state, action) => {
      const { user, token } = action.payload;

      (state.credential = user), (state.token = token);
    },

    setLogout: (state, action) => {
      state.user = null;
      state.token = null;
    }
  }
});

export const { setCredital, setLogout } = userSlice.actions;

export default userSlice.reducer;

export const selectCurrentUser = (state) => state.user.user;
export const selectCurrentToken = (state) => state.user.token;
