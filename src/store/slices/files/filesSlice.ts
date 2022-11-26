import { createSlice } from '@reduxjs/toolkit';

export type CoversType = {
  [key: string]: {
    path: string;
    coverId: string;
  };
};

type FileStateType = {
  isAddFileModalOpened: boolean;
  fileData: {
    boardId: string;
    taskId: string;
  };
  covers: CoversType;
};

const initialState: FileStateType = {
  isAddFileModalOpened: false,
  fileData: {
    boardId: '',
    taskId: '',
  },
  covers: {},
};

const filesSlice = createSlice({
  name: 'files',
  initialState,
  reducers: {
    openAddFileModal(state, { payload }) {
      state.isAddFileModalOpened = true;
      state.fileData = payload;
    },
    closeAddFileModal(state) {
      state.isAddFileModalOpened = false;
    },
    setCovers(state, { payload }) {
      state.covers = payload;
    },
  },
});

export const { openAddFileModal, closeAddFileModal, setCovers } = filesSlice.actions;
export default filesSlice.reducer;
