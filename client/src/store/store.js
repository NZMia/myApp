import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

import logger from 'redux-logger';

import { baseApi } from './api/baseApi';
import userApi from './api/userApi';

import userSlice from './slice/userSlice';

const middlewareHandler = (getDefaultMiddleware) => {
  const middlewareList = [...getDefaultMiddleware(), userApi.middleware];

  if (process.env.NODE_ENV === 'development') {
    middlewareList.push(logger);
  }

  return middlewareList;
};

export const rootStore = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    user: userSlice
  },
  middleware: (getDefaultMiddleware) => middlewareHandler(getDefaultMiddleware),
  devTools: true
});

setupListeners(rootStore.dispatch);
