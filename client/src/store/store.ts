import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';

import { baseApi } from './api/baseApi';
import userApi from './api/userApi';

import userSlice from './slice/userSlice';

const middlewareHandler = (getDefaultMiddleware: any) => {
  const middlewareList = [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST']
      }
    }),
    userApi.middleware
  ];

  if (process.env.NODE_ENV === 'development') {
    middlewareList.push(logger);
  }

  return middlewareList;
};

const authPersistConfig = {
  key: 'user',
  storage: storage,
  blacklist: ['usersList']
};

const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  user: userSlice
});

const persistedReducer = persistReducer(authPersistConfig, rootReducer);

export const rootStore = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => middlewareHandler(getDefaultMiddleware),
  devTools: true
});

export const persistor = persistStore(rootStore);
export type RootState = ReturnType<typeof rootStore.getState>;

setupListeners(rootStore.dispatch);
