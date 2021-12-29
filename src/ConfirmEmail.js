import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import "./ConfirmEmail.css";

//새로고침을 누르면 /createnew 로 간다? -> signin
//location.state.verificationCode가 없는 경우 navigate createnew
//0들어오는 경우 생각하기

function ConfirmEmail() {
  const location = useLocation();
  const navigate = useNavigate();
  const inputOne = useRef(null);
  const inputTwo = useRef(null);
  const inputThree = useRef(null);
  const inputFour = useRef(null);
  const inputFive = useRef(null);
  const inputSix = useRef(null);
  const { verificationCode } = location.state;
  const [isAlert, setIsAlert] = useState(false);
  const [code, setCode] = useState({
    one: "",
    two: "",
    three: "",
    four: "",
    five: "",
    six: "",
  });

  useEffect(() => {
    inputOne.current.focus();
  }, []);

  const handleCode = (e) => {
    if (!isNaN(e.target.value)) {
      if (isAlert) setIsAlert(false);
      if (e.target.ariaLabel === "one") inputTwo.current.focus();
      else if (e.target.ariaLabel === "two") inputThree.current.focus();
      else if (e.target.ariaLabel === "three") inputFour.current.focus();
      else if (e.target.ariaLabel === "four") inputFive.current.focus();
      else if (e.target.ariaLabel === "five") inputSix.current.focus();
      setCode((prev) => {
        return {
          ...prev,
          [e.target.ariaLabel]: e.target.value,
        };
      });
    }
  };

  useEffect(() => {
    if (
      !!code.one &&
      !!code.two &&
      !!code.three &&
      !!code.four &&
      !!code.five &&
      !!code.six
    ) {
      if (
        code.one + code.two + code.three + code.four + code.five + code.six ===
        verificationCode
      )
        console.log(`code equal`);
      //navigate("/")
      else setIsAlert(true);
    }
  }, [code, verificationCode]);

  useEffect(() => {
    if (isAlert) {
      inputOne.current.focus();
      setCode({
        one: "",
        two: "",
        three: "",
        four: "",
        five: "",
        six: "",
      });
    }
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
                      aria-label="one"
                      aria-disabled="false"
                      aria-invalid="false"
                      value={code.one}
                      onChange={handleCode}
                      ref={inputOne}
                    />
                  </div>
                  <div className="split_input_item">
                    <input
                      type="text"
                      maxLength="1"
                      aria-label="two"
                      aria-disabled="false"
                      aria-invalid="false"
                      value={code.two}
                      onChange={handleCode}
                      ref={inputTwo}
                    />
                  </div>
                  <div className="split_input_item">
                    <input
                      type="text"
                      maxLength="1"
                      aria-label="three"
                      aria-disabled="false"
                      aria-invalid="false"
                      value={code.three}
                      onChange={handleCode}
                      ref={inputThree}
                    />
                  </div>
                </div>
                <div className="confirmation_code_span_cell margin_50">—</div>
                <div className="display_flex">
                  <div className="split_input_item">
                    <input
                      type="text"
                      maxLength="1"
                      aria-label="four"
                      aria-disabled="false"
                      aria-invalid="false"
                      value={code.four}
                      onChange={handleCode}
                      ref={inputFour}
                    />
                  </div>
                  <div className="split_input_item">
                    <input
                      type="text"
                      maxLength="1"
                      aria-label="five"
                      aria-disabled="false"
                      aria-invalid="false"
                      value={code.five}
                      onChange={handleCode}
                      ref={inputFive}
                    />
                  </div>
                  <div className="split_input_item">
                    <input
                      type="text"
                      maxLength="1"
                      aria-label="six"
                      aria-disabled="false"
                      aria-invalid="false"
                      value={code.six}
                      onChange={handleCode}
                      ref={inputSix}
                    />
                  </div>
                </div>
              </div>
            </fieldset>
            <div
              className="confirmation_code_checker"
              data-state="empty-status"
            >
              {isAlert && (
                <p>그 코드는 유효하지 않습니다. 다시 시도해보세요!</p>
              )}
              <p className="c-alert confirmation_code_state_message c-alert--boxed invisible c-alert--level_default c-alert--align_center empty-status">
                <span className="c-alert__message">&nbsp;</span>
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
