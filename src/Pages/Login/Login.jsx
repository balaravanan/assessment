import React, { useState, useContext } from "react";
import Logo from "./Logo";
import "./Login.css";
import Api from "../../auth/ApiService";
// import { useHistory } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { UserContext } from "../../App";
function Login() {
  // const history = useHistory();
  const [user, setUser] = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginSuccess = () =>
    toast.success("Login Success", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const loginFail = () =>
    toast.error("Please Enter your Correct Email or Password", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    const res = Api.login({ email, password })
      .then((response) => {
        loginSuccess();
        localStorage.setItem("token", response.token);
        localStorage.setItem("user", JSON.stringify(response.user));
        localStorage.setItem("userType", response.user.userTypeId.userType);
        setUser(response.user);
        setTimeout(() => {
          if (response.user.userTypeId.userType === "trainee") {
            history.push("/trainee/dashboard");
          } else if (response.user.userTypeId.userType === "admin") {
            history.push("/admin/dashboard");
          } else if (response.user.userTypeId.userType === "candidate") {
            history.push("/trainer/dashboard");
          }
        }, 2000);
      })
      .catch((error) => {
        loginFail();
      });
  };
  return (
    <>
      <ToastContainer />

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
                  <form onSubmit={handleSubmit}>
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
                      <button className="sign-in-login" type="submit">
                        Sign in
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
