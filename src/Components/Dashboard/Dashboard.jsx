import React from "react";
import DashboardNavbar from "../DashboardNavbar/DashboardNavbar";
import UsersCount from "../UsersCount/UsersCount";
import "./Dashboard.css";
export default function Dashboard() {
  return (
    <div className="dashboard_container">
      <p className="dashboard_dashboard_heading">Dashboard</p>
      <div className="dashboard_views_card">
        <UsersCount />
      </div>
      <DashboardNavbar />
    </div>
  );
}
