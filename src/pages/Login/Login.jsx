import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import logo from '../../assets/instagram_logo.png';

import cx from 'classnames';
import store from 'store';
import styles from './login.module.scss';
import { USER_LIST, userList } from '../../userList';

const EMAIL_PLACEHOLDER = '전화번호, 사용자 이름 또는 이메일';
const PWD_PLACEHOLDER = '비밀번호';

const Login = () => {
  const [userListState, setUserListState] = useRecoilState(userList);

  const navigate = useNavigate();

  useEffect(() => {
    setUserListState(userListState);
  }, userListState);

  const [emailState, setEmailState] = useState('');
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

  const handleSubmitLogin = (e) => {
    e.preventDefault();

    if (!emailValid || !pwdValid) return;

    if (!userList.length) {
      store.set(USER_LIST, [{ email: emailState, pwd: pwdState }]);
      navigate('main', {
        state: { email: emailState, isLoggedIn: true },
      });
      return;
    }

    const targetUser = userList.find((user) => user.email === emailState);

    if (targetUser === undefined) {
      store.set(USER_LIST, [{ email: emailState, pwd: pwdState }, ...userList]);
      navigate('main', {
        state: { email: emailState, isLoggedIn: true },
      });
      return;
    }

    const validUser =
      targetUser.email === emailState && targetUser.pwd === pwdState;
    if (validUser) {
      navigate('main', {
        state: { email: emailState, isLoggedIn: true },
      });
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
