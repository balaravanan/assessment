import React from 'react'
import Header from '../header/Header';
import Sidehita from '../Sidehita';
import Managetask from './Managetask';

function TaskManage() {
    return (
             <div style={{width:"99%"}}>
                 <Header/>
       <div class="row align-items-start">
    <div class="col-md-3" >
        <Sidehita/>
    </div>
    <div class="col-md-9" style={{marginLeft:"-3em", height:"670px", overflow:'hidden'}}>
        <Managetask/>
    </div>
    </div>
    </div>
    )
}

export default TaskManage
