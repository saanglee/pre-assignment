import store from 'store';
import { atom } from 'recoil';

export const USER_LIST = 'userList';

const localStorageUserList = store.get(USER_LIST) || [];

export const userList = atom({
  key: 'userList',
  default: localStorageUserList,
});

export const email = atom({
  key: 'email',
  default: '',
});

// login -> isLoggedIn
export const login = atom({
  key: 'login',
  default: false,
});

export const getId = (email) => {
  let user = email.split('@');
  return user[0];
};
