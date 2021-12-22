import React, { useState } from "react";
import "./ReportDashboardNavbar.css";
import ReportDashboardCardData from "../ReportCardData/ReportDashboardCardData";

export default function ReportDashboardNavbar() {
 

  return (
    <>
      <div className="dashboardnavbar_container">
      </div>
      <div className="dashboardnavbar_card">
          <table className="dashboardnavbar_card_menu">
            <thead className="dashboardnavbar_card_menubar">
            <tr >
              <th className="dashboardnavbar_card_menu_items" >TASK NAME</th>
              <th className="dashboardnavbar_card_menu_items" >START DATE</th>
              <th className="dashboardnavbar_card_menu_items" >END DATE</th>
              <th className="dashboardnavbar_card_menu_items" >ASSIGNED BY</th>
              <th className="dashboardnavbar_card_menu_items" >PERCENTAGE STATUS</th>
            </tr>
            </thead>
            <tbody className="dashboardnavbar_card_menu_body">
            
           
            <ReportDashboardCardData />
            <ReportDashboardCardData />
            <ReportDashboardCardData />
            <ReportDashboardCardData />
            <ReportDashboardCardData />
          
</tbody>
          </table>
          </div>
    </>
  );
}
