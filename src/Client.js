import React from "react";
import { Route, Routes } from "react-router-dom";
import TempNavigation from "./components/TempNavigation";
import TempChannel from "./components/TempChannel";
import { channels } from "./constants/channelData";

function Client() {
  return (
    <>
      <header style={{ backgroundColor: "pink" }}> this is header</header>
      <div style={{ display: "flex", flexDirection: "row", height: "100%" }}>
        <TempNavigation channels={channels} />
        <Routes>
          <Route path=":channelId" element={<TempChannel />} />
        </Routes>
      </div>
    </>
  );
}

export default Client;
