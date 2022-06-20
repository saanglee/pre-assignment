import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './login.module.scss';
import cx from 'classnames';

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const [loggedIn, setLoggedIn] = useState(false);

  const [loginInfo, setLoginInfo] = useState([]);

  const [emailState, setEmailState] = useState('');
  const [pwdState, setPwdState] = useState('');

  const [emailValid, setEmailValid] = useState(false);
  const [pwdValid, setPwdValid] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    if (loggedIn) navigate('/main');
  }, [loggedIn]);

  // TODO: 로그인 버튼 색깔 변경 구현
  // const [isValidBtn, setIsValidBtn] = useState(false);

  // TODO: localStorage에 로그인 정보 저장
  const StoreLoginInfo = (email, password) => {
    const newInfo = {
      email,
      password,
    };
    setLoginInfo([...loginInfo, newInfo]);
    localStorage.setItem('login', JSON.stringify(newInfo));
  };

  // email, pwd 상태 변경
  const handleEmail = (e) => {
    const { value } = e.currentTarget;
    setEmailState(value);
  };

  const handlePwd = (e) => {
    const { value } = e.currentTarget;
    setPwdState(value);
  };

  // Email Validation
  const emailRegex = (email) => {
    const emailRegx = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/;
    return emailRegx.test(email);
  };

  const validateEmail = () => {
    const isEmailValid = emailRegex(emailState);
    setEmailValid(isEmailValid);
  };

  // TODO: PWD Validation
  const pwdRegex = (pwd) => {
    const pwdRegx =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return pwdRegx.test(pwd);
  };

  const validatePwd = () => {
    const isPwdValid = pwdRegex(pwdState);
    setPwdValid(isPwdValid);
  };

  // Submit

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    // TODO: email , pwd state를 가지고 localStorage와 비교를 해서 true false 반환

    // emailState, pwdState가 비어있으면 그냥 return
    if (!emailState || !pwdState) return;

    navigate('main', {
      state: { email: emailState, pwd: pwdState, isLoggedIn: true },
    });
  };

  return (
    <div className={styles.Login}>
      <form className={styles.login_form} onSubmit={handleSubmitLogin}>
        <img
          className={styles.instagram_logo}
          src="images/instagram_logo.png
      "
          alt="instagram_text_logo"
        />
        <div className={styles.input_wrapper}>
          {/* Email */}
          <input
            ref={emailRef}
            className={cx(styles.email_input, {
              [styles.invalid]: emailState !== '' && !emailValid,
            })}
            // emailState가 비어있지 않고 emailValid가 true일 때 className = invalid
            type="email"
            name="email"
            value={emailState}
            onChange={handleEmail}
            onBlur={validateEmail}
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />

          {/* Password */}
          <input
            ref={passwordRef}
            className={cx(styles.pwd_input)}
            type="password"
            name="password"
            value={pwdState}
            onChange={handlePwd}
            onFocus={() => {}} // focus상태일 때 valid검사
            onBlur={validatePwd}
            placeholder="비밀번호"
          />
        </div>

        <button className={styles.login_btn}>로그인</button>

        <div className={styles.forgot_pw}>비밀번호를 잊으셨나요?</div>
      </form>
      <form className={styles.signup_form}>
        계정이 없으신가요? <a href="">가입하기</a>
      </form>
    </div>
  );
};

export default Login;
