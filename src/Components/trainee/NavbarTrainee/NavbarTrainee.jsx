import React, { useState } from "react";
import "./NavbarTrainee.css";
import CardTrainee from "../CardTrainee/CardTrainee";

export default function NavbarTrainee() {
 
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
              <th className="dashboardnavbar_card_menu_items" >REFERENCE</th>
              <th className="dashboardnavbar_card_menu_items" ></th>
            </tr>
            </thead>
            <tbody className="dashboardnavbar_card_menu_body">
                
           <CardTrainee/>
           <CardTrainee/>
           <CardTrainee/>
           <CardTrainee/>
           <CardTrainee/>
           <CardTrainee/>

</tbody>
          </table>
          </div>
    </>
  );
}
