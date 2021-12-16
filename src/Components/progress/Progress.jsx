import React from 'react'
import Header from '../header/Header'
import TraineeSide from '../TraineeSide'
import Circle from './Circle'

function Progress() {
    return (
        <div>
            <Header/>
       <div class="row align-items-start">
    <div class="col-md-3" >
        <TraineeSide/>
    </div>
    <div class="col-md-9" style={{marginLeft:"-3em"}}>
        <Circle/>
    </div>
    </div>
        </div>
    )
}

export default Progress
