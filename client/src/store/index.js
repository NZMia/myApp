import { configureStore } from '@reduxjs/toolkit';

import loadingSlice from './loadingSlice';
import userSlice from './userSlice';
import toggleSlice from './toggleSlice';

export default configureStore({
  reducer: {
    loading: loadingSlice,
    user: userSlice,
    toggle: toggleSlice
  }
});
