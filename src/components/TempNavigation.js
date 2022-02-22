import { Link } from "react-router-dom";

function TempNavigation({ channels }) {
  return (
    <nav style={{ backgroundColor: "skyblue" }}>
      {channels.map((channel) => (
        <div key={channel.id}>
          <Link to={channel.id}>{channel.name}</Link>
        </div>
      ))}
    </nav>
  );
}
export default TempNavigation;
