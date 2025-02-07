import React from "react";
import { Outlet } from "react-router";
import MainNav from "../component/MainNav";

function Layout() {
  return (
    <div>
      <MainNav />
      
      <Outlet />
    </div>
  );
}

export default Layout;
