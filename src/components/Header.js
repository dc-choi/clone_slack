import React from "react";
import { BiSearch } from "react-icons/bi";
import { BsCircleFill } from "react-icons/bs";
import "../css/Header.css";

function Header() {
  const workspaceName = "새 워크스페이스";
  return (
    <>
      <div
        className="p-top_nav"
        role="navigation"
        aria-label="내역 및 검색"
        data-qa="top-nav"
      >
        <div className="p-top_nav__sidebar"></div>
        <div className="p-top_nav__search__container">
          <button
            className="c-button-unstyled_header p-top_nav__search p-top_nav__search--windows-linux"
            aria-label="검색"
            data-qa="top_nav_search"
            delay="150"
            data-sk="tooltip_parent"
            type="button"
          >
            <i
              className="c-icon p-top_nav__search__icon c-icon--search-medium c-icon--inherit"
              type="search-medium"
              aria-hidden="true"
            >
              <BiSearch />
            </i>

            <span className="p-top_nav__search__text">
              {workspaceName} 검색
            </span>
          </button>
        </div>
        <div className="p-top_nav__right">
          <button
            className="c-button-unstyled p-ia__nav__user__button p-top_nav__button p-top_nav__windows_controls_container"
            data-qa="user-button"
            aria-label="사용자 메뉴"
            delay="150"
            aria-haspopup="menu"
            aria-expanded="false"
            data-sk="tooltip_parent"
            type="button"
          >
            <div className="p-ia__nav__user">
              <span className="p-ia__nav__user__avatar c-avatar">
                <img
                  src="https://ca.slack-edge.com/T0342H1AY8J-U034F5QU2RF-7b33e50dd75a-32"
                  srcSet="https://ca.slack-edge.com/T0342H1AY8J-U034F5QU2RF-7b33e50dd75a-72 2x"
                  className="c-base_icon c-base_icon--image"
                  aria-hidden="true"
                  role="img"
                  alt=""
                />
              </span>
              <i
                className="c-icon p-ia__nav__user__presence--stroke c-presence c-presence--active c-icon--presence-online"
                type="presence-online"
                title="온라인"
                aria-label="온라인"
                aria-hidden="false"
                data-qa="presence_indicator"
                data-qa-presence-self="true"
                data-qa-presence-active="true"
                data-qa-presence-dnd="false"
              >
                <BsCircleFill size="12" />
              </i>
              <i
                className="c-icon p-ia__nav__user__presence c-presence c-presence--active c-icon--presence-online"
                type="presence-online"
                title="온라인"
                aria-label="온라인"
                aria-hidden="false"
                data-qa="presence_indicator"
                data-qa-presence-self="true"
                data-qa-presence-active="true"
                data-qa-presence-dnd="false"
              >
                <BsCircleFill size="7" />
              </i>
            </div>
          </button>
        </div>
      </div>
    </>
  );
}

export default Header;
