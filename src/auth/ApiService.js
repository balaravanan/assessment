import axios from "axios";

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

};
