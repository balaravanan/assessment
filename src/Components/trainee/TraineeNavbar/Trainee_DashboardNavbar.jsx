import React, { useEffect, useState } from "react";
import "./Trainee_DashboardNavbar.css";
import Trainee_DashboardCardData from "../TraineeCardData/Trainee_DashboardCardData";
import Api from "../../../auth/ApiService";

export default function Trainee_DashboardNavbar() {
  const [taskboarddata, setTaskboardData] = useState([]);

  useEffect(() => {
    Api.trainee_task_board().then((data) => {
      setTaskboardData(data.tasks);
    });
  }, []);
  console.log(taskboarddata);
  return (
    <>
      <div className="dashboardnavbar_container"></div>
      <div className="dashboardnavbar_card">
        <table className="dashboardnavbar_card_menu">
          <thead className="dashboardnavbar_card_menubar">
            <tr>
              <th className="dashboardnavbar_card_menu_items">TASK NAME</th>
              <th className="dashboardnavbar_card_menu_items">START DATE</th>
              <th className="dashboardnavbar_card_menu_items">END DATE</th>
              <th className="dashboardnavbar_card_menu_items">ASSIGNED BY</th>
              <th className="dashboardnavbar_card_menu_items">REFERENCE</th>
            </tr>
          </thead>
          <tbody className="dashboardnavbar_card_menu_body">
            <Trainee_DashboardCardData data={taskboarddata} />
          </tbody>
        </table>
      </div>
    </>
  );
}
