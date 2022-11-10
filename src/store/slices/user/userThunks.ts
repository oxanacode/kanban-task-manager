import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { API_PATH } from '../../../constants/API_PATH';
import { URL } from '../../../constants/URL';
import { RootState } from '../../store';

export interface ICreateUser {
  name: string;
  login: string;
  password: string;
}

export interface ICreateUserResponse {
  name: string;
  login: string;
  _id: string;
}

export interface ITokenData {
  token: string;
}

export const registerUser = createAsyncThunk<ICreateUserResponse, ICreateUser, { rejectValue: string }>(
  'user/registerUser',
  async (values, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${URL}${API_PATH.signUp}`, { ...values });
      return response.data as ICreateUserResponse;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data as string);
      }
      throw error;
    }
  }
);

export const authUser = createAsyncThunk<ITokenData, Omit<ICreateUser, 'name'>, { rejectValue: string }>(
  'user/authUser',
  async (values, { rejectWithValue }) => {
    try {
      const token = await axios.post(`${URL}${API_PATH.signIn}`, { ...values });
      return token.data as ITokenData;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data as string);
      }
      throw error;
    }
  }
);

interface IUserInfo {
  _id: string;
  name: string;
  login: string;
}

export const getUsers = createAsyncThunk<IUserInfo[], null>('user/getUsers', async (_, { getState }) => {
  const state: RootState = <RootState>getState();
  const token = state.user.token;
  const res = await axios.get(`${URL}${API_PATH.users}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  return res.data;
});
