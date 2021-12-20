import React, { useState, useContext } from "react";
import userImg from "../../images/user.png";
import out from "../../images/log-out.png";
import { UserContext } from "../../App";
function Header() {
  const [user, setUser] = useContext(UserContext);
  const [logout, setLogout] = useState(false);
  
  return (
    <div className="hearder">
      <div
        style={{
          width: "300px",
          marginLeft: "1em",
          paddingLeft: "6.5em",
          height: "4em",
          marginTop: "-1.2em",
          paddingTop: "1em",
          borderBottom: "2px solid rgba(0, 0, 0, 0.25)",
        }}
      >
        <h4>Menu</h4>
      </div>

      <div
        style={{
          width: "40em",
          marginLeft: "8em",
          paddingLeft: "10em",
          height: "4em",
          marginTop: "-1.2em",
          paddingTop: "1em",
          borderBottom: "2px solid rgba(0, 0, 0, 0.25)",
        }}
      >
        <h4>Welcome to your Dashboard</h4>
      </div>

      <div
        style={{
          marginLeft: "15em",
          paddingLeft: "2em",
          width: "15em",
          height: "4em",
          marginTop: "-1.2em",
          paddingTop: "1em",
          borderBottom: "2px solid rgba(0, 0, 0, 0.25)",
        }}
        onClick={() => setLogout(!logout)}
      >
        <h5>{user.userName}</h5>
        <div style={{ marginLeft: "10em", marginTop: "-2em" }}>
          <img src={userImg} alt="" width={25} height={25} />
        </div>
      </div>

      {logout && (
        <div>
          <div class="card" style={{ marginLeft: "-200px" }}>
            <div
              class="card-header"
              style={{ paddingLeft: "90%" }}
              onClick={() => setLogout(!logout)}
            >
              &times;
            </div>
            <div class="card-body">
              Log Out &nbsp;&nbsp;&nbsp;
              <img src={out} width={30} alt="" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
