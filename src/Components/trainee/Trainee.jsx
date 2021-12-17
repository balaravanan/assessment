import React from 'react'
import Header from '../header/Header'
import TraineeSide1 from '../TraineeSide1'
import DashTraine1 from './DashTraine1'
import "@coreui/coreui/dist/css/coreui.min.css";

function Trainee() {
    return (
        <div>
            <Header/>
       <div class="row align-items-start">
    <div class="col-md-3" >
        <TraineeSide1/>
    </div>
    <div class="col-md-9" style={{marginLeft:"-3em"}}>
        <DashTraine1/>
    </div>
    </div>
    </div>
    )
}

export default Trainee
