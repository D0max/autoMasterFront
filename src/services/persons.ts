// @ts-nocheck
import { createApi } from "@reduxjs/toolkit/query/react";
import axios from "../api/";


export const personApi = createApi({
  reducerPath: 'personApi',
  baseQuery: axios,
  tagTypes: ['Person'],
  endpoints: (build) => ({
    getPersonInfo: build.query({
      query: () => `/personal/`
    }),
    updatePerson: build.mutation({
      query: ({id, ...rest}) => {
        return {
          url: axios.put(`/personal/${id}`, rest)
        }
      },
      invalidatesTags: ['Person']
    })
  })
})

export const { useGetPersonInfoQuery, useUpdatePersonMutation } = personApi
