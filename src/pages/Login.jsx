import React, { useState, useRef } from 'react';
import './Login.css';

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const [loginInfo, setLoginInfo] = useState([]);
  const [state, setState] = useState({
    email: '',
    password: '',
  });

  const [isValid, setIsValid] = useState({
    validEmail: true,
    validPassword: true,
  });

  const [isValidBtn, setIsValidBtn] = useState(false);

  // localStorage에 저장
  const StoreLoginInfo = (email, password) => {
    const newInfo = {
      email,
      password,
    };
    setLoginInfo([...loginInfo, newInfo]);
    localStorage.setItem('login', JSON.stringify(newInfo));
  };

  // TODO: 로그인 버튼 색깔 변경 구현
  const handleButton = () => {
    if (isValid.validEmail && isValid.validPassword) {
      setIsValidBtn(true);
    }
  };
  const handleSubmit = () => {
    StoreLoginInfo(state);
    setState({
      email: '',
      password: '',
    });
  };

  const validateEamil = (email) => {
    const emailRegx = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (emailRegx.test(email)) {
      // valid
      setIsValid({ validEmail: true });
    } else {
      // infalid
      setIsValid({ validEmail: false });
    }
    console.log(`isValid.validEmail : ${isValid.validEmail}`);
  };

  const validatePassword = (password) => {
    const pwRegx =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (pwRegx.test(password)) {
      setIsValid({ validPassword: true });
    } else {
      setIsValid({ validPassword: false });
    }
    console.log(`isValid.validPassword : ${isValid.validPassword}`);
  };
  /*
  const handleChangeEmail = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
    validateEamil(state.email);
  };

  const handleChangePassword = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
    validatePassword(state.password);
  };
*/
  const handleChangeState = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
    validateEamil(state.email);
    validatePassword(state.password);
  };

  return (
    <div className="Login">
      <form className="login_wrapper">
        <img
          src="img/instagram_logo.png
      "
          alt="instagram_text_logo"
        />

        <div className="email_wrapper">
          <input
            ref={emailRef}
            className={
              isValid.validEmail ? 'input_email' : 'input_email_invalid'
            }
            type="email"
            name="email"
            value={state.email}
            onChange={handleChangeState}
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />
        </div>
        <div className="pw_wrapper">
          <input
            ref={passwordRef}
            className={isValid.validPassword ? 'input_pw' : 'input_pw_invalid'}
            type="passwoard"
            name="password"
            value={state.password}
            onChange={handleChangeState}
            placeholder="비밀번호"
          />
        </div>

        <button
          className={isValidBtn ? 'valid_btn_login' : 'btn_login'}
          onClick={handleSubmit}
        >
          로그인
        </button>
        <div className="forgot_pw">비밀번호를 잊으셨나요?</div>
      </form>
      <form className="signup_wrapper">
        계정이 없으신가요? <a href="">가입하기</a>
      </form>
    </div>
  );
};

export default Login;
