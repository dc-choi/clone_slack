import React from "react";
import { Link } from "react-router-dom";
import { BsHash } from "react-icons/bs";

function ChannelPanel({ channels_objs }) {
  return channels_objs.map((obj) => (
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
            <i className="c-icon p-channel_sidebar__channel_icon_prefix c-icon--channel-pane-hash c-icon--inherit c-icon--inline =">
              <BsHash size={18} color="rgb(188, 171, 188)" />
            </i>
            <span dir="auto" className="p-channel_sidebar__name" delay="300">
              {obj.name}
            </span>
          </div>
        </div>
      </Link>
    </div>
  ));
}

export default ChannelPanel;
