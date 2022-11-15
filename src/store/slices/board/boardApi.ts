import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { API_PATH } from '../../../constants/API_PATH';
import { URL } from '../../../constants/URL';

import { RootState } from '../../store';

export type ColumnType = {
  _id: string;
  title: string;
  order: number;
  boardId: string;
};

export type CreateColumnType = {
  title: string;
  id: string;
};

export type FoundedBoardType = {
  _id: string;
  title: string;
  owner: string;
  users: string[];
};

type DeleteColumnType = {
  boardId: string;
  columnId: string;
};

export const boardApi = createApi({
  reducerPath: 'boardApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${URL}`,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).user.token;

      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  tagTypes: ['Columns', 'Board'],
  endpoints: (build) => ({
    getBoardById: build.query<FoundedBoardType, string>({
      query: (id) => `${API_PATH.boards}/${id}`,
      providesTags: ['Board'],
    }),

    getColumnsInBoard: build.query<ColumnType[], string>({
      query: (id) => `${API_PATH.boards}/${id}/${API_PATH.columns}`,
      providesTags: (result) =>
        result
          ? [...result.map(({ _id }) => ({ type: 'Columns' as const, _id })), { type: 'Columns', id: 'LIST' }]
          : [{ type: 'Columns', id: 'LIST' }],
    }),

    createColumn: build.mutation<ColumnType, CreateColumnType>({
      query: (data) => ({
        url: `${API_PATH.boards}/${data.id}/${API_PATH.columns}`,
        method: 'POST',
        body: {
          title: data.title,
          order: 0,
        },
      }),
      invalidatesTags: ['Columns'],
    }),

    deleteColumn: build.mutation<ColumnType, DeleteColumnType>({
      query: (data) => ({
        url: `${API_PATH.boards}/${data.boardId}/${API_PATH.columns}/${data.columnId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Columns'],
    }),
  }),
});

export const { useGetBoardByIdQuery, useGetColumnsInBoardQuery, useCreateColumnMutation, useDeleteColumnMutation } =
  boardApi;
