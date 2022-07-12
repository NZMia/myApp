import { baseApi } from './baseApi';

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (credentials) => ({
        url: '/auth/register',
        method: 'POST',
        body: { ...credentials }
      })
    }),

    login: builder.mutation({
      query: (credentials) => ({
        url: '/auth/login',
        method: 'POST',
        body: { ...credentials }
      })
    }),

    logout: builder.mutation({
      query: (credentials) => ({
        url: '/auth/logout',
        method: 'POST',
        body: { ...credentials }
      })
    })
  })
});

export const { useRegisterMutation, useLoginMutation, useLogoutMutation } =
  userApi;

export default userApi;
