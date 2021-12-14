import React, { useState, useCallback } from "react";
import "./UserUpdation.css";
import DropDown from "../DropDown/DropDown";
import FormInput from "../FormInput/FormInput";
export default function UserUpdation() {
  const [user, setUser] = useState("");
  const [Type, setType] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const User = useCallback((value) => {
    setUser(value);
  }, []);
  const Types = useCallback((value) => {
    setType(value);
  }, []);
  const Email = useCallback((value) => {
    setEmail(value);
  }, []);
  const Password = useCallback((value) => {
    setPassword(value);
  }, []);
  const Status = useCallback((value) => {
    setStatus(value);
  }, []);
  console.log({
    user,
    Type,
    email,
    password,
    status,
  });
  const _Status = ["Active", "Inactive"];
  return (
    <div className="userupdation_container">
      <p className="userupdation_userupdation_heading">user &nbsp;updation</p>
      <div className="userupdation_dropdown">
        <DropDown width={"300px"} addfun={User} getfun={user} />
      </div>
      <div className="userupdation_form_container">
        <FormInput
          label={"Name"}
          placeholder={"your name goes here"}
          getfun={user}
          dropdown={false}
          addfun={User}
        />
        <FormInput
          label={"Type"}
          placeholder={"your type goes here"}
          dropdown={false}
          getfun={Type}
          addfun={Types}
        />
        <FormInput
          label={"Email"}
          placeholder={"your email goes here"}
          dropdown={false}
          getfun={email}
          addfun={Email}
        />
        <FormInput
          label={"password"}
          placeholder={"your password goes here"}
          dropdown={false}
          getfun={password}
          addfun={Password}
        />
        <FormInput
          label={"status"}
          placeholder={"your ref website goes here"}
          dropdown={true}
          getfun={status}
          addfun={Status}
          data={_Status}
        />
        <div style={{ textAlign: "center" }}>
          <button
            onClick={() => {
              alert("clicked");
            }}
            className="button_container"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
