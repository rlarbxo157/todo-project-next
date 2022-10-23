import { createApi } from '@reduxjs/toolkit/query/react';
import {baseQueryWithIntercept} from './baseQuery';

export const registerApi = createApi({
    reducerPath: 'registerApi',
    baseQuery: baseQueryWithIntercept,
    endpoints: (builder) => ({
      signup: builder.mutation({
          query: (body) => {
            console.log(body);
            return {
                url:`users/register`,
                method:'POST',
                body
            }
          },
          transformResponse: (response: any) => {
              console.log(response);
              return response;
          }
      }),
      signIn: builder.mutation({
        query: (body) => {
          return {
            url:`users/login`,
            method:'POST',
            body
          }
        }
      })

    })
})

export const { useSignupMutation, useSignInMutation } = registerApi;
