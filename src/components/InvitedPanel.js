import { Link } from "react-router-dom";

function InvitedPanel({ obj }) {
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
        </Link>
      </div>
    </div>
  );
}

export default InvitedPanel;
