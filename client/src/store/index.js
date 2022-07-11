import { configureStore } from '@reduxjs/toolkit';

import userSlice from './userSlice';
import digioSlice from './digioSlice';

const store = configureStore({
  reducer: {
    user: userSlice,
    digio: digioSlice
  }
  // middleware: (getDefaultMiddleware) => {
  //   return getDefaultMiddleware().concat(axiosMiddleware)
  // }
});

export default store;
