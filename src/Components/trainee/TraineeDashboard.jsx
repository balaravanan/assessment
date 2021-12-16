import React from 'react'
import Header from '../header/Header'
import TraineeSide1 from '../TraineeSide1'

function TraineeDashboard() {
    return (
        <div>
        <Header/>
   <div class="row align-items-start">
<div class="col-md-3" >
    <TraineeSide1/>
</div>
<div class="col-md-9" style={{marginLeft:"-3em"}}>
    <Circle/>
    
</div>
</div>
    </div>
    )
}

export default TraineeDashboard
