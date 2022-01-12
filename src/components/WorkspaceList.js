import WorkspacePanel from "./WorkspacePanel";

function WorkspaceList({
  workspace_objs,
  handleMouseOver,
  handleMouseLeave,
  hoverlist,
}) {
  return workspace_objs.map((obj) => (
    <div key={obj.id}>
      <WorkspacePanel
        obj={obj}
        handleMouseOver={handleMouseOver}
        handleMouseLeave={handleMouseLeave}
        isHover={hoverlist[obj.id]}
      />
      <hr
        data-qa="workspace_list_divider"
        className="p-workspaces_list__workspaces_list_divider"
      />
    </div>
  ));
}

export default WorkspaceList;
