import {
  BaseQueryFn,
  FetchArgs,
  createApi,
  fetchBaseQuery,
  FetchBaseQueryError,
  FetchBaseQueryMeta
} from '@reduxjs/toolkit/query/react';
import { QueryReturnValue } from '@reduxjs/toolkit/dist/query/baseQueryTypes';
import { setCredital, setLogout } from '../slice/userSlice';
import type { RootState } from '../store';

// Set up interceptors
const baseQuery = fetchBaseQuery({
  baseUrl: '/',
  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    const currentState = getState() as RootState;
    const token = currentState.user.token;

    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  }
});

const baseQueryWithIntercept: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result: QueryReturnValue<any, FetchBaseQueryError, FetchBaseQueryMeta> =
    await baseQuery(args, api, extraOptions);

  if (result?.error?.status === 403) {
    console.log('sending refresh token');

    const getRefreshToken = await baseQuery('auth/refresh', api, extraOptions);

    if (getRefreshToken?.data) {
      const { data } = getRefreshToken;
      const credential = (api.getState() as RootState).user.credential;

      api.dispatch(
        setCredital({
          user: credential,
          data
        })
      );

      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(setLogout({}));
    }
  }
  return result;
};

export const baseApi = createApi({
  baseQuery: baseQueryWithIntercept,
  reducerPath: 'baseApi',
  endpoints: () => ({})
});
