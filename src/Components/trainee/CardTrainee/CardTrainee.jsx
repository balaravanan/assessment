import React from "react";
import "./CardTrainee.css";
import Fade from 'react-reveal/Fade';
import { CButton } from '@coreui/react'

export default function CardTrainee(){
    return (
      <>
      <div style={{marginTop:"1%"}}></div>
        <Fade bottom >
        <tr className="dashboardcarddata__container">
          <td className="dashboardcarddata__dataitems">HTML BASICS</td>
          <td className="dashboardcarddata__dataitems" >09-12-2021</td>
          <td className="dashboardcarddata__dataitems" >09-12-2021</td>
          <td className="dashboardcarddata__dataitems" >VAIRAMUTHU</td>
          <td className="dashboardcarddata__dataitems" >
            <a href="https://www.w3schools.com/html/default.asp">www.w3schools.com</a>
          </td>
          <td className="dashboardcarddata__dataitems" >
          <CButton color="success" variant="outline" style={{width:"60px", marginLeft:"-1em"}}>Start</CButton>
          </td>
          <td className="dashboardcarddata__dataitems" />
          <td className="dashboardcarddata__dataitems" />
          <td className="dashboardcarddata__dataitems" />
          <td className="dashboardcarddata__dataitems" />
          <td className="dashboardcarddata__dataitems" />
        </tr>
      </Fade>
      </>
    );
}