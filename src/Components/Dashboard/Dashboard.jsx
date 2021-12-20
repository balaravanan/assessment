import React, { useState, useCallback } from "react";
import AddingUser from "../AddingUser/AddingUser";
import DashboardNavbar from "../DashboardNavbar/DashboardNavbar";
import UsersCount from "../UsersCount/UsersCount";
import "./Dashboard.css";

export default function Dashboard() {
  const dashboardactiveController = useCallback(() => {
    setDashboardactive(!dashboardactive);
  }, []);

  const [dashboardactive, setDashboardactive] = useState(true);
  return (
    <>
      {dashboardactive ? (
        <div className="dashboard_container">
          <p className="dashboard_dashboard_heading">Dashboard</p>
          <div className="dashboard_views_card">
            <UsersCount />
          </div>
          <DashboardNavbar active={dashboardactiveController} />
        </div>
      ) : (
        <AddingUser />
      )}
    </>
  );
}
