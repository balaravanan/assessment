// import { Dropdown } from "bootstrap";
import React from "react";
import ReportDashboardNavbar from "../ReportNavbar/ReportDashboardNavbar";
import "./ReportDashboard.css";
import DropDown from "../DropDown/DropDown";
import iconReport from "../../images/download(2).png"


export default function ReportDashboard() {
  return (
    <div className="dashboard_container">
      <p className="dashboard_dashboard_heading">REPORT</p>
      
      <div className="drop_report">
        <div>
          <button style={{backgroundColor:"#2295ff",border:"0",color:"Black",borderRadius:"5px",paddingLeft:"15px",fontWeight:"700"}}>DOWNLOAD &nbsp; 
          <img src={iconReport} width="22" alt=""/>
          </button>
        </div>
        <div>
          <DropDown />
        </div>
      </div>
      <div className="dashboard_views_card">
      </div>
      <ReportDashboardNavbar />
    </div>
  );
}
