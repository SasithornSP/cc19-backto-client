
import React from "react";
import HeaderAdmin from "../component/Admin/HeaderAdmin";
import { Outlet } from "react-router";
import Sidebar from "../component/Admin/Sidebar";

function LayoutAdmin() {
  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="flex flex-col flex-1">
        <HeaderAdmin />
        <div className="border p-2 m-2 flex-1">

          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default LayoutAdmin;
