import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

import { baseApi } from './api/baseApi';
import userApi from './api/userApi';

import userSlice from './slice/userSlice';

const middlewareHandler = () => {
  const middlewareList = [userApi.middleware];

  return middlewareList;
};

export const rootStore = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    user: userSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
  devTools: true
});

setupListeners(rootStore.dispatch);
