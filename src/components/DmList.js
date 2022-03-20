//dm리스트 보여주고, 닫기 열기, 채널 설정
import React from "react";
import { useState } from "react";
import "../css/ClientSidebar.css";
import { MdArrowDropDown } from "react-icons/md";
import DM from "./DM";
import { dms_objs } from "../constants/channelData";
import { BsPlusLg } from "react-icons/bs";

function DmList() {
  const [closeList, setcloseList] = useState(false);
  const [viewMenu, setViewMenu] = useState(false);

  const onListToggle = () => {
    setcloseList((prevStatus) => (prevStatus ? false : true));
    setViewMenu((prevStatus) => (prevStatus ? false : true));
  };

  return (
    <>
      <div
        className="p-channel_sidebar__static_list__item c-virtual_list__item p-channel_sidebar__static_list__item--contain"
        tabIndex="-1"
        role="treeitem"
        style={{ height: "36px" }}
        onClick={onListToggle}
      >
        <div className="p-channel_sidebar__section_heading p-channel_sidebar__drop_target_indicator">
          <span
            className="p-channel_sidebar__section_heading_expand_container"
            aria-hidden="true"
          >
            <i
              className={`c-icon c-icon--caret-right c-icon--inherit c-icon--inline p-channel_sidebar__section_heading_expand ${
                closeList ? "" : "open"
              }`}
              data-qa="channel-section-collapse"
              type="caret-right"
              aria-hidden="true"
            >
              <MdArrowDropDown size={23} />
            </i>
          </span>
          <div
            className="p-channel_sidebar__section_heading_label_chaanelList p-channel_sidebar__section_heading_label--clickable"
            data-qa="channel_sidebar__section_heading_label__channels"
            data-sk="tooltip_parent"
          >
            <span className="p-channel_sidebar__section_heading_label_overflow">
              다이렉트 메시지
            </span>
          </div>
          <div className="p-channel_sidebar__section_heading_right">
            <button
              className="c-button-unstyled p-channel_sidebar__section_heading_right_item p-channel_sidebar__section_heading_plus"
              aria-hidden="true"
              tabIndex="-1"
              data-qa="channel_sidebar__plus__channels"
              aria-haspopup="menu"
              aria-expanded="false"
              data-sk="tooltip_parent"
              type="button"
            >
              <BsPlusLg />
            </button>
          </div>
        </div>
        <div
          role="group"
          aria-owns="C031CS07SLD C0325FW7S1E addMoreChannels"
        ></div>
      </div>
      {viewMenu ? <DM dms_objs={dms_objs} /> : null}
    </>
  );
}

export default DmList;
