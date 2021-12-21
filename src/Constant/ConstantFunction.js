import {toast} from "react-toastify";
export default{
loginSuccess : () =>{
  return toast.success("Login Success", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
},
 loginFail : () =>{
   return toast.error("Please Enter your Correct Email or Password", {
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