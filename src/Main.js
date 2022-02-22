import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";

function Main() {
  const ws_code = useParams();
  console.log(ws_code);
  // ws_code를 제대로 받아오는지 확인
  const location = useLocation();
  const { teamName, channelName } = location.state;
  useEffect(() => {
    console.log(`ws_name: ${teamName}`);
    console.log(`ch_name: ${channelName}`);
  }, [teamName, channelName]);

  return (
    <>
      <h1>임시 메인 화면</h1>
      <div>워크스페이스 이름: {teamName}</div>

      <div>채널 이름: {channelName}</div>
    </>
  );
}

export default Main;
