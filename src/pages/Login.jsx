import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './login.module.scss';
import cx from 'classnames';
import store from 'store';

const USER_LIST = 'userList';
const EMAIL_PLACEHOLDER = '전화번호, 사용자 이름 또는 이메일';

const Login = () => {
  const navigate = useNavigate();

  const localStorageUserList = store.get(USER_LIST) || [];

  const userList = useMemo(() => {
    return localStorageUserList; // ❓
  }, [localStorageUserList]); // localStorageUserList이 업데이트 될 때만 리렌더링?

  const [emailState, setEmailState] = useState('');
  const [emailValid, setEmailValid] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [pwdState, setPwdState] = useState('');
  const [pwdValid, setPwdValid] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  /* Email, Password */

  // input focus
  const handleEmailFocus = () => {
    setEmailFocus((current) => !current); // ❓
  };

  const handlePwdFocus = () => {
    setPwdFocus((current) => !current);
  };

  // validate
  const validateEmail = (value) => {
    const emailRegx = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,8})+$/;
    return emailRegx.test(value);
  };

  const validatePwd = (value) => {
    const pwdRegx =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return pwdRegx.test(value);
  };

  // state update and validation
  const handleChangeEmail = (e) => {
    const { value } = e.currentTarget; // TODO: 📝
    setEmailState(value);
    setEmailValid(validateEmail(value)); // validation
  };

  const handleChangePwd = (e) => {
    const { value } = e.currentTarget;
    setPwdState(value);
    setPwdValid(validatePwd(value));
  };

  /* Submit */
  const handleSubmitLogin = (e) => {
    e.preventDefault();

    if (!emailValid || !pwdValid) return;
    // 새로운 유저일 경우 1
    if (!userList.length) {
      console.log('새로운 유저!');
      store.set(USER_LIST, [{ email: emailState, pwd: pwdState }]);
      navigate('main', {
        state: { email: emailState, pwd: pwdState, isLoggedIn: true },
      });
      return;
    }
    // 새로운 유저일 경우 2  ❓새로운 유저일 경우 2번?
    const targetUser = userList.find((user) => user.email === emailState); // 여기서 emailState 가 새로 입력된 이메일?
    // targetUser 는 지금 입력된 이메일을 가진 유저
    if (targetUser === undefined) {
      console.log('새로운 유저!');
      store.set(USER_LIST, [{ email: emailState, pwd: pwdState }, ...userList]); // TODO: 📝 localStorage
      navigate('main', {
        state: { email: emailState, pwd: pwdState, isLoggedIn: true },
      });
      return;
    }

    // 기존 유저일 경우
    const validUser =
      targetUser.email === emailState && targetUser.pwd === pwdState; // 아까 targetuser email이랑 pwd 일치 할 경우 = 유효한 계정
    if (validUser) {
      navigate('main', {
        state: { email: emailState, pwd: pwdState, isLoggedIn: true },
      });
      return;
    }

    // 위 모든 경우 아닐 경우 = 유효하지 않은 계정
    alert('이메일 또는 비밀번호를 확인해주세요.');
  };

  return (
    <div className={styles.Login}>
      <form onSubmit={handleSubmitLogin} className={styles.login_form}>
        <img
          src="images/instagram_logo.png"
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
            })} // 기본 className: input, emailState가 빈문자열이 아니고 emailValid가 true이고❓ emailFocus가 true일 경우: inValid
          />

          {/* Password */}
          <input
            onChange={handleChangePwd}
            onFocus={handlePwdFocus}
            onBlur={handlePwdFocus}
            placeholder="비밀번호"
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
          // 기본 className: loginBtn, emailValid와 pwdValid가 둘다 false일 때❓: validLoginBtn
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
