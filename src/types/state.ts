import { AuthorizationStatus } from '../const.js';
import { store } from '../store/index.js';
import { AuthData } from './auth-data.js';

export type Data = {
  user: AuthData | null,
  error: boolean,
  tel: string | null,
  chat: string[],
  notificationIsReceiving: boolean,
};

export type UserProcess = {
  authorizationStatus: string;
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
