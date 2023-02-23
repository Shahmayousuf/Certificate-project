import React from "react";
import Header from "../components/HeaderSection/Header";
import SideBar from "../components/Sidebar/SideBar";

const Layout = ({ children }) => {
  return (
    <div >
      <Header />
      <div style={{ display: "flex" }}>
        <SideBar />
        <div className="w-100" >{children}</div>
      </div>
    </div>
  );
};

export default Layout;
