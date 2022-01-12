import { Link } from "react-router-dom";
import { BiEnvelope } from "react-icons/bi";
import { useEffect, useState } from "react";
import "./css/Workspace.css";
import WorkspaceList from "./components/WorkspaceList";
import InvitedList from "./components/InvitedList";
//새로운 이메일로 로그인한 상황에 보이는 페이지
const workspace_objs = [
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
    setHoverlist(workspace_objs.map(() => false));
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
  const handleMouseLeave = () => {
    resetHoverlist();
  };

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
                    <WorkspaceList
                      workspace_objs={workspace_objs}
                      handleMouseLeave={handleMouseLeave}
                      handleMouseOver={handleMouseOver}
                      hoverlist={hoverlist}
                    />
                  </div>
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
                    <strong>{email}</strong>에 대한 초대
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
                          {email} 님이 초대한 사용자는 모두 참여할 수 있음
                        </span>
                      </div>
                    </div>
                    <div className="p-expanding_workspace_list__workspaces">
                      <InvitedList invited_objs={invited_objs} />
                    </div>
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
