import React from "react";
import "./AddAccount.css";
import FormInput from "../FormInput/FormInput";

export default function AddAccount() {
  return (
    <div className="userupdation_container">
      <p className="userupdation_userupdation_heading">
        master &nbsp;admin&nbsp;details
      </p>
      <div className="userupdation_form_container">
        <FormInput
          label={"Name"}
          placeholder={"your name goes here"}
          dropdown={false}
        />

        <FormInput
          label={"Email"}
          placeholder={"your email goes here"}
          dropdown={false}
        />

        <FormInput
          label={"password"}
          placeholder={"your password goes here"}
          dropdown={false}
        />

        <button>Add</button>
      </div>
    </div>
  );
}
