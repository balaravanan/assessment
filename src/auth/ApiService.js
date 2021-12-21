import axios from "axios";
import { toast } from "react-toastify";
const url = "http://192.168.2.29:8000";

export default {

  login: async (data) => {
    const response = await axios.post(`${url}/user/login`, data);
    return response.data;
  },
  newuser_register: async (data) => {
    const response = await axios.post(`${url}/user/admin/newUser/add`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      data,
    });
    return response.data;
  },
  get_user_type: async (data) => {
    const response = await axios.get(`${url}/user/admin/allUserType`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      data,
    });
    return response.data;
  },
  count: async (data) => {
    const response = await axios.get(`${url}/user/admin/count`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    });
    console.log(response);
    return response.data;
  },
  trainee_task_board: async (data) => {
    const response = await axios.get(`${url}/user/candidate/tasks`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      data,
    });
    return response.data;
  },
  find_user_type : async (data) => {

   const userType =  localStorage.getItem("userType")
   if(userType)
   {

   }
    if(userType === "admin"){
      return "admin"
    }else if(userType === "trainee"){
      return "trainee"
    }else if(userType === "candidate"){
      return "candidate"
    }else {
      return undefined
    }
  },
  remove_local_storage: async (data) => {
    localStorage.removeItem("token");
    localStorage.removeItem("userType");
    localStorage.removeItem("userId");
    localStorage.removeItem("userName");
  },
  something_wrong: async (data) => {
   return  toast.error('Something Went Wrong!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
});   
  },
  getQuestions: async (data) => {
    const response = await axios.get(`${url}/user/subject/allQuestions`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    });
    return response.data;
  },
  postQuestion: async (data) => {
    console.log("data",data);
    console.log("data",localStorage.getItem("token"));
    const response = await axios.post(`${url}/user/test/answers`, {
      headers: {
       'Content-Type' : 'application/json',
  'Accept' : 'application/json',
        Authorization: localStorage.getItem("token"),
      },data
    });
    console.log(response);
    return response.data;
  }
};
