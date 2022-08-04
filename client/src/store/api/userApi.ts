import { baseApi } from './baseApi';

export interface Credential {
  id?: number | null;
  email: string | null;
  name?: string | null;
  password: string | null;
}

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation<any, Credential>({
      query: (data: Credential) => ({
        url: '/auth/register',
        method: 'POST',
        body: data
      })
    }),

    login: builder.mutation<any, Credential>({
      query: (data: Credential) => ({
        url: '/auth/login',
        method: 'POST',
        body: data
      })
    }),

    logout: builder.mutation<void, void>({
      query: () => ({
        url: '/auth/logout',
        method: 'POST',
        body: {}
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
