import React, { useState } from "react";
import Logo from "./Logo";
import "./Login.css";
import Api from "../../auth/ApiService";
import { useHistory } from "react-router-dom";
function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const res = Api.login({ email, password })
      .then((response) => {
        localStorage.setItem("token", response.token);
        localStorage.setItem("user", JSON.stringify(response.user));
        localStorage.setItem("userType", response.user.userTypeId.userType);
        if (response.user.userTypeId.userType === "trainee") {
          history.push("/trainee/dashboard");
        } else if (response.user.userTypeId.userType === "admin") {
          history.push("/admin/dashboard");
        } else if (response.user.userTypeId.userType === "candidate") {
          history.push("/trainer/dashboard");
        }
      })
      .catch((error) => {
        console.log("error");
      });
  };
  return (
    <div className="login_container">
      <div className="login_container_content">
        <div className="logo_container_logo">
          <Logo />
        </div>

        <div className="login_form_container">
          <div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div>
                <div>
                  <h5 className="login_title">WELCOME BACK !</h5>
                </div>
                <div>
                  <label className="login_email_label">E-mail</label>
                </div>
                <div>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="login_email_input"
                    type="text"
                    placeholder="ENTER YOUR E-MAIL HERE"
                  />
                </div>
                <div>
                  <label className="login_password_label">Password</label>
                </div>

                <div>
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="ENTER YOUR PASSWORD HERE"
                    className="login_password_input"
                  />
                </div>
                <div>
                  <button className="sign-in-login" onClick={handleSubmit}>
                    Sign in
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
