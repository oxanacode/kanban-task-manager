import { createSlice } from '@reduxjs/toolkit';

export type ColumnType = {
  _id: string;
  title: string;
  order: number;
  boardId: string;
};

export type FoundedBoardType = {
  _id: string;
  title: string;
  owner: string;
  users: string[];
};

type BoardStateType = {
  isModalOpened: boolean;
};

const initialState: BoardStateType = {
  isModalOpened: false,
};

const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    openAddColumnModal(state) {
      state.isModalOpened = true;
    },
    closeAddColumnModal(state) {
      state.isModalOpened = false;
    },
  },
});

export const { openAddColumnModal, closeAddColumnModal } = boardSlice.actions;
export default boardSlice.reducer;
