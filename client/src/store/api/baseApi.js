import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Set up interceptors
const baseQuery = fetchBaseQuery({
  baseUrl: '/',
  prepareHeaders: (headers, { getState }) => {
    const token = getState().user.token;
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  }
});

// const baseQueryWithIntercept = async(args, api, extraOptions) => {
//   const result = await baseQuery(args, api, extraOptions);
//   const { data, error } = result;

//   if(error) {
//     const { status, data } = error;

//     console.log(status, 'http的状态码');
//     throw new Error((data as any)?.message);
//   }else {
//     api.dispatch(logOut())
//   }
// }

export const baseApi = createApi({
  baseQuery: baseQuery,
  reducerPath: 'baseApi',
  // keepUnusedDataFor: 2 * 60,
  endpoints: () => ({})
});
