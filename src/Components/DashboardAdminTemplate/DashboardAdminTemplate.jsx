import React, { useState, useEffect } from "react";

import { Outlet, useNavigate } from "react-router-dom";
import "./DashboardAdminTemplate.css";
import dashboard from "../../images/dashboard(1).png";
import Content from "../content/Content";
import AddingUser from "../AddingUser/AddingUser";
import report from "../../images/report(1).png";
import file from "../../images/file.png";
import browser from "../../images/upload-file.png";
import user from "../../images/user.png";
import Dashboard from "../Dashboard/Dashboard";
// import { useHistory, useParams, useLocation } from "react-router-dom";
import Managetask from "../taskmangaement/Managetask";
export default function DashboardAdminTemplate(props) {
  let navigate = useNavigate();
  const [dash, setDash] = useState(true);
  const [task, setTask] = useState(false);
  const [port, setPort] = useState(false);
  const [bowser, setBowser] = useState(false);
  const [use, setUse] = useState(false);
  const dashboardActive = () => {
    navigate("/admin/dashboard");
    setDash(true);
    setTask(false);
    setPort(false);
    setBowser(false);
    setUse(false);
  };
  const taskmanagementActive = () => {
    // history.push({
    //   pathname: "/admin/taskmanagement",
    //   state: "taskmanagement",
    // });
    navigate("/admin/taskmanager");
    setDash(false);
    setTask(true);
    setPort(false);
    setBowser(false);
    setUse(false);
  };
  const reportActive = () => {
    setDash(false);
    setTask(false);
    setPort(true);
    setBowser(false);
    setUse(false);
  };
  const contentActive = () => {
    setDash(false);
    setTask(false);
    setPort(false);
    setBowser(true);
    setUse(false);
  };
  const accountActive = () => {
    setDash(false);
    setTask(false);
    setPort(false);
    setBowser(false);
    setUse(true);
  };

  return (
    <>
      <div className="dashboardadmintemplate_container">
        <div className="dashboardadmintemplate_header_left">
          <div className="dashboardadmintemplate_header_menu">Menu</div>
          <div className="dashboardadmintemplate_header_menu_tiles">
            <div
              onClick={dashboardActive}
              className={`dashboardadmintemplate_header_menu_tiles_options ${
                dash && "active"
              }`}
            >
              <img
                style={{ opacity: dash ? 1 : 0.5 }}
                src={dashboard}
                alt=""
                width={25}
              />
              Dashboard
            </div>
            <div
              onClick={() => taskmanagementActive()}
              className={`dashboardadmintemplate_header_menu_tiles_options ${
                task && "active"
              }`}
            >
              <img
                style={{ opacity: task ? 1 : 0.5 }}
                src={file}
                alt=""
                width={25}
              />
              Task Management
            </div>
            <div
              onClick={() => reportActive()}
              className={`dashboardadmintemplate_header_menu_tiles_options ${
                port && "active"
              }`}
            >
              <img
                style={{ opacity: port ? 1 : 0.5 }}
                src={report}
                alt=""
                width={25}
              />
              Report
            </div>
            <div
              onClick={() => contentActive()}
              className={`dashboardadmintemplate_header_menu_tiles_options ${
                bowser && "active"
              }`}
            >
              <img
                style={{ opacity: bowser ? 1 : 0.5 }}
                src={browser}
                alt=""
                width={25}
              />
              Content Uploading
            </div>
            <div
              onClick={() => accountActive()}
              className={`dashboardadmintemplate_header_menu_tiles_options ${
                use && "active"
              }`}
            >
              <img
                style={{
                  opacity: use ? 1 : 0.5,
                }}
                src={user}
                alt=""
                width={25}
              />
              Account
            </div>
          </div>
        </div>
        <div style={{ width: "100%" }}>
          <div className="dashboardadmintemplate_navbar">
            <div className="dashboardadmintemplate_navbar_header">
              Welcome to Dashboard
            </div>
            <div className="dashboardadmintemplate_navbar_header2">
              User name
            </div>
          </div>
          <div className="dashboardadmintemplate_content">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
