import React, { useState, useEffect,useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import "./DashboardTraineeTemplate.css";
import dashboard from "../../images/dashboard(1).png";
import report from "../../images/report(1).png";
import file from "../../images/file.png";
import browser from "../../images/upload-file.png";
import accountImg from "../../images/user.png";
import { UserContext } from "../../App";
import fileq from "../../images/self-growth.png";
import Api from "../../auth/ApiService";

export default function DashboardTraineeTemplate(props) {
  let navigate = useNavigate();
  const [dash, setDash] = useState(true);
  const [progrees, setprogrees] = useState(false);
  const [user, setUser] = useContext(UserContext);
  const [logout, setLogout] = useState(false);
  const dashboardActive = () => {
    navigate("/trainee/dashboard");
    setDash(true);
    setprogrees(false);
    
  };
  const progressActive = () => {
    navigate("/trainee/progress");
    setDash(false);
    setprogrees(true);
  };
   useEffect(() => {
      Api.find_user_type().then((res) => {
        if(res){
          navigate(`/${res}/dashboard`);
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
              DASHBOARD
            </div>
            <div
              onClick={() => progressActive()}
              className={`dashboardadmintemplate_header_menu_tiles_options ${
                progrees && "active"
              }`}
            >
              <img
                style={{ opacity: progrees ? 1 : 0.5 }}
                src={fileq}
                alt=""
                width={25}
              />
              PROGRESS 
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
