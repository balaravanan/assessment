import React, { useState } from "react";
import dashboard from "../images/dashboard(1).png";
import fileq from "../images/self-growth.png";
import "@coreui/coreui/dist/css/coreui.min.css";
import { useHistory } from "react-router-dom";

function TraineeSide1() {
    const history = useHistory('');

  const [dash, setDash] = useState(true);
  const [task, setTask] = useState(false);
 

  const boardbul = () => {
    setDash(true);
    setTask(false);
   
    history.push("/candidash");
  };

  const askbul = () => {
    setDash(false);
    setTask(true);
  
    history.push("/progressioo");
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
  
                    <div onClick={boardbul }>
                      <img src={dashboard} alt="" width={25} />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span>
                        <b>Dashboard</b>
                      </span>
                    </div>
  
                    <div style={{ paddingTop: "2em" }} className="Sidefull" onClick={askbul}>
                      <img src={fileq} alt="" width={25} />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span>Progress</span>
                    </div>
  
                  
                  </div>
  
                </>
              </div>
            )}
  
  
            {task && (
              <div>
  
                <div style={{ marginLeft: "2em", paddingTop: "6em", cursor: "pointer" }}>
  
                  <div className="Sidefull" onClick={boardbul}>
                    <img src={dashboard} alt="" width={25} />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span>
                      Dashboard
                    </span>
                  </div>
  
                  <div style={{ paddingTop: "2em" }} onClick={askbul}>
                    <img src={fileq} alt="" width={25} />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span> <b>Progress</b></span>
                  </div>
                  
                </div>
              </div>
            )}
  
           
  
          </div>
        </div>
      </div>
    )
}

export default TraineeSide1
