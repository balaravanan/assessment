import React, {useState} from 'react'
import user from "../../images/user.png";
import out from "../../images/log-out.png"
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate('');
    const loggingout = () => {
      navigate("/");
    }
   
    return (
        <div className='hearder' >
           
            <div style={{width:"300px", marginLeft:"1em", paddingLeft:"6.5em",  height:"4em", marginTop:"-1.2em", paddingTop:"1em", borderBottom:"2px solid rgba(0, 0, 0, 0.25)"}} >
                <h4>Menu</h4>
            </div>

            <div style={{width:"40em", marginLeft:"8em", paddingLeft:"10em",  height:"4em", marginTop:"-1.2em", paddingTop:"1em", borderBottom:"2px solid rgba(0, 0, 0, 0.25)"  }} >
                <h4>Welcome to your Dashboard</h4>
            </div>  

            <div style={{ marginLeft:"12em", paddingLeft:"2em", width:"15em",  height:"4em", marginTop:"-1.2em" ,paddingTop:"1em", borderBottom:"2px solid rgba(0, 0, 0, 0.25)" }} >
                <h5>Amresh Sriram</h5>
                <div style={{marginLeft:"10em", marginTop:"-2em", display:"flex"}}>
                <img src={user} alt="" width={25} height={25} /> 
                <img src={out} width={30} height={30} onClick={loggingout} style={{cursor:"pointer", marginTop:"-0.1em", marginLeft:"3em"}}/>
                </div>
            </div>

            
        </div>
    )
}

export default Header
