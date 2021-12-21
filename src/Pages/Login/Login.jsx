import React, { useState, useContext,useEffect } from "react";
import Logo from "./Logo";
import "./Login.css";
import Api from "../../auth/ApiService";
import { useNavigate  } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { UserContext } from "../../App";
import cfunction from "../../Constant/ConstantFunction";

function Login() {
  const navigate  = useNavigate ();
  const [user, setUser] = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const res = Api.login({ email, password })
      .then((response) => {
        cfunction.loginSuccess();
        localStorage.setItem("token", response.token);
        localStorage.setItem("user", JSON.stringify(response.user));
        localStorage.setItem("userType", response.user.userTypeId.userType);
        setUser(response.user);
        setTimeout(() => {
          if (response.user.userTypeId.userType === "trainee") {
            navigate("/trainee/dashboard");
          } else if (response.user.userTypeId.userType === "admin") {
            navigate("/admin/dashboard");
          } else if (response.user.userTypeId.userType === "candidate") {
            navigate("/trainee/dashboard");
          }
        }, 2000);
      })
      .catch((error) => {
        cfunction.loginFail();
      });
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
  }, [])
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
