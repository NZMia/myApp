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
    }),

    getUsersList: builder.query({
      query: () => '/auth/getUsers',
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
