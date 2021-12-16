import React from 'react'
import "@coreui/coreui/dist/css/coreui.min.css";
import Header from '../header/Header';
import Sidehiga from '../Sidehiga';
import AddAccount from './AddAccount';

function Account() {
  return (
    <div>
      <Header/>
       <div class="row align-items-start">
    <div class="col-md-3" >
      <Sidehiga/>
    </div>
    <div class="col-md-9" style={{marginLeft:"-3em"}}>
        <AddAccount/>
    </div>
    </div>
    </div>
  )
}

export default Account
