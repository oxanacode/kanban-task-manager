import { createSlice } from '@reduxjs/toolkit';

import { authUser, registerUser } from './userThunks';

import { LocalStorageKeys } from '../../../types/LocalStorageKeys';
import { getValueLocalStorage } from '../../../utils/getValueLocalStorage';
import { setValueLocalStorage } from '../../../utils/setValueLocalStorage';

export interface IInitialState {
  id: string;
  userName: string;
  login: string;
  token: string;
}

const initialState: IInitialState = {
  id: getValueLocalStorage(LocalStorageKeys.userId),
  userName: '',
  login: '',
  token: getValueLocalStorage(LocalStorageKeys.token),
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setId(state, { payload }) {
      state.id = payload;
    },
    setLogin(state, { payload }) {
      state.login = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, () => {
        console.log('pending');
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        setValueLocalStorage(LocalStorageKeys.userId, payload._id);
        state.id = payload._id;
        state.login = payload.login;
        state.userName = payload.name;
      })
      .addCase(registerUser.rejected, () => {
        console.log('rejected');
      });

    builder
      .addCase(authUser.pending, () => {
        console.log('pending');
      })
      .addCase(authUser.fulfilled, (state, { payload }) => {
        setValueLocalStorage(LocalStorageKeys.token, payload.token);
        state.token = payload.token;
      })
      .addCase(authUser.rejected, () => {
        console.log('rejected');
      });
  },
});

export const { setId, setLogin } = userSlice.actions;
export default userSlice.reducer;
