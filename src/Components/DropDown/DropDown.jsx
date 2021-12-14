import React from "react";
import "./DropDown.css";
export default function DropDown({ width, getfun, addfun, data }) {
  return (
    <select
      style={{ minWidth: width }}
      value={getfun}
      onChange={(e) => {
        e.preventDefault();
        addfun(e.target.value);
      }}
      className="dropdown__container"
    >
      <option value="" selected disabled hidden>
        Choose here
      </option>
      {data &&
        data.map((data) => {
          return (
            <option value={data.code && data.code}>
              {data.userType && data.userType}
            </option>
          );
        })}
    </select>
  );
}
