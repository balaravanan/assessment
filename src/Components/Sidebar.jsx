import React from 'react'
import "@coreui/coreui/dist/css/coreui.min.css";
import Sidehi from './Sidehi';
import Dashboard from './Dashboard/Dashboard';

function Sidebar() {
  return (
    <div>
       <div class="row align-items-start">
    <div class="col-md-3" >
      <Sidehi/>
    </div>
    <div class="col-md-9" style={{marginLeft:"-3em"}}>
    <Dashboard/>
    </div>
    </div>
    </div>
  )
}

export default Sidebar
