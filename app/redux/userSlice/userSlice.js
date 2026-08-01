import { apiCall } from "../apiSlice/apiSlice";


export const userApi = apiCall.injectEndpoints({
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: () => 'users',
            providesTags: ['users'],
        }),
    }),
});

export const { useGetUsersQuery } = userApi;
