import React, {useState,useCallback} from "react";
import "./Managetask.css";
import DropDown from "../DropDown/DropDown";
import FormInput from "../FormInput/FormInput";
import Button from "../Button";
import { toast, ToastContainer } from "react-toastify";
function Managetask() {
  const [name, setName] = useState('');
  const [reference, setReference] = useState('');
  const [assigned, setAssigned] = useState('');
  const [endDate, setEndDate] = useState('');
  const [startDate, setStartDate] = useState('');

    const TaskAssign = () =>{
        if(name === '' || reference === '' || assigned === '',endDate=== '',startDate ==='' ){
          toast.warn("Enter the Valid Fields", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
    }

   const SetNameFun = useCallback((value) => {
    setName(value);
  }, []);

  const setReferenceFun = useCallback((value) => {
    setReference(value);
  }, []);

  const setAssignedFun = useCallback((value) => {
    setAssigned(value);
  }, []);

   const setEndDateFun = useCallback((value) => {
    setEndDate(value);
  }, []);

   const setStartDateFun = useCallback((value) => {
    setStartDate(value);
  }, []);
  
  return (
    <>
    <ToastContainer />
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
           getfun={name}
          addfun={SetNameFun}
        />
        <FormInput
          label={"Start Date"}
          placeholder={"your date goes here"}
          dropdown={false}
           getfun={startDate}
          addfun={setStartDateFun}
        />
        <FormInput
          label={"End Date"}
          placeholder={"your date goes here"}
          dropdown={false}
           getfun={endDate}
          addfun={setEndDateFun}
        />
        <FormInput
          label={"Assigned By"}
          placeholder={"your ref website goes here"}
          dropdown={true}
          getfun={assigned}
          addfun={setAssignedFun}
        />
        <FormInput
          label={"Reference"}
          placeholder={"your ref. website goes here"}
          dropdown={false}
          getfun={reference}
          addfun={setReferenceFun}
        />
        <button className="button_container" onClick={TaskAssign}>Confirm</button>
      </div>
    </div>
    </>
  );
}

export default Managetask;
