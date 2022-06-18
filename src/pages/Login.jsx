import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [state, setState] = useState({
    email: '',
    password: '',
  });
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPw, setIsValidPw] = useState(false);

  const handleSubmit = () => {
    setState({
      // 로그인 클릭 후 input 초기화
      email: '',
      password: '',
    });
  };
  // TODO: pw regx : 대문자, 숫자, 특수문자 포함 8자리 이상
  const confirmValidEmail = (email) => {
    const emailRegx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (emailRegx.test(email)) {
      setIsValidEmail(true);
    } else {
      setIsValidEmail(false);
    }
  };

  const confirmValidPw = (pw) => {
    const pwRegx =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (emailRegx.test(pw)) {
      setIsValidPw(true);
    } else {
      setIsValidPw(false);
    }
  };

  const handleChangeState = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
    confirmValidEmail(e.target.value);
    confirmValidPw(e.target.value);
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
            className={isValidEmail ? 'input_email' : 'input_email_invalid'}
            type="email"
            name="email"
            value={state.email}
            onChange={handleChangeState}
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />
        </div>
        <div className="pw_wrapper">
          <input
            className={isValidPw ? 'input_pw' : 'input_pw_invalid'}
            type="passwoard"
            name="password"
            value={state.password}
            onChange={handleChangeState}
            placeholder="비밀번호"
          />
        </div>

        <button className="btn_login" onClick={handleSubmit}>
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
