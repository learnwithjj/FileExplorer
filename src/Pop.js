
import React from "react";
import "./Pop.css";
import {FontAwesomeIcon}   from "@fortawesome/react-fontawesome"
import {faWindowClose} from "@fortawesome/fontawesome-free-solid";
function Pop(props)
{
    return (props.trigger) ?  (<div className="popup">
        <div className="insidepopup">
            <button style={{float:"right",backgroundColor:"white", border:"none ",cursor:"pointer"}} onClick={()=>props.setTrigger(false)}>  <FontAwesomeIcon style={{width:"30px",height:"25px"}} icon={faWindowClose}/></button>
            {props.children}
              
        </div>
        
    </div>) : "";
}

export default Pop;