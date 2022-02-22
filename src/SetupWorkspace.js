import axios from "axios";
import React, { useState, useEffect } from "react";
import { FiAlertTriangle } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import "./css/SetupWorkspace.css";

function SetupWorkspace() {
  const [teamName, setTeamName] = useState("새 워크스페이스");
  const [charcount, setCharCount] = useState(42);
  const [isAlert, setIsAlert] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [validation, setValidation] = useState("VALID");
  const navigate = useNavigate();

  // input박스 눌렀을 시에만 카운트 보이게
  const handleInputFocus = () => {
    setIsVisible(true);
  };

  const handleInputBlur = () => {
    setIsVisible(false);
  };

  // 유효한 카운트 함수
  const handleValidate = (e) => {
    const lencount = e.target.value.length;
    const maxLength = 50;

    setTeamName(e.target.value);
    setCharCount(maxLength - lencount);

    if (lencount > maxLength) {
      setIsAlert(true);
      setValidation("INVALID");
    } else if (lencount === 0) {
      setValidation("EMPTY");
    } else {
      setIsAlert(false);
      setValidation("VALID");
    }
  };
  useEffect(() => {
    console.log(`ws_name: ${teamName}`);
  }, [teamName]);

  const GotoSetupChannel = (e) => {
    navigate("/setUpChannel", {
      state: { teamName: teamName },
    });
  };

  return (
    <div className="app_root">
      <div className="p-client_container">
        <div className="p-client">
          <div className="p-top_nav"></div>
          <div className="p-workspace-layout">
            {/* 워크스페이스 셋업 사이드 바 */}
            <div className="p-workspace__sidebar p-workspace__sidebar--tiny">
              <div
                className="p-workspace__channel_sidebar"
                data-qa="ws_channel_sidebar"
              >
                <div
                  className="p-ia__sidebar_header p-ia__sidebar_header--top-nav p-ia__sidebar_header--v-team-creation-view p-ia__sidebar_header--ia_details_popover"
                  data-qa="minimal-header"
                >
                  <div
                    data-qa="sidebar_header_button"
                    className="p-ia__sidebar_header__button p-ia__sidebar_header__button--setup_team_name"
                  >
                    <div className="p-ia__sidebar_header__info">
                      <div className="p-ia__sidebar_header__team_name">
                        {/* 워크스페이스 이름 */}
                        <span className="p-ia__sidebar_header__team_name_text">
                          {teamName}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <nav
                  data-qa-channel-sidebar="true"
                  className="p-channel_sidebar p-channel_sidebar--classic_nav p-channel_sidebar--iap1"
                >
                  <div className="p-channel_sidebar__list">
                    <div role="application">
                      <div
                        role="presentation"
                        className="c-virtual_list c-virtual_list--scrollbar p-channel_sidebar__static_list c-scrollbar c-scrollbar--hidden"
                      >
                        <div
                          data-qa="slack_kit_scrollbar"
                          role="presentation"
                          className="c-scrollbar__hider"
                        >
                          <div
                            role="presentation"
                            className="c-scrollbar__child"
                          >
                            <div
                              data-qa="slack_kit_list"
                              className="c-virtual_list__scroll_container"
                              role="list"
                              aria-label="선택한 채널 검색"
                            ></div>
                          </div>
                        </div>
                        <div role="presentation" className="c-scrollbar__track">
                          <div
                            role="presentation"
                            className="c-scrollbar__bar"
                            tabIndex="-1"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
            </div>

            {/* 워크스페이스 셋업단 */}
            <div
              role="main"
              aria-label="팀 이름 설정"
              className="p-workspace__primary_view"
            >
              {/* 버튼 누를 때마다 바뀜
       aria-label = "팀 이름 설정", "채널 설정", "초대 설정" */}
              <div className="p-workspace__primary_view_contents">
                <div className="p-setup_page">
                  <div className="p-setup_page__content">
                    <div
                      data-qa="team_setup_step_counter"
                      className="p-setup_page__steps_counter"
                    >
                      1/2단계
                    </div>
                    {/* 2/3단계, 3/3단계 */}
                    <div className="p-autoclog__hook">
                      <h2 className="p-setup_page__header p-setup_page__header--has-subheader">
                        회사 또는 팀 이름이 어떻게 됩니까?
                      </h2>
                      <p className="p-setup_page__subheader p-setup_page__subheader--deprecated-margin">
                        Slack 워크스페이스의 이름이 됩니다. 팀이 인식할 수 있는
                        이름을 입력하세요.
                      </p>
                      <form>
                        <span id="team-name-input-desc" className="offscreen">
                          Slack 워크스페이스를 생성하려면 회사나 팀 이름을
                          입력하세요.
                        </span>
                        <div data-qa-formtext="true">
                          <div
                            role="presentation"
                            className="c-input_character_count c-input_character_count--large"
                            data-qa="input_character_count"
                          >
                            <input
                              data-qa="setup-page-team-name-input"
                              aria-describedby="team-name-input-desc setup-page-team-name_hint setup-page-team-name_character-count"
                              aria-invalid="false"
                              aria-required="false"
                              aria-label=""
                              autoComplete="off"
                              className={`${
                                isAlert ? "margin_bottom_0" : ""
                              } c-input_text c-input_text--large`}
                              id="setup-page-team-name"
                              name="team-name"
                              placeholder="예: Acme 마케팅 또는 Acme"
                              type="text"
                              value={teamName}
                              onChange={handleValidate}
                              onFocus={handleInputFocus}
                              onBlur={handleInputBlur}
                              style={{ paddingRight: "42px" }}
                            />

                            {isVisible ? (
                              <div
                                aria-hidden="true"
                                className="c-input_character_count__characters-remaining"
                                style={
                                  charcount > -1
                                    ? { color: "gray" }
                                    : { color: "#e01e5a" }
                                }
                              >
                                {charcount}
                              </div>
                            ) : null}

                            {isAlert && validation === "INVALID" ? (
                              <div
                                className="c-alert c-alert--nested_box c-alert--level_error c-alert--align_left margin_bottom_100"
                                id="setup-page-team-name_error"
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
                                  50 자까지만 입력할 수 있습니다.
                                </span>
                              </div>
                            ) : null}
                          </div>
                        </div>
                        <button
                          className="c-button c-button--primary c-button--large p-setup_page__content_button p-setup_page__content_button--aubergine margin_top_300"
                          data-qa="setup-page-team-name-submit"
                          aria-label="다음 단계로 이동"
                          type="submit"
                          disabled={`${
                            (isAlert && validation === "INVALID") ||
                            validation === "EMPTY"
                              ? "disabled"
                              : ""
                          }`}
                          onClick={GotoSetupChannel}
                        >
                          다음
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SetupWorkspace;
