import React from "react";
import "./DashboardCardData.css";
import Fade from 'react-reveal/Fade';
import browser from "../../assets/browser.png";
import bin from "../../assets/bin.png"
export default function DashBoardCardData(){
    return (
      <>
      <div style={{marginTop:"1%"}}></div>
        <Fade bottom >
        <tr className="dashboardcarddata__container">
          <td className="dashboardcarddata__dataitems">Arun</td>
          <td className="dashboardcarddata__dataitems" >trainee</td>
          <td className="dashboardcarddata__dataitems" >09-12-2000</td>
          <td className="dashboardcarddata__dataitems" >selected</td>
          <td className="dashboardcarddata__dataitems" >vairamuthu</td>
          <td className="dashboardcarddata__dataitems" >
            <img src={browser} alt="" width="25" style={{marginRight:"10%"}}/>
            <img src={bin} alt="" width="25"/>
          </td>
        </tr>
      </Fade>
      </>
    );
}