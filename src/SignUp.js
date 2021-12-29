import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { FiAlertTriangle } from "react-icons/fi";
import axios from "axios";
import "./SignUp.css";

const ALERT_EMPTY = "이는 필수이며 이메일을 입력해야 합니다.";
const ALERT_INVALID = "이메일 주소가 유효하지 않은 것 같습니다.";
const rEmail = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;

function SignUp() {
  const [email, setEmail] = useState("");
  const [isAlert, setIsAlert] = useState(false);
  const [validation, setValidation] = useState("EMPTY"); //INVALID VALID EMPTY
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
        url: "http://192.168.0.8:9000/api/mail",
        data: { email: email },
      }).then(function (response) {
        navigate("/confirmemail", {
          state: { email: email, verificationCode: response.data.ranNum + "" },
        });
      });
    } else setIsAlert(true);
  };

  return (
    <div
      id="get_started_app_root"
      data-qa="page_contents"
      className="get-started-app-root"
      data-reactroot=""
    >
      <header className="p-refreshed_page__header">
        <div className="left-col"></div>

        <div className="center-col">
          <Link to="/signin" className="c-link">
            <img
              alt="Slack"
              src="https://a.slack-edge.com/bv1-9/slack_logo-ebd02d1.svg"
              height="34"
              title="Slack"
            />
          </Link>
        </div>
        <div className="right-col"></div>
      </header>
      <div className="p-refreshed_page">
        <h1 className="p-refreshed_page__heading">
          먼저 이메일부터 입력해 보세요
        </h1>
        <div className="p-refreshed_page__sub_heading">
          <strong>직장에서 사용하는 이메일 주소</strong>로 로그인하는 걸
          추천드려요.
        </div>
        <form
          noValidate=""
          className="p-creator_signup_form"
          onSubmit={handleContinue}
        >
          <label
            id="creator_signup_label"
            aria-hidden="true"
            htmlFor="creator_signup_email"
            className="c-label offscreen c-label--block c-label--pointer"
            data-qa-label="true"
            data-qa-label-type="block"
          >
            <span className="c-label__text" data-qa-label-text="true">
              이메일 주소
            </span>
            <span data-qa-label-children="true"></span>
          </label>
          <div className="p-creator_signup_form__input">
            <div data-qa-formtext="true">
              <input
                data-qa="email_field"
                spellCheck="false"
                aria-describedby="creator_signup_email_hint"
                aria-invalid="false"
                aria-labelledby="creator_signup_label"
                aria-required="true"
                aria-label=""
                className={`${
                  isAlert && validation !== "VALID" ? "margin_bottom_0" : ""
                } c-input_text c-input_text--large`}
                id="creator_signup_email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="off"
                placeholder="name@work-email.com"
              />
            </div>
            {isAlert && validation !== "VALID" ? (
              <div
                className="c-alert c-alert--nested_box c-alert--level_error c-alert--align_left margin_bottom_100"
                id="creator_signup_email_error"
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
                <span className="c-alert__message" data-qa-alert-message="true">
                  {isAlert && validation === "INVALID" && ALERT_INVALID}
                  {isAlert && validation === "EMPTY" && ALERT_EMPTY}
                </span>
              </div>
            ) : null}
          </div>
          <button
            className="c-button c-button--outline c-button--large p-get_started_email_form__button p-get_started_aubergine_button--bright"
            id="submit_btn"
            data-style="expand-right"
            data-qa="submit_button"
            type="submit"
          >
            계속
          </button>
          <div className="email_misc_field margin_bottom_175">
            <div className="creator_signup_form__ts_and_cs">
              계속 진행하면 Slack의 고객 서비스 약관, 개인정보 보호 정책, 쿠키
              정책에 동의하는 것으로 간주됩니다.
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
