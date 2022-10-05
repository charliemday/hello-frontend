import { camelizeKeys } from "humps";
import { ConvertToSnakeCase, User } from "types";

import { baseApi, TAG_TYPES } from ".";

type UserDetailsReturnProps = ConvertToSnakeCase<User>;

// Define a service using a base URL and expected endpoints
export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    userDetails: builder.query<User, undefined>({
      query: () => ({
        url: "user/",
      }),
      providesTags: [TAG_TYPES.USERS],
      transformResponse: (response: UserDetailsReturnProps) =>
        camelizeKeys(response) as User,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useUserDetailsQuery } = userApi;
