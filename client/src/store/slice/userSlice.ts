import { createSlice } from '@reduxjs/toolkit';
import { Credential } from '../api/userApi';

interface CreditialInitState {
  credential: Credential | null;
  usersList: Credential[];
  token?: Credential | null;
}

const initialState: CreditialInitState = {
  credential: null,
  usersList: [],
  token: null
};

const userSlice = createSlice({
  name: 'user',
  initialState,
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

// export const selectCurrentUser = (state) => state.user.user;
// export const selectCurrentToken = (state) => state.user.token;
