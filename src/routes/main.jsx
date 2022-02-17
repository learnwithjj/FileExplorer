// import { useState } from 'react';
import './main.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFile,faFolder,faPlusCircle,faSearch,faSun,faMoon,faLock,faSlidersH, faFolderOpen} from '@fortawesome/fontawesome-free-solid';
import React from 'react';
import Popup from 'reactjs-popup';
import Pop from '../Pop'; 
import { TextInput } from "react-native-web";


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
  
  const [text,setText]=React.useState('');
  const createFile = ()=>
   {
      if(text.length === 0)
      {
        alert("Enter file name !!");
      }
      
   }

    
    return(
        
    
        
        <div className='Main' style={{display : 'flex'}}>

            <div className='left'>      
                <img src='symbol.PNG' alt='' id="img1"></img> 
                <div style={{display: 'flex'}}>
                 <button id="addiconbutton" onClick={()=>showPopUpFile(true)} style={{cursor:"pointer"}}><FontAwesomeIcon icon={faFile} style={{padding: '0px 10px 0px 5px'}}/>Add File</button>
                 <Pop trigger={popupFile} setTrigger={showPopUpFile} >
                    <h3 style={{fontSize:"14px"}}>Create File</h3>
                    <h5 style={{fontSize:"17px"}}>Enter File name</h5>
                    <TextInput style={{border:"0.5px solid lightgray",paddingRight:"140px",padding:"10px"} } placeholder="Enter here"  onChangeText={a=> setText(a)} defaultValue={""}></TextInput>
                    <h3 style={{fontSize:"14px"}}>Edit Text</h3>
                    <TextInput style={{border:"0.5px solid lightgray",paddingBottom:"500px",paddingRight:"200px",paddingLeft:"10px",paddingTop:"10px"}} placeholder={"Type anything here"}></TextInput>
                    <button id="save" onClick={createFile}>Create new</button>
                  </Pop>

                 <button id="addiconbutton" onClick={()=>showPopUpFolder(true)} style={{cursor:"pointer"}}><FontAwesomeIcon icon={faFolder} style={{padding: '0px 10px 0px 5px'}}/>Add Folder</button>
                 <Pop trigger={popupFolder} setTrigger={showPopUpFolder} >
                  <h3 style={{fontSize:"14px"}}>Create Folder</h3>
                  <h5 style={{fontSize:"17px"}}>Enter Folder name</h5>
                  <TextInput style={{border:"0.5px solid lightgray",paddingRight:"140px",padding:"10px"} } placeholder="Enter here"></TextInput>
                  <button id="save">Create new</button>
                  </Pop>
                 
                 </div>
                <div>
                    <Menu items={menu}/>
                </div>
                 <button id="lockbutton"><FontAwesomeIcon icon={faLock} style={{paddingRight:'15px'}} />Lock Screen</button>
             </div>


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
                  <Pop trigger={popupFile} setTrigger={showPopUpFile} >
                    <h3 style={{fontSize:"14px"}}>Create File</h3>
                    <h5 style={{fontSize:"17px"}}>Enter File name</h5>
                    <TextInput style={{border:"0.5px solid lightgray",paddingRight:"140px",padding:"10px"} } placeholder="Enter here"  onChangeText={a=> setText(a)} defaultValue={""}></TextInput>
                    <h3 style={{fontSize:"14px"}}>Edit Text</h3>
                    <TextInput style={{border:"0.5px solid lightgray",paddingBottom:"500px",paddingRight:"200px",paddingLeft:"10px",paddingTop:"10px"}} placeholder={"Type anything here"}></TextInput>
                    <button id="save" onClick={createFile}>Create new</button>
                  </Pop>

              </Popup>
               
                
               <button id='addpopup'  onClick={()=>showPopUpSetting(true)}><FontAwesomeIcon icon={faSlidersH}  style={{width:"30px",height:"25px"}}/></button>

                
                <Pop  trigger={popupSetting} setTrigger={showPopUpSetting}>
                  
                  <h3 style={{fontSize:"14px"}}>Set Pin</h3>
                  <h5 style={{fontSize:"18px"}}>Enter new pin</h5>
                  <TextInput style={{border:"0.5px solid lightgray",paddingRight:"140px",padding:"10px"} } secureTextEntry={true} placeholder={"Enter here"} />
                  <h5 style={{fontSize:"18px"}}>Confirm new </h5>
                  <TextInput style={{border:"0.5px solid lightgray",paddingRight:"140px",padding:"10px"} } secureTextEntry={true} placeholder={"Enter here"}/><br/>
                  <button id="save">Save changes</button>
                    
                  </Pop>
             </div>
             
        </div> 
        
        );
        
        function Menu({items})
        {
            const [displayChildren,setDisplayChildren]=React.useState({});
            return(
         <ul>
        {items.map((item)=>
        (
          <div key={item.title}>  <button id='displayFolder'  onClick={()=> {setDisplayChildren(
            {...displayChildren,[item.title]: !displayChildren[item.title],
          });
    }}> {displayChildren[item.title] ? <FontAwesomeIcon icon={faFolderOpen}/> : <FontAwesomeIcon icon={faFolder}/>  }    {item.title } </button>  {displayChildren[item.title] && item.children && <Menu items={item.children}/>}  </div>

        ))}
      </ul>
            );
        }
      
}export default Main;