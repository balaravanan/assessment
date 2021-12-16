import React from 'react'
import TraineeCardData from './TraineeCardData';
import "./TraineeNavbar.css";

function TraineeNavbar() {
    return (
        <div>
             <div className="dashboardnavbar_container">
      </div>
      <div className="dashboardnavbar_card">
          <table className="dashboardnavbar_card_menu">
            <thead className="dashboardnavbar_card_menubar">
            <tr >
              <th className="dashboardnavbar_card_menu_items" >NAme</th>
              <th className="dashboardnavbar_card_menu_items" >type</th>
              <th className="dashboardnavbar_card_menu_items" >Date</th>
              <th className="dashboardnavbar_card_menu_items" >status</th>
              <th className="dashboardnavbar_card_menu_items" >assigned by</th>
              <th className="dashboardnavbar_card_menu_items" ></th>
            </tr>
            </thead>
            <tbody className="dashboardnavbar_card_menu_body">
            <TraineeCardData/>
            <TraineeCardData/>
            <TraineeCardData/>
            <TraineeCardData/>
</tbody>
          </table>
          </div>
        </div>
    )
}

export default TraineeNavbar
