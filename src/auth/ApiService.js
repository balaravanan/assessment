import axios from "axios";

const token = localStorage.getItem("token");
export const Validation = async () => {
  const response = await fetch("https://api.github.com/users/mralexgray/repos");
  const data = await response.json();
  return data;
};
