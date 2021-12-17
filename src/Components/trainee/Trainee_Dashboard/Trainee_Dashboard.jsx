// import { Dropdown } from "bootstrap";
import React, { useState } from "react";
import DropDown from "../../DropDown/DropDown";
import "./Trainee_Dashboard.css";
import report_download from "../../../images/download(2).png"
import Trainee_DashboardNavbar from "../TraineeNavbar/Trainee_DashboardNavbar";
import NavbarTrainee from "../NavbarTrainee/NavbarTrainee";

export default function Trainee_Dashboard() {

  const [task, setTask] = useState(true);
  const [test, setTest] = useState(false);

  const BaTask = () => {
    setTask(true);
    setTest(false);
  }

  const Batest = () => {
    setTask(false);
    setTest(true);
  }

  return (
    <div className="dashboard_container">
      <p className="dashboard_dashboard_heading">dashboard</p>
      
      <div className="drop_report">
        {task && (
          <div>
        <div className="tasboa">
        <p className="dashboard_dashboard_heading-1" onClick={BaTask}>Task Board</p> &nbsp; &nbsp; &nbsp;
        <p className="dashboard_dashboard_heading-2" onClick={Batest}>Test Board</p>
        </div>
        </div>
        )}
         {test && (
          <div>
        <div className="tasboa">
        <p className="dashboard_dashboard_heading-2" onClick={BaTask}>Task Board</p> &nbsp; &nbsp; &nbsp;
        <p className="dashboard_dashboard_heading-1" onClick={Batest}>Test Board</p>
        </div>
        </div>
        )}

        <div>
        </div>
      </div>
      <div className="dashboard_views_card">
      </div>

      {task && (
      <div>
      <Trainee_DashboardNavbar/>
      </div>
      )}

       {test && (
      <div>
        <NavbarTrainee/>
      </div>
      )}
    </div>
  );
}
