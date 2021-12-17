import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ConfirmButton(props) {
  const notify = () => toast("Success....!");
  return (
    <div>
      <button className="button_container" onClick={notify}>
        Confirm
      </button>
      <ToastContainer />
    </div>
  );
}
