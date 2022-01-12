import InvitedPanel from "./InvitedPanel";

function InvitedList({ invited_objs }) {
  return invited_objs.map((obj) => <InvitedPanel obj={obj} />);
}

export default InvitedList;
