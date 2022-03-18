import React from "react";
import { Link } from "react-router-dom";
import { BsCircleFill } from "react-icons/bs";
import { MdOutlineBakeryDining } from "react-icons/md";

function DM({ dms_objs }) {
  return dms_objs.map((obj) => (
    <div key={obj.id}>
      <Link to={`./${obj.id}`}>
        <div
          className="p-channel_sidebar__static_list__item p-channel_sidebar__static_list__item--contain c-virtual_list__item"
          role="treeitem"
          id={obj.id}
          data-qa="virtual-list-item"
          style={{ top: "116", height: "28" }}
        >
          <div className="p-channel_sidebar__channel p-channel_sidebar__channel--namebox">
            {/* 사용자 아바타 && 활성화 임티 */}
            <div className="p-channel_sidebar__user_avatar">
              <span
                className="c-avatar"
                data-qa="channel-prefix-im-avatar"
                style={{ height: "20px", width: "20px" }}
              >
                <img
                  src={obj.src}
                  srcSet={obj.srcSet}
                  className="c-base_icon c-base_icon--image"
                  aria-hidden="true"
                  role="img"
                  alt=""
                  style={{ height: "20px", width: "20px" }}
                />
              </span>
              <i
                className="c-icon p-channel_sidebar__presence_icon p-channel_sidebar__presence_icon--dim_enabled p-channel_sidebar__presence_icon--on-avatar p-channel_sidebar__presence_icon--on-avatar-border c-presence c-presence--active c-icon--presence-online"
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
                className="c-icon p-channel_sidebar__presence_icon p-channel_sidebar__presence_icon--dim_enabled p-channel_sidebar__presence_icon--on-avatar c-presence c-presence--active c-icon--presence-online"
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

            <span dir="auto" className="p-channel_sidebar_dm__name" delay="300">
              {obj.user}

              {/*수정해야하는 부분! : dm리스트의 첫번째 요소는 나, obj첫 배열만 나 표시(현재 로그인 한 사용자만 나 표시) */}
              {dms_objs[0].user === "신하영" ? (
                <span
                  className="p-channel_sidebar__member_label"
                  data-qa="channel_sidebar_name_you"
                >
                  나
                </span>
              ) : (
                ""
              )}
            </span>
          </div>
        </div>
      </Link>
    </div>
  ));
}

export default DM;
