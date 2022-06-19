import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [state, setState] = useState({
    email: '',
    password: '',
  });

  const [isValid, setIsValid] = useState({
    validEmail: true,
    validPassword: true,
  });

  const handleSubmit = () => {
    setState({
      email: '',
      password: '',
    });
  };

  const validateEamil = (email) => {
    const emailRegx = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9]+\.[a-zA-Z0-9-]+$/;
    if (emailRegx.test(email)) {
      console.log('Valid Email');
      setIsValid({ validEmail: true });
      console.log(`isValid.validEmail : ${isValid.validEmail}`);
    } else {
      console.log('Invalid Email');
      setIsValid({ validEmail: false });
    }
  };

  const validatePassword = (password) => {
    const pwRegx =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (pwRegx.test(password)) {
      console.log('Valid password');
      setIsValid({ validPassword: true });
    } else {
      console.log('Invalid Password');
      setIsValid({ validPassword: false });
    }
  };

  const handleChangeEmail = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
    validateEamil(state.email);
  };

  const handleChangePassword = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
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
            className={
              isValid.validEmail ? 'input_email' : 'input_email_invalid'
            }
            type="email"
            name="email"
            value={state.email}
            onChange={handleChangeEmail}
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />
        </div>
        <div className="pw_wrapper">
          <input
            className={isValid.validPassword ? 'input_pw' : 'input_pw_invalid'}
            type="passwoard"
            name="password"
            value={state.password}
            onChange={handleChangePassword}
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
