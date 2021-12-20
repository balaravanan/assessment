import React, { useState, useCallback, useEffect } from "react";
import "./AddingUser.css";
import FormInput from "../FormInput/FormInput";
import Api from "../../auth/ApiService";
export default function AddingUser() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
  const [reportingTo, setReportingTo] = useState("");
  const [userTypes, setuserTypes] = useState([]);
  useEffect(() => {
    Api.get_user_type().then((data) => {
      setuserTypes(data.userType);
    });
  }, []);
  const UserName = useCallback((value) => {
    setUserName(value);
  }, []);
  const Email = useCallback((value) => {
    setEmail(value);
  }, []);
  const Password = useCallback((value) => {
    setPassword(value);
  }, []);
  const UserType = useCallback((value) => {
    setUserType(value);
  }, []);
  const ReportingTo = useCallback((value) => {
    setReportingTo(value);
  }, []);

  console.log({
    userName,
    email,
    password,
    userType,
    reportingTo,
  });
  return (
    <div className="addinguser_container">
      <p className="addinguser_addinguser_heading">Adding &nbsp;User</p>

      <div className="addinguser_form_container">
        <FormInput
          label={"Name"}
          placeholder={"your name goes here"}
          dropdown={false}
          getfun={userName}
          addfun={UserName}
        />
        <FormInput
          label={"Type"}
          placeholder={"your type goes here"}
          dropdown={true}
          getfun={userType}
          addfun={UserType}
          data={userTypes}
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
          label={"updated by"}
          dropdown={true}
          getfun={reportingTo}
          addfun={ReportingTo}
        />
        <button className="button_container">Confirm</button>
      </div>
    </div>
  );
}
