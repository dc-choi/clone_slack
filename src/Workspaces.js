import { Link } from "react-router-dom";
import { HiArrowSmRight } from "react-icons/hi";
import { BiEnvelope } from "react-icons/bi";
import { useEffect, useState } from "react";
import "./css/Workspace.css";
//새로운 이메일로 로그인한 상황에 보이는 페이지
// 워크스페이스 5개 넘어가면 생략할지 말지
//컴포넌트 분리 필요
const workspace_objs = [
  //임시값
  {
    id: 0,
    title: "[5.2]42s_Piscine",
    pesonnel: 310,
    to: "/",
  },
  {
    id: 1,
    title: "Slack",
    pesonnel: 1,
    to: "/",
  },
  {
    id: 2,
    title: "Slack",
    pesonnel: 1,
    to: "/",
  },
];
const invited_objs = [
  { id: 0, title: "K-BioX", personnel: 2777, to: "/" },
  { id: 1, title: "Uni-D", personnel: 228, to: "/" },
];
const email = "su1715@sookmyung.ac.kr"; //임시값

function Workspaces() {
  const [hoverlist, setHoverlist] = useState([]);
  const resetHoverlist = () => {
    const arr = [];
    for (let i = 0; i < workspace_objs.length; i++) {
      arr[i] = false;
    }
    setHoverlist(arr);
  };
  useEffect(() => {
    resetHoverlist();
  }, []);

  const handleMouseOver = (e) => {
    if (e.target.dataset.kind === "workspace_link") {
      setHoverlist((prev) =>
        prev.map((ishover, i) => (i === e.target.id * 1 ? true : false))
      );
    }
  };
  const handleMouseLeave = (e) => {
    resetHoverlist();
  };
  const makeWorkspacePanel = (obj) => {
    return (
      <div
        id={obj.id}
        data-kind="workspace_link"
        className="c-link p-workspaces_list__link"
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      >
        <Link to="/">
          <div className="p-workspace_info">
            <div className="p-workspace_info__icon">
              <i
                className="c-team_icon p-workspace_info__team_icon c-team_icon--default"
                role="img"
                aria-label="Slack"
                style={{
                  height: "44px",
                  width: "44px",
                  minWidth: "44px",
                  fontSize: "24px",
                  lineHeight: "44px",
                  whiteSpace: "nowrap",
                }}
              >
                {obj.title[0]}
              </i>
            </div>
            <div className="p-workspace_info__content">
              <div className="p-workspace_info__title">{obj.title}</div>
              <div className="p-workspace_info__members">
                <div className="count">{obj.pesonnel}명의 멤버</div>
              </div>
            </div>
            <div className="p-workspace_info__action">
              <span
                className={`p-workspaces_list__link_icon_text ${
                  hoverlist[obj.id] && "visible"
                }`}
              >
                열기
              </span>
              <HiArrowSmRight size="25" />
            </div>
          </div>
        </Link>
      </div>
    );
  };
  const makeWorkspaceList = (() => {
    return workspace_objs.map((obj) => (
      <div key={obj.id}>
        {makeWorkspacePanel(obj)}
        <hr
          data-qa="workspace_list_divider"
          className="p-workspaces_list__workspaces_list_divider"
        />
      </div>
    ));
  })();
  const makeInvitedPanel = (obj) => {
    return (
      <div className="p-workspace_info" key={obj.id}>
        <div className="p-workspace_info__icon">
          <i
            className="c-team_icon p-workspace_info__team_icon c-team_icon--default"
            role="img"
            style={{
              height: "44px",
              width: "44px",
              minWidth: "44px",
              fontSize: "24px",
              lineHeight: "44px",
              whiteSpace: "nowrap",
            }}
          >
            {obj.title[0]}
          </i>
        </div>
        <div className="p-workspace_info__content">
          <div className="p-workspace_info__title">{obj.title}</div>
          <div className="p-workspace_info__members">
            <div className="count">{obj.personnel}명의 멤버</div>
          </div>
        </div>
        <div className="p-workspace_info__action">
          <Link
            to="/"
            className="c-link c-button c-button--outline c-button--medium p-workspaces_list__invitation_join_button temp_button"
          >
            참여
            <span aria-label="(opens in new tab)"></span>
          </Link>
        </div>
      </div>
    );
  };
  const makeInvitedList = (() => {
    return invited_objs.map((obj) => makeInvitedPanel(obj));
  })();

  return (
    <div id="get_started_app_root" className="get-started-app-root">
      <header className="p-refreshed_page__header">
        <div className="left-col" />
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
        <div className="right-col" />
      </header>
      <div className="p-refreshed_page">
        <h1 className="p-refreshed_page__heading p-workspaces_view__heading">
          <span className="p-workspaces_view__heading--aubergine">
            또 만나게 되어 반가워요.
          </span>{" "}
          물 마시는 것을 잊지 마세요!
        </h1>
        <div className="p-refreshed_page__sub_heading p-workspaces_view__subheading">
          아래에서 워크스페이스를 선택하여 팀과 계속 협업하세요.
        </div>
        <div className="p-workspaces_view__container">
          <div className="p-your_workspaces p-workspaces_view__your_workspaces">
            <section className="p-workspaces_list">
              <div className="p-workspaces_list__panel">
                <div className="p-workspaces_list__panel_subtitle">
                  <h4>
                    <strong>{email}</strong> 님의 워크스페이스 관리
                  </h4>
                </div>
                <div className="p-expanding_workspace_list">
                  <div className="p-expanding_workspace_list__workspaces">
                    {makeWorkspaceList}
                  </div>
                  {/* <button
                    className="c-button-unstyled p-expanding_workspace_list__expander"
                    data-qa="expand_workspace_list"
                    type="button"
                  >
                    워크스페이스 3개 더 표시
                    <i
                      className="c-icon c-icon--chevron-down"
                      type="chevron-down"
                      aria-hidden="true"
                    ></i>
                  </button> */}
                </div>
              </div>
            </section>
            <div className="p-create_workspace_banner">
              <span className="display_flex align_items_center">
                <img
                  src="https://a.slack-edge.com/bv1-9/get-started-workspaces-icon-88e0cb1.svg"
                  className="p-create_workspace_banner__image"
                  alt=""
                />
                다른 팀과 Slack을 사용하고 싶으세요?
              </span>
              <div className="c-link c-button c-button--outline c-button--medium p-create_workspace_banner__button temp_button">
                <Link to="/" className="temp_text">
                  다른 워크스페이스 만들기
                </Link>
              </div>
            </div>
            <section
              data-qa="invited_workspaces_list"
              className="p-workspaces_list__invitations p-workspaces_list"
            >
              <h3>보류 중인 초대</h3>
              <div className="p-workspaces_list__panel">
                <div className="p-workspaces_list__panel_subtitle">
                  <h4>
                    <strong>su1715@sookmyung.ac.kr</strong>에 대한 초대
                  </h4>
                </div>
                <div className="p-workspaces_list__joins p-workspaces_list__invitations_panel--padded">
                  <div className="p-expanding_workspace_list">
                    <div className="p-expanding_workspace_list__header">
                      <div className="p-workspaces_list__join_details">
                        <div
                          className="c-icon c-icon--envelope-o"
                          type="envelope-o"
                          aria-hidden="true"
                        >
                          <BiEnvelope size="14" />
                        </div>
                        <span className="invited_by">
                          @sookmyung.ac.kr 님이 초대한 사용자는 모두 참여할 수
                          있음
                        </span>
                      </div>
                    </div>
                    <div className="p-expanding_workspace_list__workspaces">
                      {makeInvitedList}
                    </div>
                    {/* <button
                      className="c-button-unstyled p-expanding_workspace_list__expander"
                      data-qa="expand_workspace_list"
                      type="button"
                    >
                      워크스페이스 18개 더 표시
                      <i
                        className="c-icon c-icon--chevron-down"
                        type="chevron-down"
                        aria-hidden="true"
                      ></i>
                    </button> */}
                  </div>
                </div>
              </div>
            </section>
            <div className="p-workspaces_view__different_email temp_footer">
              <p className="margin_bottom_0 sk_dark_gray">
                워크스페이스가 보이지 않나요?
              </p>
              <Link to="/SignIn" className="c-link--button">
                다른 이메일 시도
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Workspaces;
