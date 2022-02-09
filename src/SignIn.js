import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { FiAlertTriangle } from "react-icons/fi";
import { SIGNIN_ALERT_EMPTY, SIGNIN_ALERT_INVALID } from "./constants/messages";
import { rEmail } from "./constants/regEmail";
import axios from "axios";
import "./css/SignIn.css";
import LoginGoogle from "./components/LoginGoogle";

function SignIn() {
  const [email, setEmail] = useState("");
  const [isAlert, setIsAlert] = useState(false);
  const [validation, setValidation] = useState("EMPTY");
  const navigate = useNavigate();

  const handleValidate = () => {
    if (rEmail.test(email)) setValidation("VALID");
    else if (email === "") setValidation("EMPTY");
    else setValidation("INVALID");
  };
  useEffect(handleValidate, [email]);

  const handleContinue = (e) => {
    e.preventDefault();
    if (validation === "VALID") {
      axios({
        method: "post",
        url: `${process.env.REACT_APP_SERVER}/api/mail`,
        data: { email: email },
      }).then((response) => {
        navigate("/confirmemail", {
          state: { email: email, verificationCode: response.data.ranNum + "" },
        });
      });
    } else setIsAlert(true);
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
            <div className="g-signin2">
              <LoginGoogle />
            </div>
            {/* <button className="google_login_button">
              <strong>Google 계정으로 로그인</strong>
            </button> */}
          </div>

          <div className="horizontal_content_line_rule">
            <hr className="horizontal_content_leftLine" />
            <div className="horizontal_content_content">또는</div>
            <hr className="horizontal_content_rightLine" />
          </div>

          {/* 이메일로 로그인 */}
          <form noValidate="" onSubmit={handleContinue}>
            <div className="p-get_started_email_form">
              <label
                className="offscreen"
                htmlFor="signup_email"
                id="signup_email_label"
                aria-hidden="true"
              >
                이메일 주소 입력
              </label>
              <div data-qa-formtext="true">
                <input
                  data-qa="email_field"
                  // data-email-healing="true"
                  spellCheck="false"
                  aria-describedby="signup_email_hint"
                  aria-invalid="false"
                  aria-labelledby="signup_email_label"
                  aria-required="true"
                  aria-label=""
                  autoComplete="off"
                  className={`${
                    isAlert && validation !== "VALID" ? "margin_bottom_0" : ""
                  } c-input_text c-input_text--large`}
                  id="signup_email"
                  name="email"
                  placeholder="name@work-email.com"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              {isAlert && validation !== "VALID" ? (
                <div
                  className="c-alert c-alert--nested_box c-alert--level_error c-alert--align_left margin_bottom_100"
                  id="signup_email_error"
                  data-qa-alert="true"
                  data-qa-alert-level="error"
                  data-qa-alert-type="nested_box"
                  data-qa-alert-align="left"
                >
                  <i
                    className="c-icon c-alert__icon c-icon--warning c-icon--inherit c-icon--inline"
                    type="warning"
                    data-qa-alert-icon="true"
                    data-qa-alert-icon-type="warning"
                    aria-hidden="true"
                  >
                    <FiAlertTriangle color="red" size="17" />
                  </i>
                  <span
                    className="c-alert__message"
                    data-qa-alert-message="true"
                  >
                    {isAlert &&
                      validation === "INVALID" &&
                      SIGNIN_ALERT_INVALID}
                    {isAlert && validation === "EMPTY" && SIGNIN_ALERT_EMPTY}
                  </span>
                </div>
              ) : null}

              <button
                className="c-button c-button--outline c-button--large p-get_started_email_form__button p-get_started_aubergine_button"
                id="submit_btn"
                data-style="expand-right"
                data-qa="submit_button"
                type="submit"
              >
                이메일로 로그인
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
