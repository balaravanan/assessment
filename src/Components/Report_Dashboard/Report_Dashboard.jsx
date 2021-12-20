// import { Dropdown } from "bootstrap";
import React from "react";
import Report_DashboardNavbar from "../ReportNavbar/Report_DashboardNavbar";
import "./Report_Dashboard.css";
import DropDown from "../DropDown/DropDown";

export default function Report_Dashboard() {
  return (
    <div className="dashboard_container">
      <p className="dashboard_dashboard_heading">REPORT</p>
      
      <div className="drop_report">
        <div>
          <button style={{backgroundColor:"#2295ff",border:"0",color:"Black",borderRadius:"5px",paddingLeft:"15px",fontWeight:"700"}}>DOWNLOAD &nbsp; 
          {/* <img src={report_download} width="23" alt=""/> */}
          </button>
        </div>
        <div>
          <DropDown />
        </div>
      </div>
      <div className="dashboard_views_card">
      </div>
      <Report_DashboardNavbar />
    </div>
  );
}
