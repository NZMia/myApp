import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setCredital, setLogout } from '../slice/userSlice';

// Set up interceptors
const baseQuery = fetchBaseQuery({
  baseUrl: '/',
  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    const token = getState().user.token;

    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  }
});

const baseQueryWithIntercept = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status === 403) {
    console.log('sending refresh token');

    const getRefreshToken = await baseQuery('auth/refresh', api, extraOptions);

    if (getRefreshToken?.data) {
      const credential = api.getState().user.credential;
      console.info('credential', credential);

      api.dispatch(
        setCredital({
          user: credential,
          ...getRefreshToken?.data
        })
      );

      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(setLogout());
    }
  }
  return result;
};

export const baseApi = createApi({
  baseQuery: baseQueryWithIntercept,
  reducerPath: 'baseApi',
  endpoints: () => ({})
});
