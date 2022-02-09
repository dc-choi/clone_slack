import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { FiAlertTriangle } from "react-icons/fi";
import "./css/ConfirmEmail.css";

function ConfirmEmail() {
  const navigate = useNavigate();
  const location = useLocation();
  const { verificationCode } = location.state;
  const [isAlert, setIsAlert] = useState(false);
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const inputRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  useEffect(() => {
    inputRefs[0].current.focus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCode = (e) => {
    const value = e.target.value;
    const label = +e.target.ariaLabel;
    if (isNaN(value)) return;
    isAlert && setIsAlert(false);
    value !== "" && label !== 5 && inputRefs[label + 1].current.focus();
    setCode((prev) => prev.map((val, i) => (i === label ? value : val)));
  };

  useEffect(() => {
    if (code.every((item) => item !== "")) {
      if (code.join("") === verificationCode) {
        console.log(`code equal`);
        //navigate("/")
      } else setIsAlert(true);
    }
  }, [code, verificationCode]);

  useEffect(() => {
    if (isAlert) {
      inputRefs[0].current.focus();
      setCode((prev) => prev.map(() => ""));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAlert]);

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
          <Link to="/signin">
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
          코드는 이메일에서 확인해보세요
        </h1>
        <div className="p-refreshed_page__sub_heading">
          <strong>{location.state.email}</strong> (으)로 6자 코드를 보냈습니다.
          코드는 잠시 후에 만료되니 빨리 입력하세요.
        </div>
        <form className="p-get_started_confirmation_code">
          <div className="p-get_started_confirmation_code__input_container">
            <fieldset className="p-get_started_confirmation_code__input_fieldset">
              <legend className="offscreen">6자 확인 코드</legend>
              <div
                className="display_flex align_items_center margin_bottom_50"
                data-qa="confirmation_code_input"
                data-state=""
              >
                <div className="display_flex">
                  <div className="split_input_item">
                    <input
                      type="text"
                      maxLength="1"
                      aria-label="0"
                      aria-disabled="false"
                      aria-invalid="false"
                      value={code[0]}
                      onChange={handleCode}
                      ref={inputRefs[0]}
                    />
                  </div>
                  <div className="split_input_item">
                    <input
                      type="text"
                      maxLength="1"
                      aria-label="1"
                      aria-disabled="false"
                      aria-invalid="false"
                      value={code[1]}
                      onChange={handleCode}
                      ref={inputRefs[1]}
                    />
                  </div>
                  <div className="split_input_item">
                    <input
                      type="text"
                      maxLength="1"
                      aria-label="2"
                      aria-disabled="false"
                      aria-invalid="false"
                      value={code[2]}
                      onChange={handleCode}
                      ref={inputRefs[2]}
                    />
                  </div>
                </div>
                <div className="confirmation_code_span_cell margin_50">—</div>
                <div className="display_flex">
                  <div className="split_input_item">
                    <input
                      type="text"
                      maxLength="1"
                      aria-label="3"
                      aria-disabled="false"
                      aria-invalid="false"
                      value={code[3]}
                      onChange={handleCode}
                      ref={inputRefs[3]}
                    />
                  </div>
                  <div className="split_input_item">
                    <input
                      type="text"
                      maxLength="1"
                      aria-label="4"
                      aria-disabled="false"
                      aria-invalid="false"
                      value={code[4]}
                      onChange={handleCode}
                      ref={inputRefs[4]}
                    />
                  </div>
                  <div className="split_input_item">
                    <input
                      type="text"
                      maxLength="1"
                      aria-label="5"
                      aria-disabled="false"
                      aria-invalid="false"
                      value={code[5]}
                      onChange={handleCode}
                      ref={inputRefs[5]}
                    />
                  </div>
                </div>
              </div>
            </fieldset>
            <div
              className="confirmation_code_checker"
              data-state="empty-status"
            >
              <p
                className={`c-alert confirmation_code_state_message c-alert--boxed c-alert--align_center ${
                  isAlert
                    ? "c-alert--level_error error"
                    : "invisible c-alert--level_default empty-status"
                }`}
              >
                <i
                  className="c-icon c-alert__icon c-icon--warning c-icon--inherit c-icon--inline"
                  type="warning"
                  data-qa-alert-icon="true"
                  data-qa-alert-icon-type="warning"
                  aria-hidden="true"
                >
                  <FiAlertTriangle color="red" size="21" />
                </i>
                <span className="c-alert__message">
                  그 코드는 유효하지 않습니다. 다시 시도해보세요!
                </span>
              </p>
            </div>
          </div>
        </form>
        <div className="display_flex">
          <a
            target="_blank"
            className="c-link c-button-unstyled margin_right_250 p-get_started__email_app_link"
            href="https://mail.google.com/mail/u/0/"
            rel="noopener noreferrer"
          >
            <img
              className="margin_right_50"
              alt=""
              srcSet="https://a.slack-edge.com/bv1-9/get-started-icon-gmail-b3b3a57.png, https://a.slack-edge.com/bv1-9/get-started-icon-gmail@2x-e80b706.png 2x"
            />
            Gmail 열기
            <span aria-label="(opens in new tab)"></span>
          </a>
          <a
            target="_blank"
            className="c-link c-button-unstyled p-get_started__email_app_link"
            href="https://outlook.live.com/mail/0/inbox"
            rel="noopener noreferrer"
          >
            <img
              className="margin_right_50"
              alt=""
              srcSet="https://a.slack-edge.com/bv1-9/get-started-icon-outlook-55f9ac5.png, https://a.slack-edge.com/bv1-9/get-started-icon-outlook@2x-4cc97d5.png 2x"
            />
            Outlook 열기
            <span aria-label="(opens in new tab)"></span>
          </a>
        </div>
        <div className="p-get_started_confirmation_code__hint">
          고객님의 코드를 찾을 수 없나요? 스팸 폴더를 확인해 보세요!
        </div>
      </div>
    </div>
  );
}

export default ConfirmEmail;
