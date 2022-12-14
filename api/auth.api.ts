import { createApi } from '@reduxjs/toolkit/query/react'

import { LoginFormValues } from 'forms/login';
import { SignupFormValues } from 'forms/signup';
import { baseQuery } from '.';

interface LoginReturnProps { 
    token: string;
};

interface SignupReturnProps { 
    token: string;
};

// Define a service using a base URL and expected endpoints
export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery,
    endpoints: (builder) => ({
        login: builder.mutation<LoginReturnProps, LoginFormValues>({
            query: (values) => ({
                url: 'login/',
                method: 'POST',
                body: { ...values },
            })
        }),
        signup: builder.mutation<SignupReturnProps, SignupFormValues>({
            query: (values) => ({
                url: 'signup/',
                method: 'POST',
                body: { ...values },
            }),
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useLoginMutation, useSignupMutation } = authApi

