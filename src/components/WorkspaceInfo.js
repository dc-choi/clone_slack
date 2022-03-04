import React from "react";
import "../css/ClientSidebar.css";
import { RiArrowDropDownLine } from "react-icons/ri";
import { workspace_objs } from "../constants/userWorkspacesData";

function WorkspaceInfo({ workspace_objs }) {
  return (
    <>
      <div className="p-ia__sidebar_header p-ia__sidebar_header--top-nav p-ia__sidebar_header--ia_details_popover">
        <div
          tabIndex="-1"
          data-qa="sidebar_header_button"
          className="p-ia__sidebar_header__button"
          aria-haspopup="menu"
          aria-expanded="false"
        >
          <div className="p-ia__sidebar_header__info">
            <button
              className="c-button-unstyled p-ia__sidebar_header__team_name"
              data-qa="team-menu-trigger"
              aria-label="test의 주 메뉴"
              type="button"
            >
              <span className="p-ia__sidebar_header__team_name_text">
                {/* {workspace_objs.title} */}
                test
              </span>
              <i
                className="c-icon p-ia__sidebar_header__menu_icon c-icon--chevron-down"
                type="chevron-down"
                aria-hidden="true"
              >
                <RiArrowDropDownLine />
              </i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default WorkspaceInfo;
