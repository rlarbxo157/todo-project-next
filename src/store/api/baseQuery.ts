import {BaseQueryFn, createApi, FetchArgs, fetchBaseQuery, FetchBaseQueryError} from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:8000/',
    prepareHeaders: (headers, {getState}) => {
        const accessToken = window.localStorage.getItem("accessToken");
        if(accessToken) {
            headers.set('Authorization',`Bearer_${accessToken}`)
        }
        return headers;
    },
});

export const baseQueryWithIntercept: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
    args,
    api,
    extraOptions,
) => {
    let result = await baseQuery(args, api, extraOptions);
    return result;
};
