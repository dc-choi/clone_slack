import { useParams } from "react-router-dom";

function TempChannel() {
  let params = useParams();
  return <div>{`This is ${params.channelId}`}</div>;
}

export default TempChannel;
