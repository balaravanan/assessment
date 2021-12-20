import React from "react";
import Test_html from "../../images/languages/html.png";
import Test_css from "../../images/languages/css.png";
import Test_boot from "../../images/languages/bootstrap.png";
import Test_js from "../../images/languages/javascript.png";
import Test_react from "../../images/languages/react.png";
import Test_git from "../../images/languages/github.png";
import Test_node from "../../images/languages/nodejs.png";
import Test_db from "../../images/languages/mongodb.png";
import "./Testpage.css";
function TestPage() {
  return (
    <div className="dashboard_container">
      <p className="dashboard_dashboard_heading">
        WELCOME SAKTHI NAVEEN
      </p>

      <div className="row home_icons">
        <div className="col-lg-2 ">
          <img src={Test_html} alt="" style={{ width: "65%" }} className="card"/>
        </div>

        <div className="col-lg-2">
          <img src={Test_css} alt="" style={{ width: "65%" }} className="card"/>
        </div>

        <div className="col-lg-2">
          <img src={Test_boot} alt="" style={{ width: "65%" }} className="card"/>
        </div>

        <div className="col-lg-2">
          <img src={Test_js} alt="" style={{ width: "65%" }} className="card"/>
        </div>
      </div>

      <div className="row home_icons">
        <div className="col-lg-2">
          <img src={Test_react} alt="" style={{ width: "65%" }} className="card"/>
        </div>

        <div className="col-lg-2">
          <img src={Test_git} alt="" style={{ width: "65%" }} className="card"/>
        </div>

        <div className="col-lg-2">
          <img src={Test_node} alt="" style={{ width: "65%",opacity:"0.3" }} className="card"/>
        </div>

        <div className="col-lg-2">
          <img src={Test_db} alt="" style={{ width: "65%",opacity:"0.3" }} className="card"/>
        </div>
      </div>

      <div className="row">
        <div className={"text-align-center"}>
          <button style={{backgroundColor:"#199b03",border:"0",borderRadius:"3px",fontWeight:"800",letterSpacing:"3px"}}>START TEST</button>
        </div>
      </div>
    </div>
  );
}

export default TestPage;
