import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import AdminNavbar from "./AdminNavbar";
import FooterAdmin from "./FooterAdmin";
import HeaderStats from "./HeaderStats";
const AdminLayout = () => {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full z-50 -m-5">
          <Outlet />
          <FooterAdmin />
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
