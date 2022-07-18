import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',

  initialState: {
    credential: null,
    usersList: [],
    token: null
  },

  reducers: {
    setCredital: (state, action) => {
      const { user, token } = action.payload;

      (state.credential = user), (state.token = token);
    },

    setUsersList: (state, action) => {
      const { users } = action.payload;
      state.usersList = users;
    },

    setLogout: (state, action) => {
      state.credential = null;
      state.token = null;
    }
  }
});

export const { setCredital, setLogout, setUsersList } = userSlice.actions;

export default userSlice.reducer;

export const selectCurrentUser = (state) => state.user.user;
export const selectCurrentToken = (state) => state.user.token;
