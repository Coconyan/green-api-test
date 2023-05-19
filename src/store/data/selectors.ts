import { NameSpace } from '../../const';
import { AuthData } from '../../types/auth-data';
import { State } from '../../types/state';

export const getUser = (state: State): AuthData | null => state[NameSpace.data].user;
export const getError = (state: State): boolean => state[NameSpace.data].error;
export const getTel = (state: State): string | null => state[NameSpace.data].tel;
export const getChat = (state: State): string[] => state[NameSpace.data].chat;
export const getNotificationIsReceiving= (state: State): boolean => state[NameSpace.data].notificationIsReceiving;

