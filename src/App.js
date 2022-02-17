import React from "react";
import './App.css';
import {Link} from "react-router-dom";
import {View,TextInput} from "react-native-web";
function App() {
  const [pin,setPin]=React.useState("");
  const [confirmpin,setconfirmPin]=React.useState("");
  const checkInput = ()=>
  {
    if(pin.length === 0 || confirmpin.length === 0)
    {
      alert("Enter all the fields!!");
    }  
    if(pin !== confirmpin)
    {
      alert("Entered pin doesnt match!!");
    }
    <Link to="/main" style={{ textDecoration : 'none ', color:'white',textAlign:'center'}}></Link>
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
        <TextInput style={{border:"0.5px solid lightgray",paddingRight:"200px",padding:"15px",marginLeft:"40px",paddingLeft:"20px",marginBottom:"20px"} }  placeholder='Enter new pin' onChangeText={a=>setPin(a)}></TextInput><br/>
        <TextInput style={{border:"0.5px solid lightgray",paddingRight:"200px",padding:"15px",marginLeft:"40px",paddingLeft:"20px"} }   placeholder='Confirm new pin' onChangeText={b=>setconfirmPin(b)}></TextInput><br/>
        <button className='buttonsavechanges' onClick={ checkInput} >Save Changes</button>
      </div>


      </div>
    </div>
  );
}

export default App;
