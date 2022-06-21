import { useMemo, useState } from 'hooks';
import { useNavigate } from 'react-router-dom';
import cx from 'classnames';
import store from 'store';

import styles from './login.module.scss';

const USER_LIST = 'userList';

const Login = () => {
  const navigate = useNavigate();

  const localStorageUserList = store.get(USER_LIST) || []; // ❓

  const userList = useMemo(() => {
    return localStorageUserList; // ❓
  }, [localStorageUserList]);

  const [emailState, setEmailState] = useState('');
  const [emailValid, setEmailValid] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [pwdState, setPwdState] = useState('');
  const [pwdValid, setPwdValid] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const emailValidation = (value) => {
    const emailRegx = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,8})+$/;
    return emailRegx.test(value);
  };

  const handleEmail = (e) => {
    const { value } = e.currentTarget;
    setEmailState(value);
    setEmailValid(emailValidation(value));
  };

  const handleEmailFocus = () => {
    setEmailFocus((current) => !current); // ❓
  };

  const pwdValidation = (value) => {
    // Minimum eight characters, at least one letter, one number and one special character:
    const pwdRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return pwdRegex.test(value);
  };

  const handlePwd = (e) => {
    const { value } = e.currentTarget;
    setPwdState(value);
    setPwdValid(pwdValidation(value));
  };

  const handlePwdFocus = () => {
    setPwdFocus((current) => !current);
  };

  // Submit

  const handleSubmitLogin = (e) => {
    // 1
    e.preventDefault();
    // 2
    if (!emailValid || !pwdValid) return;
    // 3
    if (!userList.length) {
      console.log('새로운 유저!');
      store.set(USER_LIST, [{ email: emailState, pwd: pwdState }]);
      navigate('main', {
        state: { email: emailState, pwd: pwdState, isLoggedIn: true },
      });
      return;
    }

    // 새로운 유저일 경우 ❓새로운 유저일 경우 2번?
    const targetUser = userList.find((user) => user.email === emailState);
    if (targetUser === undefined) {
      console.log('새로운 유저!');
      // modal등으로 유저에게 알려줌
      store.set(USER_LIST, [{ email: emailState, pwd: pwdState }, ...userList]);
      navigate('main', {
        state: { email: emailState, pwd: pwdState, isLoggedIn: true },
      });
      return;
    }

    // 6. 이메일, 패스워드 확인
    const validUser =
      targetUser.email === emailState && targetUser.pwd === pwdState;

    if (validUser) {
      navigate('main', {
        state: { email: emailState, pwd: pwdState, isLoggedIn: true },
      });
      return;
    }
    alert('비밀번호를 확인하세요');
  };

  return (
    <div>
      <form onSubmit={handleSubmitLogin} className={styles.form}>
        <input // email
          className={cx(styles.input, {
            [styles.inValid]: emailState !== '' && !emailValid && !emailFocus,
          })}
          // 기본 className: input, emailState가 빈문자열이 아니고 emailValid가 true이고❓ emailFocus가 true일 경우: inValid
          placeholder="email"
          onChange={handleEmail}
          onFocus={handleEmailFocus}
          onBlur={handleEmailFocus}
          type="text"
        />
        <input // password
          className={cx(styles.input, {
            [styles.inValid]: pwdState !== '' && !pwdValid && !pwdFocus,
          })}
          placeholder="password"
          onChange={handlePwd}
          onFocus={handlePwdFocus}
          onBlur={handlePwdFocus}
          type="password"
        />
        <button
          type="submit"
          className={cx(styles.loginBtn, {
            [styles.validLoginBtn]: emailValid && pwdValid,
          })}
          // 기본 className: loginBtn, emailValid와 pwdValid가 둘다 false일 때❓: validLoginBtn
        >
          확인
        </button>
      </form>
    </div>
  );
};
export default Login;
