import React from "react";
import "./SetupWorkspace.css";

function SetupWorkspace() {
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
                        <span className="p-ia__sidebar_header__team_name_text">
                          새 워크스페이스
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
                            tabindex="-1"
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
                      1/3단계
                    </div>
                    {/* 2/3단계, 3/3단계 */}
                    <div className="p-autoclog__hook"></div>
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
