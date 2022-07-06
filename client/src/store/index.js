import { configureStore } from '@reduxjs/toolkit';

import userSlice from './userSlice';

const store = configureStore({
  reducer: {
    user: userSlice
  }
  // middleware: (getDefaultMiddleware) => {
  //   return getDefaultMiddleware().concat(axiosMiddleware)
  // }
});

export default store;
