import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Main() {
  const location = useLocation();
  const { userName, teamName, channelName } = location.state;
  useEffect(() => {
    console.log(`userName: ${userName}`);
    console.log(`ws_name: ${teamName}`);
    console.log(`ch_name: ${channelName}`);
  }, [userName, teamName, channelName]);

  return <>슬랙 메인 화면</>;
}

export default Main;
