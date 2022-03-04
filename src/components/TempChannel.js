import { useParams } from "react-router-dom";

function TempChannel() {
  let { channelId } = useParams();
  //
  return <div>{`This is ${channelId}`}</div>;
}

export default TempChannel;
