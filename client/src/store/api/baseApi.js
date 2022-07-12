import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

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
  const result = await baseQuery(args, api, extraOptions);
  const { data } = result;
  console.info('result', result);

  if (result?.error?.status === 403) {
    const { status, data } = error;

    console.log(status, 'http的状态码');
    // throw new Error();
  }
  // else {
  //   // api.dispatch(logOut())
  // }
  return result;
};

export const baseApi = createApi({
  baseQuery: baseQueryWithIntercept,
  reducerPath: 'baseApi',
  endpoints: () => ({})
});
