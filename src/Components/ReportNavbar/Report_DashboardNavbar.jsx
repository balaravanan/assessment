import React, { useState } from "react";
import "./Report_DashboardNavbar.css";
import Report_DashboardCardData from "../ReportCardData/Report_DashboardCardData";

export default function Report_DashboardNavbar() {
 

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
            
           
            <Report_DashboardCardData />
            <Report_DashboardCardData />
            <Report_DashboardCardData />
            <Report_DashboardCardData />
            <Report_DashboardCardData />
          
</tbody>
          </table>
          </div>
    </>
  );
}
