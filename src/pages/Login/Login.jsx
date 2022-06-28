import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useRecoilState, useSetRecoilState } from 'recoil';
import { USER_LIST, userList, email, login, getId } from '../../user';




import logo from '../../assets/instagram_logo.png';

import cx from 'classnames';
import store from 'store';
import styles from './login.module.scss';


const EMAIL_PLACEHOLDER = '전화번호, 사용자 이름 또는 이메일';
const PWD_PLACEHOLDER = '비밀번호';

const Login = () => {

  useEffect(() => {
    console.log('Login ---> ', store.get(USER_LIST));
  }, []);
  const navigate = useNavigate();
  // const [isLoggedInState, setIsLoggedInState] = useRecoilState(login);
  const setIsLoggedInState = useSetRecoilState(login);

  const [userListState, setUserListState] = useRecoilState(userList);

  useEffect(() => {
    setUserListState(userListState);
  }, userListState);


  const [emailState, setEmailState] = useRecoilState(email);
  const [emailValid, setEmailValid] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [pwdState, setPwdState] = useState('');
  const [pwdValid, setPwdValid] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const handleEmailFocus = () => {
    setEmailFocus((current) => !current);
  };

  const handlePwdFocus = () => {
    setPwdFocus((current) => !current);
  };

  const validateEmail = (value) => {
    const emailRegx = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,8})+$/;
    return emailRegx.test(value);
  };

  const validatePwd = (value) => {
    const pwdRegx =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return pwdRegx.test(value);
  };

  const handleChangeEmail = (e) => {
    const { value } = e.currentTarget;
    setEmailState(value);
    setEmailValid(validateEmail(value));
  };

  const handleChangePwd = (e) => {
    const { value } = e.currentTarget;
    setPwdState(value);
    setPwdValid(validatePwd(value));
  };

  // submit
  // TODO: Refactor
  // if문들 = 로그인 조건들,
  // success, faie등 true, false 조작할 수 있는 변수
  // 함수 : 매개변수로 userList,email..
  const handleSubmitLogin = (e) => {
    e.preventDefault();

    if (!emailValid || !pwdValid) return; // Invalid email pwd

    if (!userListState.length) {
      // Empty userList
      store.set(USER_LIST, [
        { email: emailState, pwd: pwdState, ...userListState },
      ]);

<<<<<<< HEAD
      navigate('main');
      setIsLoggedInState(true);
      // setPwdState('');
      // setEmailState('');
=======
    if (!userList.length) {
      store.set(USER_LIST, [{ email: emailState, pwd: pwdState }]);
      navigate('main', {
        state: { email: emailState, isLoggedIn: true },
      });
>>>>>>> f3b9198786674bdf37fa8639057ac9ec2748664b
      return;
    }

    const targetUser = userListState.find((user) => user.email === emailState);

    if (targetUser === undefined) {
<<<<<<< HEAD
      // New User
      // falsy값
      store.set(USER_LIST, [
        { email: emailState, pwd: pwdState },
        ...userListState,
      ]);

      navigate('main');
      setIsLoggedInState(true);
      // setPwdState('');
      // setEmailState('');
=======
      store.set(USER_LIST, [{ email: emailState, pwd: pwdState }, ...userList]);
      navigate('main', {
        state: { email: emailState, isLoggedIn: true },
      });
>>>>>>> f3b9198786674bdf37fa8639057ac9ec2748664b
      return;
    }

    const validUser =
      targetUser.email === emailState && targetUser.pwd === pwdState;
    if (validUser) {
<<<<<<< HEAD
      navigate('main');
      setIsLoggedInState(true);
      // setPwdState('');
      // setEmailState('');
=======
      navigate('main', {
        state: { email: emailState, isLoggedIn: true },
      });
>>>>>>> f3b9198786674bdf37fa8639057ac9ec2748664b
      return;
    }

    alert('비밀번호를 확인해주세요.');
  };

  return (
    <div className={styles.Login}>
      <form onSubmit={handleSubmitLogin} className={styles.login_form}>
        <img
          src={logo}
          alt="instagram_text_logo"
          className={styles.instagram_logo}
        />
        <div className={styles.input_wrapper}>
          <input
            // value={emailState}
            onChange={handleChangeEmail}
            onFocus={handleEmailFocus}
            onBlur={handleEmailFocus}
            placeholder={EMAIL_PLACEHOLDER}
            type="email"
            className={cx(styles.input, {
              [styles.invalid]: emailState !== '' && !emailValid && !emailFocus,
            })}
          />

          <input
            // value={pwdState}
            onChange={handleChangePwd}
            onFocus={handlePwdFocus}
            onBlur={handlePwdFocus}
            placeholder={PWD_PLACEHOLDER}
            type="password"
            className={cx(styles.input, {
              [styles.invalid]: pwdState !== '' && !pwdValid && !pwdFocus,
            })}
          />
        </div>

        <button
          type="submit"
          className={cx(styles.login_btn, {
            [styles.valid_login_btn]: emailValid && pwdValid,
          })}
        >
          로그인
        </button>

        <div className={styles.forgot_pw}>비밀번호를 잊으셨나요?</div>
      </form>
      <form className={styles.signup_form}>
        계정이 없으신가요? <a href="">가입하기</a>
      </form>
    </div>
  );
};

export default Login;
