import React from "react";
import WorkspaceInfo from "./WorkspaceInfo";
import ChannelList from "./ChannelList";

function ClientSidebar() {
  return (
    <div className="p-workspace-layout">
      <div className="p-workspace__sidebar">
        <div
          className="p-workspace__channel_sidebar"
          data-qa="ws_channel_sidebar"
        >
          <WorkspaceInfo />
          <ChannelList />
        </div>
      </div>
    </div>
  );
}

export default ClientSidebar;
