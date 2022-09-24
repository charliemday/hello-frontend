import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query";
import { BASE_URL } from "config";
import { RootState } from "store/store";

export const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token

    // If we have a token set in state, let's assume that we should be passing it.
    if (token) {
      headers.set('Authorization', `Bearer ${token}`)
    }

    console.log('Headers', headers);

    return headers
  },
});
