import React from "react";
import DropDown from "../DropDown/DropDown";
import "./FormInput.css";
export default function FormInput({
  label,
  dropdown,
  getfun,
  addfun,
  placeholder,
  data,
}) {
  return (
    <div className="form_input_container">
      <div className="form_input_align">
        <div className="form_input_label">{label}</div>
        <div className="form_input_value">
          {dropdown ? (
            <DropDown
              width={"100%"}
              getfun={getfun}
              addfun={addfun}
              data={data}
            />
          ) : (
            <input
              type="text"
              value={getfun}
              placeholder={placeholder}
              onChange={(e) => {
                e.preventDefault();
                addfun(e.target.value);
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
