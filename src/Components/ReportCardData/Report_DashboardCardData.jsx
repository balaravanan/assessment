import React from "react";
import "./Report_DashboardCardData.css";
import Fade from 'react-reveal/Fade';
export default function Report_DashboardCardData(){
    return (
      <>
      <div style={{marginTop:"1%"}}></div>
        <Fade bottom >
        <tr className="dashboardcarddata__container">
          <td className="dashboardcarddata__dataitems">HTML BASICS</td>
          <td className="dashboardcarddata__dataitems" >09-12-2021</td>
          <td className="dashboardcarddata__dataitems" >09-12-2021</td>
          <td className="dashboardcarddata__dataitems" >VAIRAMUTHU</td>
          <td className="dashboardcarddata__dataitems" >56%</td>
        </tr>
      </Fade>
      </>
    );
}