import axios from "axios";
import React, { useState, useEffect } from "react";
import { FiAlertTriangle } from "react-icons/fi";
import { useNavigate, useLocation } from "react-router-dom";
import "./css/SetupWorkspace.css";

function SetupChannel() {
  const location = useLocation();
  const { teamName } = location.state;

  const [channelName, setChannelName] = useState("");
  const [charcount, setCharCount] = useState(80);
  const [isAlert, setIsAlert] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [validation, setValidation] = useState("EMPTY");
  const navigate = useNavigate();

  const handleInputFocus = () => {
    setIsVisible(true);
  };

  const handleInputBlur = () => {
    setIsVisible(false);
  };

  const handleValidate = (e) => {
    const lencount = e.target.value.length;
    const maxLength = 80;

    setChannelName(e.target.value);
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
    console.log(`ch_name: ${channelName}`);
  }, [teamName, channelName]);

  const GotoSetupWorkspace = (e) => {
    navigate("/setUpWorkspace");
  };

  const GotoMain = (e) => {
    // 서버 요청 없이 test위한 코드

    navigate(`/WorkspaceMain`, {
      state: {
        teamName: teamName,
        channelName: channelName,
      },
    });
  };

  const handleContinue = (e) => {
    e.preventDefault();
    // 서버 api요청
    if (validation === "VALID") {
      axios({
        method: "post",
        url: `${process.env.REACT_APP_SERVER}/api/workSpace/setUpWorkspace`,
        data: {
          ws_name: teamName,
          ch_name: channelName,
        },
      }).then(function (response) {
        alert(`${teamName}가 생성됩니다.`);
        const workspaceId = response.data;
        navigate(`/WorkspaceMain/${workspaceId}`, {
          state: {
            teamName: teamName,
            channelName: channelName,
            workspaceId: response.data,
            // => db에서 워크스페이스 고유 id만 받기(ws_code id로 다이나믹 url주소 만들기 위함)
          },
        });
      });
    }
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
                            >
                              <div
                                className="c-virtual_list__item"
                                tabIndex={0}
                                role="listitem"
                                id="channel-heading"
                                data-qa="virtual-list-item"
                                style={{ top: "0px" }}
                              >
                                <div className="p-channel_sidebar__static_list__item">
                                  <div className="p-channel_sidebar__section_heading p-channel_sidebar__section_heading--setup-sidebar margin_top_200">
                                    <div
                                      className="p-channel_sidebar__section_heading_label p-channel_sidebar__section_heading_label--setup"
                                      tabIndex="0"
                                      role="presentation"
                                      aria-label="선택한 채널 섹션"
                                    >
                                      채널
                                    </div>
                                  </div>
                                </div>
                                {/* ... */}
                                <div
                                  className="c-virtual_list__item"
                                  tabIndex="-1"
                                  role="listitem"
                                  id="56193dcc-0ab0-4cff-a2e2-dd2de86b166b"
                                  data-qa="virtual-list-item"
                                  style={{ top: "68px" }}
                                >
                                  <div
                                    className="p-channel_sidebar__static_list__item"
                                    data-qa="team_setup_sidebar_channel_link_project"
                                  >
                                    <div className="p-channel_sidebar__channel p-channel_sidebar__channel--setup">
                                      <span className="p-channel_sidebar__name">
                                        # {channelName}
                                      </span>
                                    </div>
                                  </div>
                                </div>

                                {/* ... */}
                              </div>
                            </div>
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
              aria-label="채널 설정"
              className="p-workspace__primary_view"
            >
              <div className="p-workspace__primary_view_contents">
                <div className="p-setup_page">
                  <div className="p-setup_page__content">
                    <div
                      data-qa="team_setup_step_counter"
                      className="p-setup_page__steps_counter"
                    >
                      2/2단계
                    </div>
                    <div className="p-autoclog__hook">
                      <form onSubmit={handleContinue}>
                        <h2 className="p-setup_page__header p-setup_page__header--has-subheader">
                          현재 고객님의 팀은 어떤 일을 진행하고 계시나요?
                        </h2>
                        <p className="p-setup_page__subheader p-setup_page__subheader--deprecated-margin">
                          프로젝트, 캠페인, 이벤트 또는 성사하려는 거래 등
                          무엇이든 될 수 있습니다.
                        </p>

                        <span id="channels-input-desc" className="offscreen">
                          프로젝트 이름, 예: Q4 예산, 가을 캠페인
                        </span>
                        <div data-qa-formtext="true">
                          <div
                            role="presentation"
                            className="c-input_character_count c-input_character_count--large"
                            data-qa="input_character_count"
                          >
                            <input
                              data-qa="team_setup_channel_name_input"
                              aria-describedby="channels-input-desc setup-channel-name-input_hint setup-channel-name-input_character-count"
                              aria-invalid="false"
                              aria-required="false"
                              aria-label=""
                              autoComplete="off"
                              className={`${
                                isAlert ? "margin_bottom_0" : ""
                              } c-input_text c-input_text--large`}
                              id="setup-channel-name-input"
                              name="setup-channel-name-input"
                              placeholder="예: 4분기 예산, 가을 캠페인"
                              type="text"
                              value={channelName}
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
                                  80 자까지만 입력할 수 있습니다.
                                </span>
                              </div>
                            ) : null}
                          </div>
                        </div>
                        <button
                          className="c-button c-button--primary c-button--large p-setup_page__content_button p-setup_page__content_button--aubergine margin_top_300 margin_right"
                          data-qa="setup-page-team-name-submit"
                          aria-label="이전 단계로 이동"
                          type="submit"
                          onClick={GotoSetupWorkspace}
                        >
                          이전
                        </button>
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
                          onClick={GotoMain}
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

export default SetupChannel;
