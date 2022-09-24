import { createApi } from '@reduxjs/toolkit/query/react'

import { baseQuery } from '.';

interface UserDetailsReturnProps {
    token: string;
};


// Define a service using a base URL and expected endpoints
export const userApi = createApi({
    reducerPath: 'authApi',
    baseQuery,
    endpoints: (builder) => ({
        userDetails: builder.query<UserDetailsReturnProps, undefined>({
            query: () => ({
                url: 'user/',
            })
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useUserDetailsQuery } = userApi

