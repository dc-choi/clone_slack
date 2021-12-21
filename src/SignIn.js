import { Link } from "react-router-dom";
import { useState } from "react";
import "./SignIn.css";

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
            <button className="google_login_button">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                className="google_auth__icon"
              >
                <g>
                  <path
                    className="auth__icon__google--red"
                    fill="#EA4335"
                    d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                  ></path>
                  <path
                    className="auth__icon__google--blue"
                    fill="#4285F4"
                    d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                  ></path>
                  <path
                    className="auth__icon__google--yellow"
                    fill="#FBBC05"
                    d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                  ></path>
                  <path
                    className="auth__icon__google--green"
                    fill="#34A853"
                    d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                  ></path>
                  <path fill="none" d="M0 0h48v48H0z"></path>
                </g>
              </svg>
              <strong>Google 계정으로 로그인</strong>
            </button>
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
