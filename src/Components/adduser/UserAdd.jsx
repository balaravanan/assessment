import React from 'react'
import Header from '../header/Header'
import Sidehi from '../Sidehi'
import AddingUser from './AddingUser'

function UserAdd() {
    return (
        <div>
            <Header/>
       <div class="row align-items-start">
    <div class="col-md-3" >
        <Sidehi/>
    </div>
    <div class="col-md-9" style={{marginLeft:"-3em"}}>
        <AddingUser/>
    </div>
    </div>
    </div>
    )
}

export default UserAdd
