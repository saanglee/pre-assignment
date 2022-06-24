import store from 'store';
import { atom } from 'recoil';

export const USER_LIST = 'userList';
const localStorageUserList = store.get(USER_LIST) || [];

export const userList = atom({
  key: 'userList',
  default: localStorageUserList,
});
