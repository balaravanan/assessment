import React, { useState, useEffect,useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import "./DashboardAdminTemplate.css";
import dashboard from "../../images/dashboard(1).png";
import AddingUser from "../AddingUser/AddingUser";
import report from "../../images/report(1).png";
import file from "../../images/file.png";
import browser from "../../images/upload-file.png";
import accountImg from "../../images/user.png";
import Dashboard from "../Dashboard/Dashboard";
import Managetask from "../taskmangaement/Managetask";
import { UserContext } from "../../App";
import {toast} from "react-toastify";
import Api from "../../auth/ApiService"
export default function DashboardAdminTemplate(props) {
  let navigate = useNavigate();
  const [dash, setDash] = useState(true);
  const [task, setTask] = useState(false);
  const [port, setPort] = useState(false);
  const [bowser, setBowser] = useState(false);
  const [use, setUse] = useState(false);
  const [user, setUser] = useContext(UserContext);
  const [logout, setLogout] = useState(false);
  const dashboardActive = () => {
    navigate("/admin/dashboard");
    setDash(true);
    setTask(false);
    setPort(false);
    setBowser(false);
    setUse(false);
  };
  const taskmanagementActive = () => {
    navigate("/admin/taskmanager");
    setDash(false);
    setTask(true);
    setPort(false);
    setBowser(false);
    setUse(false);
  };
  const reportActive = () => {
    navigate("/admin/report");
    setDash(false);
    setTask(false);
    setPort(true);
    setBowser(false);
    setUse(false);
  };
  const contentActive = () => {
    navigate("/admin/upload");
    setDash(false);
    setTask(false);
    setPort(false);
    setBowser(true);
    setUse(false);
  };
  const accountActive = () => {
    navigate("/admin/addAccount");
    setDash(false);
    setTask(false);
    setPort(false);
    setBowser(false);
    setUse(true);
  };
    useEffect(() => {
      Api.find_user_type().then((res) => {
        if(res){
          navigate(`/${res}`);
        }else if(res === undefined){
          Api.remove_local_storage();
           Api.something_wrong();
          navigate("/");
        }
      });
    }, []);


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
                src={accountImg}
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
              {user.userName}
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
