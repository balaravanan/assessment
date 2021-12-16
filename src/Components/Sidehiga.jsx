import React, { useState } from "react";
import dashboard from "../images/dashboard(1).png";
import report from "../images/report(1).png";
import file from "../images/file.png";
import browser from "../images/upload-file.png";
import user from "../images/user.png";
import "@coreui/coreui/dist/css/coreui.min.css";
import { useHistory } from "react-router-dom";

function Sidehiga(props) {

  const history = useHistory('');

  const [dash, setDash] = useState(false);
  const [task, setTask] = useState(false);
  const [port, setPort] = useState(false);
  const [bowser, setBowser] = useState(false);
  const [use, setUse] = useState(true);

  const board = () => {
    setDash(true);
    setTask(false);
    setPort(false);
    setBowser(false);
    setUse(false);
    history.push("/bar");
  };

  const ask = () => {
    setDash(false);
    setTask(true);
    setPort(false);
    setBowser(false);
    setUse(false);
    history.push("/task");
  };

  const trop = () => {
    setDash(false);
    setTask(false);
    setPort(true);
    setBowser(false);
    setUse(false);
    history.push("/sa");
  };

  const reswob = () => {
    setDash(false);
    setTask(false);
    setPort(false);
    setBowser(true);
    setUse(false);
  };

  const resu = () => {
    setDash(false);
    setTask(false);
    setPort(false);
    setBowser(false);
    setUse(true);
    history.push("/ga");
  };
  return (
    <div>
      <div
        className="card"
        style={{
          width: "300px",
          height: "40em",
          marginLeft: "1em",
          marginTop:"1em",
          borderRadius: "15px",
          // borderRight: "1px solid #d7c9c9",
        }}
      >
        <div className="card-body">

          {dash && (
            <div>

              <>
                <div style={{ marginLeft: "2em", paddingTop: "6em", cursor: "pointer" }}>
                  <div onClick={board }>
                    <img src={dashboard} alt="" width={25} />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span>
                      <b>Dashboard</b>
                    </span>
                  </div>

                  <div style={{ paddingTop: "2em" }} className="Sidefull" onClick={ask}>
                    <img src={file} alt="" width={25} />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span>Task Management</span>
                  </div>

                  <div style={{ paddingTop: "2em" }} className="Sidefull" onClick={trop}>
                    <img src={report} alt="" width={25} />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span>Report</span>
                  </div>

                  <div style={{ paddingTop: "2em" }} className="Sidefull" onClick={reswob}>
                    <img src={browser} alt="" width={25} />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span>Content Uploading</span>
                  </div>

                  <div style={{ paddingTop: "2em" }} className="Sidefull" onClick={resu}>
                    <img src={user} alt="" width={25} />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span>Account</span>
                  </div>
                </div>

              </>
            </div>
          )}


          {task && (
            <div>

              <div style={{ marginLeft: "2em", paddingTop: "6em", cursor: "pointer" }}>
                <div className="Sidefull" onClick={board}>
                  <img src={dashboard} alt="" width={25} />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span>
                    Dashboard
                  </span>
                </div>
                <div style={{ paddingTop: "2em" }} onClick={ask}>
                  <img src={file} alt="" width={25} />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span> <b>Task Management</b></span>
                </div>
                <div style={{ paddingTop: "2em" }} className="Sidefull" onClick={trop}>
                  <img src={report} alt="" width={25} />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span>Report</span>
                </div>
                <div style={{ paddingTop: "2em" }} className="Sidefull" onClick={reswob}>
                  <img src={browser} alt="" width={25} />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span>Content Uploading</span>
                </div>
                <div style={{ paddingTop: "2em" }} className="Sidefull" onClick={resu}>
                  <img src={user} alt="" width={25} />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span>Account</span>
                </div>
              </div>
            </div>
          )}

          {port && (
            <div>

              <div style={{ marginLeft: "2em", paddingTop: "6em", cursor: "pointer" }}>
                <div className="Sidefull" onClick={board}>
                  <img src={dashboard} alt="" width={25} />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span>
                    Dashboard
                  </span>
                </div>
                <div style={{ paddingTop: "2em" }} className="Sidefull" onClick={ask}>
                  <img src={file} alt="" width={25} />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span>Task Management</span>
                </div>
                <div style={{ paddingTop: "2em" }} onClick={trop}>
                  <img src={report} alt="" width={25} />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span> <b>Report</b></span>
                </div>
                <div style={{ paddingTop: "2em" }} className="Sidefull" onClick={reswob}>
                  <img src={browser} alt="" width={25} />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span>Content Uploading</span>
                </div>
                <div style={{ paddingTop: "2em" }} className="Sidefull" onClick={resu}>
                  <img src={user} alt="" width={25} />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span>Account</span>
                </div>
              </div>
            </div>
          )}


          {bowser && (
            <div>

              <div style={{ marginLeft: "2em", paddingTop: "6em", cursor: "pointer" }}>
                <div className="Sidefull" onClick={board}>
                  <img src={dashboard} alt="" width={25} />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span>
                    Dashboard
                  </span>
                </div>
                <div style={{ paddingTop: "2em" }} className="Sidefull" onClick={ask}>
                  <img src={file} alt="" width={25} />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span>Task Management</span>
                </div>
                <div style={{ paddingTop: "2em" }} className="Sidefull" onClick={trop}>
                  <img src={report} alt="" width={25} />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span>Report</span>
                </div>
                <div style={{ paddingTop: "2em" }} onClick={reswob}>
                  <img src={browser} alt="" width={25} />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span> <b>Content Uploading</b></span>
                </div>
                <div style={{ paddingTop: "2em" }} className="Sidefull" onClick={resu}>
                  <img src={user} alt="" width={25} />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span>Account</span>
                </div>
              </div>
            </div>
          )}


          {use && (
            <div>

              <div style={{ marginLeft: "2em", paddingTop: "6em", cursor: "pointer" }}>
                <div className="Sidefull" onClick={board}>
                  <img src={dashboard} alt="" width={25} />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span>
                    Dashboard
                  </span>
                </div>
                <div style={{ paddingTop: "2em" }} className="Sidefull" onClick={ask}>
                  <img src={file} alt="" width={25} />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span>Task Management</span>
                </div>
                <div style={{ paddingTop: "2em" }} className="Sidefull" onClick={trop}>
                  <img src={report} alt="" width={25} />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span>Report</span>
                </div>
                <div style={{ paddingTop: "2em" }} className="Sidefull" onClick={reswob}>
                  <img src={browser} alt="" width={25} />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span>Content Uploading</span>
                </div>
                <div style={{ paddingTop: "2em" }} onClick={resu}>
                  <img src={user} alt="" width={25} />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span>
                    <b>Account</b>
                  </span>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
export default Sidehiga;
