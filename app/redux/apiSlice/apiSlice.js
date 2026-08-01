import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiCall = createApi({
    reducerPath: 'apiCall',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://jsonplaceholder.typicode.com',
    }),
    endpoints: (builder) => ({})

});


