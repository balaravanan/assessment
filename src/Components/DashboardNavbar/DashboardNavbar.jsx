import React, { useState } from "react";
import "./DashboardNavbar.css";
import searchingIcon from "../../assets/searching.png";
import addIcon from "../../assets/round-add-button.png";
import DashboardCardData from "../DashboardCardData/DashboardCardData";

export default function DashboardNavbar() {
  const [ActivateAllUsers, setActivateAllUsers] = useState(true);
  const [ActivateTrainee, setActivateTrainee] = useState(false);
  const [ActivateCandidate, setActivateCandidate] = useState(false);

  return (
    <>
      <div className="dashboardnavbar_container">
        <div className="dashboardnavbar_menu_items">
          <div className="dashboardnavbar_menu_item_icon">
            <img
              src={searchingIcon}
              alt="searching icon"
              className="dashboardnavbar_menu_item_icon_img"
            />
          </div>
          <div className="dashboardnavbar_menu_item">
            <div
              onClick={() => {
                setActivateAllUsers(true);
                setActivateTrainee(false);
                setActivateCandidate(false);
              }}
              className={`dashboardnavbar_menu_item-button ${
                ActivateAllUsers && "dashboardnavbar_menu_item-button-active"
              }`}
            >
              <div>All Users</div>
            </div>
            <div
              onClick={() => {
                setActivateAllUsers(false);
                setActivateTrainee(true);
                setActivateCandidate(false);
              }}
              className={`dashboardnavbar_menu_item-button ${
                ActivateTrainee && "dashboardnavbar_menu_item-button-active"
              }`}
            >
              <div>Trainee</div>
            </div>
            <div
              onClick={() => {
                setActivateAllUsers(false);
                setActivateTrainee(false);
                setActivateCandidate(true);
              }}
              className={`dashboardnavbar_menu_item-button ${
                ActivateCandidate && "dashboardnavbar_menu_item-button-active"
              }`}
            >
              <div>Candidate</div>
            </div>
            <div className="dashboardnavbar_menu_item-button dashboardnavbar_menu_item_button_add-user">
              <div>
                Add User
                <img
                  src={addIcon}
                  alt="add icon"
                  className="dashboardnavbar_menu_item-button_icon"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="dashboardnavbar_navbar_line"></div>
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
            
            { ActivateCandidate && 
            <>
            <DashboardCardData />
            <DashboardCardData />
            <DashboardCardData />
            <DashboardCardData />
            <DashboardCardData />
            <DashboardCardData />
            <DashboardCardData />
            <DashboardCardData />
            <DashboardCardData />
            </>
         } 
          { ActivateAllUsers && 
            <DashboardCardData />
         } 
         {  ActivateTrainee  && 
            <DashboardCardData />
         } 
</tbody>
          </table>
          </div>
    </>
  );
}
