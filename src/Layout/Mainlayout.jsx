import React from "react";
import { Link, Outlet } from "react-router-dom";
import Sidebar from "../componant/Sidebar";
import Details from "../componant/details/Details";
import ChatMessage from "../componant/chat messege/Chatmessage";
// import HomePage from "../componant/home page/Homepage";

export default function Mainlayout() {
  return (
    <div className="col-12 h-100   d-flex  px-5 flex-column flex-lg-row w-100 ">
      <Sidebar />
      <div
        className="outlet flex-grow-1 d-flex flex-column "
        style={{
          // width: "300px",
          // backgroundColor: "rgba(190, 155, 184, 0.66)",
          // borderRadius: "12px",
          border: "1px solid rgba(202, 143, 153, 0.342)",
          height: "100vh",
          marginLeft: "1.5rem",
          borderLeftRadius: "none",
          overflow: "hidden",
          // minHeight: "0",
          // flexGrow: "1",
        }}
      >
        <Outlet />
      </div>
      <ChatMessage />

      <Details />
    </div>
  );
}
