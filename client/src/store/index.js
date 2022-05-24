import { configureStore } from '@reduxjs/toolkit';

import loadingSlice from './loadingSlice';
import userSlice from './userSlice';
import authSlice from './authSlice';

export default configureStore({
  reducer: {
    loading: loadingSlice,
    user: userSlice,
    auth: authSlice
  }
});
