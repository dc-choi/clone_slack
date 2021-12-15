import "./SignIn.css";
import { useState } from "react";

function SignIn() {
  const [email, setEmail] = useState("");

  const onChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="Slack-logo">
          <img
            alt="Slack"
            src="https://a.slack-edge.com/bv1-9/slack_logo-ebd02d1.svg"
            height="34"
            title="Slack"
          />
        </div>
      </header>

      <div className="Main_login_page">
        <div>
          <h1>이메일로 로그인해 보세요</h1>
        </div>

        <div>
          <strong>직장에서 사용하는 이메일 주소</strong>로 로그인하는 걸
          추천드려요.
        </div>

        <div>
          <button className="Goolge_login_btn">Google 계정으로 로그인</button>
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

        <div></div>
      </div>
    </div>
  );
}

export default SignIn;
