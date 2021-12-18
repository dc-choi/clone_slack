import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { FiAlertTriangle } from "react-icons/fi";
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

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleContinue = (e) => {
    e.preventDefault();
    if (validation === "VALID") {
      //send email
      navigate("/confirmemail");
    } else {
      setIsAlert(true);
    }
  };

  return (
    <div className="app-root">
      <header>
        <div></div>
        <div className="center-col">
          <Link to="/signin">
            <img
              alt="Slack"
              src="https://a.slack-edge.com/bv1-9/slack_logo-ebd02d1.svg"
              height="34"
              title="Slack"
            />
          </Link>
        </div>
        <div></div>
      </header>
      <div className="template">
        <h1 className="heading">먼저 이메일부터 입력해 보세요</h1>
        <div className="sub-heading">
          <strong>직장에서 사용하는 이메일 주소로</strong> 로그인하는 걸
          추천드려요.
        </div>
        <form className="signup-form" onSubmit={handleContinue}>
          <div className="signup-form-input">
            <input
              value={email}
              onChange={handleChange}
              autoComplete="off"
              placeholder="name@work-email.com"
              className={
                isAlert && validation !== "VALID" ? "" : "input-default"
              }
            />
            <div
              className={isAlert && validation !== "VALID" ? "alert-box" : ""}
            >
              {isAlert && validation !== "VALID" && (
                <span className="alert-icon">
                  <FiAlertTriangle color="red" size="17" />
                </span>
              )}
              {isAlert && validation === "INVALID" && (
                <span className="alert-message">{ALERT_INVALID}</span>
              )}
              {isAlert && validation === "EMPTY" && (
                <span className="alert-message">{ALERT_EMPTY}</span>
              )}
            </div>
          </div>
          <button className="form-button" type="submit">
            계속
          </button>
          <div className="form-ts-cs">
            계속 진행하면 Slack의 고객 서비스 약관, 개인정보 보호 정책, 쿠키
            정책에 동의하는 것으로 간주됩니다.
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
