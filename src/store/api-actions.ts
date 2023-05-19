import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import {
  AppDispatch,
  State
} from '../types/state';
import { AuthData } from '../types/auth-data';
import { addToChat, setError, setReceivingNotification, setUser } from './data/data';

export const fetchStateInstance = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchStateInstance',
  async (_arg, { dispatch, extra: api }) => {
    try {
      await api.get<any>(`/waInstance${_arg.idInstance}/getStateInstance/${_arg.apiTokenInstance}`);
      dispatch(setUser(_arg));
      dispatch(setError(false));
    } catch (error) {
      dispatch(setError(true));
      console.error(error);
    }
  },
);

export const sendMessage = createAsyncThunk<void, { idInstance: string, apiTokenInstance: string, message: string, tel: string }, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/sendMessage',
  async (_arg, { dispatch, extra: api }) => {
    try {
      const { data } = await api.post<any>(`/waInstance${_arg.idInstance}/sendMessage/${_arg.apiTokenInstance}`, {
        "chatId": _arg.tel,
        "message": _arg.message
      });
      console.log(data);
      dispatch(addToChat(_arg.message));
    } catch (error) {
      dispatch(setError(true));
      console.error(error);
    }
  },
);

export const refreshChat = createAsyncThunk<void, { idInstance: string, apiTokenInstance: string, tel: string }, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/refreshChat',
  async (_arg, { dispatch, extra: api }) => {
    try {
      dispatch(setReceivingNotification(true));
      const { data } = await api.get<any>(`/waInstance${_arg.idInstance}/receiveNotification/${_arg.apiTokenInstance}`);

      if (data && data.body.senderData?.chatId === _arg.tel && data.body.messageData.textMessageData.textMessage) {
        dispatch(addToChat(data.body.messageData.textMessageData.textMessage));
      }
      await api.delete<any>(`/waInstance${_arg.idInstance}/deleteNotification/${_arg.apiTokenInstance}/${data.receiptId}`);
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setReceivingNotification(false));
    }
  },
);

