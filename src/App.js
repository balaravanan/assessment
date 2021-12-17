import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import TaskManage from "./Components/taskmangaement/TaskManage";
import UpdateUser from "./Components/UserUpdation/UpdateUser";
// import UserAdd from "./Components/adduser/UserAdd";
import Report from "./Components/report/Report";
import Account from "./Components/account/Account";
import "@coreui/coreui/dist/css/coreui.min.css";
import Progress from "./Components/progress/Progress";
import Login from "./Pages/Login/Login";
import DashTraine1 from "./Components/trainee/DashTraine1";
import "react-toastify/dist/ReactToastify.css";
import React, { createContext, useState } from "react";
import Trainee from "./Components/trainee/Trainee";
import Content from "./Components/content/Content";
import AddingUser from "./Components/AddingUser/AddingUser";

export const UserContext = React.createContext();
function App() {
  const [user, setUser] = useState([]);
  return (
    <UserContext.Provider value={[user, setUser]}>
      <Router>
        <Route exact path="/" component={Login} />
        <Route path="/admin/dashboard" component={Sidebar} />
        <Route path="/task" component={TaskManage} />
        <Route path="/userupdation" component={UpdateUser} />
        <Route path="/useradd" component={AddingUser} />
        <Route path="/contuploa" component={Content} />
        <Route path="/sa" component={Report} />
        <Route path="/ga" component={Account} />
        <Route path="/progressioo" component={Progress} />
        <Route path="/trainee/dashboard" component={Trainee} />
      </Router>
    </UserContext.Provider>
  );
}

export default App;
