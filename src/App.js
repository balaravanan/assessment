import "./App.css";
import "@coreui/coreui/dist/css/coreui.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import Dashboard from "./Components/Dashboard/Dashboard";
import UserUpdation from "./Components/UserUpdation/UserUpdation";
import AddingUser from "./Components/AddingUser/AddingUser";
// import Assesment from "./Components/Assesment/Assesment";
function App() {
  return (
    <div className="App">
      {/* <UserUpdation /> */}
      <AddingUser />
      {/* <Assesment /> */}
    </div>
  );
}

export default App;
