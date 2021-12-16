import React from "react";
import "./Managetask.css";
import DropDown from "../DropDown/DropDown";
import FormInput from "../FormInput/FormInput";
import Button from "../Button";

function Managetask() {
    return (
        <div className="userupdation_container">
        <p className="userupdation_userupdation_heading">task &nbsp;management</p>
        <p className="userupdation_userupdation_heading-1">task &nbsp;assign</p>
        <div className="userupdation_dropdown">
          <DropDown width={"300px"} />
        </div>
        <div className="userupdation_form_container">
          <FormInput
            label={"Task Name"}
            placeholder={"your name goes here"}
            dropdown={false}
          />
          <FormInput
            label={"Start Date"}
            placeholder={"your date goes here"}
            dropdown={false}
          />
          <FormInput
            label={"End Date"}
            placeholder={"your date goes here"}
            dropdown={false}
          />
          <FormInput
            label={"Assigned By"}
            placeholder={"your ref website goes here"}
            dropdown={true}
          />
          <FormInput
            label={"Reference"}
            placeholder={"your ref. website goes here"}
            dropdown={false}
          />
          <Button/>
        </div>
      </div>
    )
}

export default Managetask
