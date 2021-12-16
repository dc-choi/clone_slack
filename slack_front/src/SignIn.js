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
          <div>
            <button
              className="c-button c-button--primary c-button--large c-third_party_auth c-google_login full_width"
              id="google_login_button"
            >
              <strong>Google 계정으로 로그인</strong>
            </button>
          </div>

          <div>
            <hr className="horizontal_content_line" />
          </div>

          <form>
            <div>
              <div>
                <input
                  className="email_input_box"
                  type="email"
                  placeholder="name@work-email.com"
                  onChange={onChange}
                  value={email}
                />
              </div>
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
