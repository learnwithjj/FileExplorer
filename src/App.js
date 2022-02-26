import React, { useState } from "react";
import './App.css';
import {Link,Redirect} from "react-router-dom";
import {useNavigate} from "react-router";

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
      else if(pin.length !== 4 || confirmpin.length!==4 && pin !==confirmpin && isNaN(pin))
      { 
          alert("Type again...");
          return;
      }
      navigate("/main",{state:{password:pin}});
  }
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
        <h1 className='insideh1'>Set your account pin</h1>
        <TextInput style={{border:"0.5px solid lightgray",paddingRight:"200px",padding:"15px",marginLeft:"40px",paddingLeft:"20px",marginBottom:"20px"} } secureTextEntry={true} placeholder='Enter new pin' onChangeText={a=>setPin(a)}></TextInput><br/>
        <TextInput style={{border:"0.5px solid lightgray",paddingRight:"200px",padding:"15px",marginLeft:"40px",paddingLeft:"20px"} } secureTextEntry={true}  placeholder='Confirm new pin' onChangeText={b=>setconfirmPin(b)}></TextInput><br/>
       
        <button className='buttonsavechanges' onClick={handleClick} >Save Changes</button> 
      </div>


      </div>
    </div>
  );
   




}

export default App;
