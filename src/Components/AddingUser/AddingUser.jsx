import React, { useState, useCallback } from "react";
import "./AddingUser.css";
import FormInput from "../FormInput/FormInput";
export default function AddingUser() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
  const [reportingTo, setReportingTo] = useState("");
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

  const type = [
    {
      userType: "admin",
      code: "ADMIN@1",
      active: true,
      createdAt: {
        $date: "2021-12-13T10:48:27.401Z",
      },
      updatedAt: {
        $date: "2021-12-13T10:48:27.401Z",
      },
      __v: 0,
    },

    {
      userType: "trainee",
      code: "TRAINEE@1",
      active: true,
      createdAt: {
        $date: "2021-12-13T10:48:54.687Z",
      },
      updatedAt: {
        $date: "2021-12-13T10:48:54.687Z",
      },
      __v: 0,
    },
    {
      userType: "candidate",
      code: "CANDIDATE@1",
      active: true,
      createdAt: {
        $date: "2021-12-13T10:49:08.738Z",
      },
      updatedAt: {
        $date: "2021-12-13T10:49:08.738Z",
      },
      __v: 0,
    },
  ];
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
          data={type}
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
        <div style={{ textAlign: "center" }}>
          <button className="button_container">Confirm</button>
        </div>
      </div>
    </div>
  );
}
