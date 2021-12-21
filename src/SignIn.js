import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./SignIn.css";
import LoginGoogle from "./LoginGoogle";

function SignIn() {
  const [email, setEmail] = useState("");

  const onChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="left-col"></div>
        <div className="center-col">
          <Link to="/SignIn">
            <img
              alt="Slack"
              src="https://a.slack-edge.com/bv1-9/slack_logo-ebd02d1.svg"
              height="34"
              title="Slack"
            />
          </Link>
        </div>
        <div className="right-col">
          <div className="header_sidelink">
            Slack을 처음 사용하시나요?
            <br />
            <Link to="/SignUp" className="SignUp_sidelink">
              계정 생성
            </Link>
          </div>
        </div>
      </header>

      <div className="Main_login_page">
        <h1 className="login_heading">이메일로 로그인해 보세요</h1>
        <div className="sub-heading">
          <strong>직장에서 사용하는 이메일 주소로</strong> 로그인하는 걸
          추천드려요.
        </div>

        <div className="start_SignIn">
          {/* 구글 계정으로 로그인 => Google-OAuth-사용하기 */}
          <div className="google_oauth_container">
            <React.StrictMode>
              <LoginGoogle />
            </React.StrictMode>
            {/* <button className="google_login_button">
              <strong>Google 계정으로 로그인</strong>
            </button> */}
          </div>

          <div className="horizontal_content_line_rule">
            <hr className="horizontal_content_leftLine" />
            <div className="horizontal_content_content">또는</div>
            <hr className="horizontal_content_rightLine" />
          </div>

          <form className="email_signIn_form">
            <div className="email_signIn_input">
              <input
                className="email_input_box"
                type="email"
                placeholder="name@work-email.com"
                onChange={onChange}
                value={email}
              />

              <button className="email_login_box">이메일로 로그인</button>
            </div>
          </form>
        </div>

        <div></div>
      </div>
    </div>
  );
}

export default SignIn;
