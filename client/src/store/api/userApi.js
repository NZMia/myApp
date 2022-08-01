import { baseApi } from './baseApi';

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (credentials) => ({
        url: '/api/auth/register',
        method: 'POST',
        body: { ...credentials }
      })
    }),

    login: builder.mutation({
      query: (credentials) => ({
        url: '/api/auth/login',
        method: 'POST',
        body: { ...credentials }
      })
    }),

    logout: builder.mutation({
      query: (credentials) => ({
        url: '/api/auth/logout',
        method: 'POST',
        body: { ...credentials }
      })
    }),

    getUsersList: builder.query({
      query: () => '/api/auth/getUsers',
      transformResponse: (response) => {
        return response;
      }
    })
  })
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useLogoutMutation,
  useGetUsersListQuery,
  useLazyGetUsersListQuery
} = userApi;

export default userApi;
