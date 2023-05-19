import { createSlice } from '@reduxjs/toolkit';
import {
  NameSpace,
} from '../../const';
import { Data } from '../../types/state';

const initialState: Data = {
  user: null,
  error: false,
  tel: null,
  chat: [],
  notificationIsReceiving: false,
};

export const data = createSlice({
  name: NameSpace.data,
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setTel: (state, action) => {
      state.tel = action.payload;
    },
    addToChat: (state, action) => {
      state.chat = [...state.chat, action.payload];
    },
    setReceivingNotification: (state, action) => {
      state.notificationIsReceiving = action.payload;
    },
  },
});

export const { setUser, setError, setTel, addToChat, setReceivingNotification } = data.actions;
