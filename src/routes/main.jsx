import {ProSidebar,SidebarHeader,SidebarFooter, SidebarContent} from "react-pro-sidebar";
import './main.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFile,faFolder,faPlusCircle,faSearch,faSun,faMoon,faLock,faSlidersH, faFolderOpen,faArrowAltCircleLeft,faArrowAltCircleRight} from '@fortawesome/fontawesome-free-solid';
import React, { useCallback ,useState} from 'react';
import Popup from 'reactjs-popup';
import Pop from '../Pop'; 
import { TextInput } from "react-native-web";
import {useLocation} from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
// import Header from "./Header";
// import "./Header.css";

function Main()
{
  
   
    const menu=[{
        title :"Some folder name",
        children:[
          {
            title: " Folder name 2",
            children : [
              {
                title: "Folder 3",
                children:[],
              },
              {
                title: "Folder 4",
                children:[],
              }
            ],
          }
        ],
       },
      {
        title:"Some folder name",
        children:[],
      }
     ];
   

    const [darkMode,setDarkMode]=React.useState(false);
    React.useEffect(()=>
    {
       if(window.matchMedia('(prefers-color-scheme:dark)').matches)
       {
         setDarkMode(true);
       } 
       else{
         setDarkMode(false);
       }
    },[]);

   React.useEffect(()=>{
       if(darkMode)
       {
           document.body.classList.add("dark");
           
       }
       else{
           document.body.classList.remove("dark");
       }
   },[darkMode]);


   const [popupSetting,showPopUpSetting]=React.useState(false);
   const [popupFile,showPopUpFile]=React.useState(false);
   const [popupFolder,showPopUpFolder]=React.useState(false);
   const [popupLock,showpopupLock]=React.useState(false);
  const [text,setText]=React.useState('');
  const createFile = ()=>
   {
      if(text.length === 0)
      {
        alert("Enter file name !!");
      }
   }
   const location=useLocation();
  
  
   const [a,setA]=React.useState("");
   const [b,setB]=React.useState("");
   const [c,setC]=React.useState("");
   const [d,setD]=React.useState("");
    
  const validate =()=>
  {
    if(location.state.password !==(a+b+c+d))
     {
       alert("wrong password");
       return false;
     }
     showpopupLock(false);
     setA("");
     setB("");
     setC("");
     setD ("");

  }
    const [newPin,setnewpin]=React.useState("");
    const [confirmnewPin,setconfirmnewpin]=React.useState("");
    function newPinfun()
    {
      if(newPin.length===0 || confirmnewPin.length===0)
      {
        alert("Enter all the fields");
        return;
      }
      if(newPin!==confirmnewPin && newPin.length!==4 && confirmnewPin.length!==4 && isNaN(newPin))
      {
        alert("Type again ...");
        return;
      }
      location.state.password=newPin;
      showPopUpSetting(false);  
    }
    
    let currpos="";
    function Menu({ items }) {
      const [displayChildren, setDisplayChildren] = useState({});
      
      return (
        <ul>
          {items.map((item) => {
            return (
              <div key={item.title}>
                  <button id="displayFolder"
                    onClick={() => {
                      setDisplayChildren({
                        ...displayChildren,
                        [item.title]: !displayChildren[item.title],
                      }, currpos=item.path    );
                    }}
                  >
                   {displayChildren[item.title] ? <FontAwesomeIcon icon={faFolderOpen}/> : <FontAwesomeIcon icon={faFolder}/>  }    {item.title }
                  </button>
                
                {displayChildren[item.title]  && item.children && <Menu items={item.children} />}
              </div>
            );
          })}
        </ul>
      );
    }
  
    const ref1=React.useRef();
    const ref2=React.useRef();
    const ref3=React.useRef();
    const ref4=React.useRef();
    const ref5=React.useRef();

    
      //create initial menuCollapse state using useState hook
      const [menuCollapse, setMenuCollapse] = useState(false)
  
      //create a custom function that will change menucollapse state from false to true and true to false
    const menuIconClick = () => {
      //condition checking to change state from true to false and vice versa
      menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
    };
 
    return(      
        <div className='Main' style={{display : 'flex'}}>
        
        <div id="header" >
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
          
            <div className="closemenu" onClick={menuIconClick}>
                {/* changing menu collapse icon on click */}
              {menuCollapse ? (
                <FontAwesomeIcon icon={faArrowAltCircleRight}/>
              ) : (
                <FontAwesomeIcon icon={faArrowAltCircleLeft}/>
              )}
            </div>
          </SidebarHeader>
          <SidebarFooter>
        <div className="left" >
          <img src='symbol.PNG' alt='' id="img1"></img> 
                <div style={{display: 'flex'}}>
                 <button id="addiconbutton" onClick={()=>showPopUpFile(true)} style={{cursor:"pointer"}}><FontAwesomeIcon icon={faFile} style={{padding: '0px 10px 0px 5px'}}/>Add File</button>
                 
                 <Pop trigger={popupFile} setTrigger={showPopUpFile} >
                    <h3 style={{fontSize:"14px"}}>Create File</h3>
                    <h5 style={{fontSize:"17px"}}>Enter File name</h5>
                    <TextInput style={{border:"0.5px solid lightgray",paddingRight:"140px",padding:"10px"} } placeholder="Enter here"  onChangeText={a=> setText(a)} ></TextInput>
                    <h3 style={{fontSize:"14px"}}>Edit Text</h3>
                    <TextInput style={{border:"0.5px solid lightgray",paddingBottom:"500px",paddingRight:"200px",paddingLeft:"10px",paddingTop:"10px"}} placeholder={"Type anything here"}></TextInput>
                    <button id="save" onClick={createFile}>Create new</button>
                  </Pop>

                 <button id="addiconbutton" onClick={()=>showPopUpFolder(true)} style={{cursor:"pointer"}}><FontAwesomeIcon icon={faFolder} style={{padding: '0px 10px 0px 5px'}}/>Add Folder</button>
                 <Pop trigger={popupFolder} setTrigger={showPopUpFolder}  >
                  <h3 style={{fontSize:"14px"}}>Create Folder</h3>
                  <h5 style={{fontSize:"17px"}}>Enter Folder name</h5>
                  <TextInput style={{border:"0.5px solid lightgray",paddingRight:"140px",padding:"10px"} } placeholder="Enter here"></TextInput>
                  <button id="save">Create new</button>
                  </Pop> 
                 
                 </div>
                <div>
                    <Menu items={menu}/>
                </div>
                 <button id="lockbutton"  onClick={()=>showpopupLock(true)}><FontAwesomeIcon icon={faLock} style={{paddingRight:'15px'}} />Lock Screen</button>


                 <Pop trigger={popupLock}  >
                 <h3 style={{fontSize:"18px",marginLeft:"30px",fontFamily:"Bold"}}>Enter Account Pin</h3> 
                   <div style={{display:"flex"}}>
                  <TextInput  style={{height:"60px",border:"0.5px solid lightgray",margin:"20px",width:"70px",textAlign:"center"}} ref={ref1}  maxLength={1} value={a}  secureTextEntry={true}  onChangeText={(value)=>{setA(value);ref2.current.focus();}  }  />
                  
                   
                  <TextInput  style={{height:"60px",border:"0.5px solid lightgray",margin:"20px",width:"70px",textAlign:"center"}} ref={ref2} maxLength={1} value={b}  secureTextEntry={true}  onChangeText={(value)=>{setB(value);ref3.current.focus();}}/> 
                   <TextInput   style={{height:"60px",border:"0.5px solid lightgray",margin:"20px",width:"70px",textAlign:"center"}} ref={ref3}  maxLength={1} value={c}  secureTextEntry={true}  onChangeText={(value)=>{setC(value);ref4.current.focus();}} 
                  
                  /> 
                   
                    
                  <TextInput   style={{height:"60px",border:"0.5px solid lightgray",margin:"20px",width:"70px",textAlign:"center"}} ref={ref4}  maxLength={1} value={d}  secureTextEntry={true}  onChangeText={(value)=>{setD(value);ref5.current.focus();}} 
                  
                    /> 
                   
                   </div>
                  
                  
                  <button id="save" ref={ref5} onClick={ validate}>Enter</button>
                  </Pop > 
          </div>
          </SidebarFooter>
          </ProSidebar> </div>
            
               

             <div id='right'>

                <div id="searchbox" style={{display:"flex"}}>
                <FontAwesomeIcon style={{margin:"5px 10px 5px 0px"}}  icon={faSearch} />
                <p style={{margin:"2px 0px 5px 0px"}}>Search Files and Folders</p>
                </div>

            </div>
              <div id="right">
                <button id="addiconbutton" onClick={()=> setDarkMode(!darkMode)}><FontAwesomeIcon style={{padding:"0.5px "}} icon={darkMode ? faSun : faMoon}/>{darkMode ? " Light Mode" : " Dark Mode"}</button>
              
              <Popup trigger={<button id="addpopup" ><FontAwesomeIcon icon={faPlusCircle} style={{width:"30px",height:"25px"}} /></button>} position="bottom center" > 

                  <p onClick={()=>showPopUpFolder(true)} style={{cursor:"pointer"}}>New Folder</p>
                  <Pop trigger={popupFolder} setTrigger={showPopUpFolder} >
                  <h3 style={{fontSize:"14px"}}>Create Folder</h3>
                  <h5 style={{fontSize:"17px"}}>Enter Folder name</h5>
                  <TextInput style={{border:"0.5px solid lightgray",paddingRight:"140px",padding:"10px"} } placeholder="Enter here"></TextInput>
                  <button id="save">Create new</button>
                  </Pop>


                  <p onClick={()=>showPopUpFile(true)} style={{cursor:"pointer"}}>New File</p>
                  <Pop trigger={popupFile} setTrigger={showPopUpFile}  >
                    <h3 style={{fontSize:"14px"}}>Create File</h3>
                    <h5 style={{fontSize:"17px"}}>Enter File name</h5>
                    <TextInput style={{border:"0.5px solid lightgray",paddingRight:"140px",padding:"10px"} } placeholder="Enter here"  onChangeText={a=> setText(a)} defaultValue={""}></TextInput>
                    <h3 style={{fontSize:"14px"}}>Edit Text</h3>
                    <TextInput style={{border:"0.5px solid lightgray",paddingBottom:"500px",paddingRight:"200px",paddingLeft:"10px",paddingTop:"10px"}} placeholder={"Type anything here"}></TextInput>
                    <button id="save" onClick={createFile}>Create new</button>
                  </Pop>

              </Popup>
               
                
               <button id='addpopup'  onClick={()=>showPopUpSetting(true)}><FontAwesomeIcon icon={faSlidersH}  style={{width:"30px",height:"25px"}}/></button>

                
                <Pop  trigger={popupSetting} setTrigger={showPopUpSetting} >
                  <h3 style={{fontSize:"14px"}}>Set Pin</h3>
                  <h5 style={{fontSize:"18px"}}>Enter new pin</h5>
                  <TextInput style={{border:"0.5px solid lightgray",paddingRight:"140px",padding:"10px"} } secureTextEntry={true} placeholder={"Enter here"} onChangeText={a=>setnewpin(a)}/>
                  <h5 style={{fontSize:"18px"}}>Confirm new </h5>
                  <TextInput style={{border:"0.5px solid lightgray",paddingRight:"140px",padding:"10px"} } secureTextEntry={true} placeholder={"Enter here"} onChangeText={b=>setconfirmnewpin(b)}/><br/>
                  <button id="save" onClick={newPinfun}>Save changes</button>
                    
                  </Pop>
             </div>
             
        </div> 
        
    );
            };  

  
export default Main;