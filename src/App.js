import React from "react";
import './App.css';
import {} from "react-router-dom";
import {useNavigate} from "react-router";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome" ;
import { faEye,faLowVision } from "@fortawesome/fontawesome-free-solid";
import {TextInput} from "react-native-web";

function App() {
  const [pin,setPin]=React.useState("");
  const [confirmpin,setconfirmPin]=React.useState("");
  let navigate=useNavigate();
  
  function handleClick()
  {
    if(pin.length===0 || confirmpin.length===0)
    {
      alert("Empty field");
      return;
    }
    if(pin.length !== 4 && confirmpin.length!==4 && pin !==confirmpin && isNaN(pin))
    { 
        alert("Type again...");
        return;
    }
        navigate("/main",{state:{password:pin}});
  }
  const [passvisible,setPassVisible]=React.useState(false);
  return (
    <div className="App">
      <img src='symbol.PNG' alt='' id="img1"></img> 
      <div id="box-container" >
      <div className='leftdiv'>
      <h1 className='h1leftdiv'>Welcome to your dashboard</h1>
      <h3 className='h3leftdiv'>This is the homepage of your file explorer, set your pin and start</h3>
      <img src="home2.PNG" alt=""></img>
      </div>
      <div className='rightdiv' style={{float:"right"}}>
        <h1 className='insideh1'>Set your 4-digit account pin </h1>
    <view>
    <TextInput style={{border:"0.5px solid lightgray",paddingRight:"140px",padding:"15px",marginLeft:"40px",paddingLeft:"20px",marginTop:"20px",borderRight:"none"}}  placeholder="Enter Pin"  maxLength={4} secureTextEntry={!passvisible}  onChangeText={a=>setPin(a)}    /> 
    <FontAwesomeIcon  icon={passvisible ? faEye : faLowVision} onClick={()=>setPassVisible(!passvisible)}/> <br/>
    </view>
    <TextInput style={{border:"0.5px solid lightgray",paddingRight:"140px",padding:"15px",marginLeft:"40px",paddingLeft:"20px",marginTop:"20px",borderRight:"none"}}  placeholder="Confirm Pin" maxLength={4} secureTextEntry={!passvisible}   onChangeText={a=>setconfirmPin(a)}   /> 
    <FontAwesomeIcon  icon={passvisible ? faEye : faLowVision} onClick={()=>setPassVisible(!passvisible)}/> <br/>
        
        
        <button className='buttonsavechanges'   onClick={handleClick} >Save Changes</button> 
      </div>


      </div>
    </div>
  );
   




}

export default App;
