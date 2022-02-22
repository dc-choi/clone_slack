import { Link } from "react-router-dom";
import { HiArrowSmRight } from "react-icons/hi";

function WorkspacePanel({ obj, handleMouseOver, handleMouseLeave, isHover }) {
  return (
    <div
      data-kind="workspace_link"
      className="c-link p-workspaces_list__link"
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      <Link to={`/client/${obj.id}`}>
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
                isHover && "visible"
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
}

export default WorkspacePanel;
