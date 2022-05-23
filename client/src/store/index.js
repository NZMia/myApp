import { configureStore } from '@reduxjs/toolkit';

import loadingSlice from './loadingSlice';
import userSlice from './userSlice';

export default configureStore({
  reducer: {
    loading: loadingSlice,
    user: userSlice
  }
});
