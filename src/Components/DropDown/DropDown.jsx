import React from "react";
import "./DropDown.css";
export default function DropDown({ width, getfun, addfun, data }) {
  console.log("data", data);

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
            <option value={data._id && data._id}>
              {data.userType && data.userType}
            </option>
          );
        })}
    </select>
  );
}
