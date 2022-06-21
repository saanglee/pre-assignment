import { useEffect, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import store from 'store';

const USER_LIST = 'userList';

const MainPage = () => {
  const localStorageUserList = store.get(USER_LIST) || [];

  const userList = useMemo(() => {
    return localStorageUserList;
  }, [localStorageUserList]);

  const navigate = useNavigate();
  const location = useLocation();
  const userState = location.state || { email: '', pwd: '', isLoggedIn: false };
  const { email, pwd, isLoggedIn } = userState;

  const handleLogOutBtn = () => {
    const newUserList = userList.filter((user) => user.email !== email);
    store.set(USER_LIST, newUserList);
    navigate('/');
  };

  const handleLogInBtn = () => {
    navigate('/');
  };

  const logInBtn = (
    <button type="button" onClick={handleLogInBtn}>
      LogIn
    </button>
  );
  const logOutBtn = (
    <button type="button" onClick={handleLogOutBtn}>
      LogOut
    </button>
  );

  return (
    <div>
      {isLoggedIn ? logOutBtn : logInBtn}
      <div>메인입니다</div>
      <div>{email}</div>
      <div>{pwd}</div>
    </div>
  );
};

export default MainPage;
