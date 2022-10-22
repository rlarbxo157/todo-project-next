import {BaseQueryFn, createApi, FetchArgs, fetchBaseQuery, FetchBaseQueryError} from '@reduxjs/toolkit/query/react';
import {baseQueryWithIntercept} from './baseQuery';

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: baseQueryWithIntercept,
    endpoints: (builder) => ({
      getUsers: builder.query({
          query: ({page,size}) => ({
              url:`user/users`,
              method:'GET',
              params: {
                  page,
                  size
              }
          }),
          transformResponse: (response: any) => {
              console.log(response);
              return response;
          }
      }),

      getUser: builder.query({
          query:(id) => ({
              url:`user/users/${id}`,
              method:'GET',
          })
      }),
    })
})

export const { useGetUsersQuery } = userApi;
