import {ProSidebar,SidebarHeader} from "react-pro-sidebar";
import './main.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFile,faFolder,faPlusCircle,faSearch,faSun,faMoon,faLock,faSlidersH, faFolderOpen,faArrowAltCircleLeft,faArrowAltCircleRight} from '@fortawesome/fontawesome-free-solid';
import React from 'react';
import Popup from 'reactjs-popup';
import Pop from '../Pop'; 
import { TextInput } from "react-native-web";
import {useLocation} from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";


function Main()
{
  const completeStructure = [
    {
      title: 'Folder 1',
      id:Math.random,
      path:[0],
      type:"folder",
      children: [
        {
          title: 'Sub1',
          id:Math.random,
          type:"folder",
          path:[0,0],
          children: [
            {
              title: 'Sub-Sub1',
              path:[0,0,0],
              type:"folder",
              id:Math.random,
              children:[]
            },
          ],
        },
        {
          title: 'Sub2',
          id:Math.random,
          type:"folder",
          path:[0,1],
          children:[]
        },
      ],
    },
    {
      title: 'Folder 2',
      id:Math.random,
      type:"folder",
      path:[1],
      children: [
        {
          title: 'Sub 3',
          path:[1,0],
          id:Math.random,
          type:"folder",
          children:[]
        },
        {
          title: 'File 1',
          path:[1,1],
          id:Math.random,
          type:"file",
          children:[]
        },
      ],
    },
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
        setA("");
        setB("");
        setC("");
        setD ("");
        ref1.current.focus();
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
    
   
    function Menu({ items }) {
      const [displayChildren, setDisplayChildren] = React.useState({});
      
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
                      }, Updatecrumbs(item.title,item.path,item.type),localStorage.setItem("value",JSON.stringify(item.path)));
                    }}  
                  >
                   {item.type === "file" ? <FontAwesomeIcon icon={faFile}/>: displayChildren[item.title] ? <FontAwesomeIcon icon={faFolderOpen}/> : <FontAwesomeIcon icon={faFolder}/>   }    {item.title } {" "}
                  </button>
                
                {displayChildren[item.title]  && item.children && <Menu items={item.children} />}
              </div>
            );
          })}
        </ul>
      );
    }
    
    var bread="/"; 
    const [breadc,setBreadc]=React.useState("");
    function Updatecrumbs(crumb,source,type)
    {    
      if(type === "folder")
    {
      if(source.length === 1)
      {
        bread="";
        bread+=crumb+"/";
      }
      else{
        bread+=crumb+"/";

      } 
    }
      setBreadc(bread);
      localStorage.setItem('crumb',bread);
      }
      const DisplayCrumb =({displaycrumb})=>
  {
    const [value,setValue]=React.useState("");
    React.useEffect(()=>
    {
      setValue(breadc);
    },[]);
    return(<div>{value }</div>)
  }

    const [foldername,setFoldername]=React.useState(false);
    const [textEdit,setTextEdit]=React.useState(false);
    const [filename,setFilename]=React.useState(false);
    function addFolder()
    {
      if(foldername.length === 0)
      {
        alert("Enter folder name!!");
        return;
      }
      else 
      {
       localStorage.setItem("addFolder","yes"); 
       showPopUpFolder(false); 
      }
    }
    function addFile()
    {
      if(filename.length === 0)
      {
        alert("Enter file name!!");
        return;
      }
      else 
      {
       localStorage.setItem("addFile","yes"); 
       showPopUpFile(false); 
      }
    }
    React.useEffect(()=>
    {
      if(localStorage.getItem("addFile")==="yes")
      {
        var currpos=localStorage.getItem("value");
        if(currpos.length === 3)
        {
          var pos=currpos.charAt(1);
          completeStructure[pos].children.push(
            {
              title:filename,
              id:Math.random,
              type:"file",
              path:[pos,completeStructure[pos].children.length],
              text:textEdit,
              children:[]
            }
          )
          localStorage.setItem("add","no");
        }
        else if(currpos.length === 5)
        {
          var pos1=currpos.charAt(1);
          var pos2=currpos.charAt(3);
          completeStructure[pos1].children[pos2].children.push(
            {
              title:filename,
              id:Math.random,
              type:"file",
              path:[pos1,pos2,completeStructure[pos1].children[pos2].children.length],
              text:textEdit,
              children:[]
            })
            localStorage.setItem("add","no");
        }
        else if(currpos.length === 7)
        {
          // var pos1=currpos.charAt(1);
          var p1=currpos.charAt(1);
          var p2=currpos.charAt(3);
          var pos3=currpos.charAt(5);
          completeStructure[p1].children[p2].children[pos3].children.push(
            {
              title:filename,
              id:Math.random,
              type:"file",
              path:[p1,p2,pos3,completeStructure[p1].children[p2].children[pos3].children.length],
              text:textEdit,
              children:[]
            })
            localStorage.setItem("add","no");
        }
      }
    })
 
    React.useEffect(()=>
    {
      if(localStorage.getItem("addFolder")==="yes")
      {
        var currpos=localStorage.getItem("value");
        if(currpos.length === 3)
        {
          var pos=currpos.charAt(1);
          completeStructure[pos].children.push(
            {
              title:foldername,
              id:Math.random,
              type:"folder",
              path:[pos,completeStructure[pos].children.length],
              children:[]
            }
          )
          localStorage.setItem("add","no");
        }
        else if(currpos.length === 5)
        {
          var pos1=currpos.charAt(1);
          var pos2=currpos.charAt(3);
          completeStructure[pos1].children[pos2].children.push(
            {
              title:foldername,
              id:Math.random,
              type:"folder",
              path:[pos1,pos2,completeStructure[pos1].children[pos2].children.length],
              children:[]
            })
            localStorage.setItem("add","no");
        }
        else if(currpos.length === 7)
        {
          // var pos1=currpos.charAt(1);
          var p1=currpos.charAt(1);
          var p2=currpos.charAt(3);
          var pos3=currpos.charAt(5);
          completeStructure[p1].children[p2].children[pos3].children.push(
            {
              title:foldername,
              id:Math.random,
              type:"folder",
              path:[p1,p2,pos3,completeStructure[p1].children[p2].children[pos3].children.length],
              children:[]
            })
            localStorage.setItem("add","no");
        }
      }
    })
 
    const ref1=React.useRef();
    const ref2=React.useRef();
    const ref3=React.useRef();
    const ref4=React.useRef();
    const ref5=React.useRef();
    

      const [menuCollapse, setMenuCollapse] = React.useState(false)
    const menuIconClick = () => {
      menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
    };

    React.useEffect(()=>
    {
      if(!menuCollapse)
      {
        document.body.classList.add("collapsed");
      }
      else
      {
        document.body.classList.remove("collapsed");
      }
    },[menuCollapse]);
    
    
    function Display({items})
  {
    console.log(localStorage.getItem("children"));
    return(
        items.map((item)=>
        (
          <div style={{margin:"40px"}}>
          {item.type === "folder" ? <div><img src="Folder.png" alt=""/><p style={{color:"cadetblue"}}>{item.title}</p> </div>: <div><img src="File.png" alt=""/><p style={{color:"cadetblue"}}>{item.title}</p> </div>}</div>
          
        ))
    );
  }
  
  
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
         <div className="left" >
          <img src='symbol.PNG' alt='' id="img1"></img> 
                <div style={{display: 'flex'}}>
                 <button id="addiconbutton" onClick={()=>showPopUpFile(true)} style={{cursor:"pointer"}}><FontAwesomeIcon icon={faFile} style={{padding: '0px 10px 0px 5px'}}/>Add File</button>
                 
                 <Pop trigger={popupFile} setTrigger={showPopUpFile} >
                    <h3 style={{fontSize:"14px"}}>Create File</h3>
                    <h5 style={{fontSize:"17px"}}>Enter File name</h5>
                    <TextInput style={{border:"0.5px solid lightgray",paddingRight:"140px",padding:"10px"} } placeholder="Enter here"  onChangeText={a=> setFilename(a)} ></TextInput>
                    <h3 style={{fontSize:"14px"}}>Edit Text</h3>
                    <TextInput style={{border:"0.5px solid lightgray",paddingBottom:"200px",paddingRight:"200px",paddingLeft:"10px",paddingTop:"10px"}} placeholder="Type anything here" onChangeText={a=>setTextEdit(a)}></TextInput>
                    <button id="save" onClick={addFile } >Create new</button>
                  </Pop>
                  
                 <button id="addiconbutton" onClick={()=>showPopUpFolder(true)} style={{cursor:"pointer"}}><FontAwesomeIcon icon={faFolder} style={{padding: '0px 10px 0px 5px'}}/>Add Folder</button>
                 
                 <Pop trigger={popupFolder} setTrigger={showPopUpFolder}>
                  <h3 style={{fontSize:"14px"}}>Create Folder</h3>
                  <h5 style={{fontSize:"17px"}}>Enter Folder name</h5>
                  <TextInput style={{border:"0.5px solid lightgray",paddingRight:"140px",padding:"10px"} } placeholder="Enter here" onChangeText={a=>setFoldername(a)}></TextInput>
                  <button id="save" onClick={addFolder} >Create new</button>
                  
                  </Pop> 
                 
                 </div>
                <div>
                    <Menu items={completeStructure}/> 
                </div>

                 <button id="lockbutton"  onClick={()=>{showpopupLock(true); }  }><FontAwesomeIcon icon={faLock} style={{paddingRight:'15px'}} />Lock Screen</button>
                 <Pop trigger={popupLock} >
                 <h3 style={{fontSize:"18px",marginLeft:"30px"}} >Enter Account Pin</h3> 
                   <div style={{display:"flex"}} >
                  <TextInput  style={{height:"60px",border:"0.5px solid lightgray",margin:"20px",width:"70px",textAlign:"center"}} ref={ref1}  maxLength={1} value={a}  secureTextEntry={true}  onChangeText={(value)=>{setA(value);ref2.current.focus();}  }  />      
                  <TextInput  style={{height:"60px",border:"0.5px solid lightgray",margin:"20px",width:"70px",textAlign:"center"}} ref={ref2} maxLength={1} value={b}  secureTextEntry={true}  onChangeText={(value)=>{setB(value);ref3.current.focus();}}/> 
                  <TextInput   style={{height:"60px",border:"0.5px solid lightgray",margin:"20px",width:"70px",textAlign:"center"}} ref={ref3}  maxLength={1} value={c}  secureTextEntry={true}  onChangeText={(value)=>{setC(value);ref4.current.focus();}} /> 
                  <TextInput   style={{height:"60px",border:"0.5px solid lightgray",margin:"20px",width:"70px",textAlign:"center"}} ref={ref4}  maxLength={1} value={d}  secureTextEntry={true}  onChangeText={(value)=>{setD(value);ref5.current.focus();}} /> 
                   </div>
                   
                  <button id="save" ref={ref5} onClick={ validate}>Enter</button>
                  </Pop > 
          </div>
          
         </ProSidebar>

          </div>
          <div id='right'>

            <div id="searchbox" style={{display:"flex"}}>
            <FontAwesomeIcon style={{margin:"5px 10px 5px 0px"}}  icon={faSearch} />
            <TextInput type="text"  placeholder="Search " />
            </div>
                <div id="crumb"><DisplayCrumb displaycrumb={breadc}/> </div>


                <div id="display" >
                <Display items={completeStructure}/>
                </div>
                </div>


              <div id="right">
                <button id="addDarkMode" onClick={()=> setDarkMode(!darkMode)}><FontAwesomeIcon style={{padding:"0.5px "}} icon={darkMode ? faSun : faMoon}/>{darkMode ? " Light Mode" : " Dark Mode"}</button>
              
              <Popup trigger={<button id="addpopup" ><FontAwesomeIcon icon={faPlusCircle} style={{width:"30px",height:"25px"}} /></button>} position="bottom center" > 

                  <p onClick={()=>showPopUpFolder(true)} style={{cursor:"pointer"}}>New Folder</p>
                  <Pop trigger={popupFolder} setTrigger={showPopUpFolder} >
                  <h3 style={{fontSize:"14px"}}>Create Folder</h3>
                  <h5 style={{fontSize:"17px"}}>Enter Folder name</h5>
                  <TextInput style={{border:"0.5px solid lightgray",paddingRight:"140px",padding:"10px"} } placeholder="Enter here"></TextInput>
                  <button id="save" onClick={addFolder} >Create new</button>
                  </Pop>


                  <p onClick={()=>showPopUpFile(true)} style={{cursor:"pointer"}}>New File</p>
                  <Pop trigger={popupFile} setTrigger={showPopUpFile} >
                    <h3 style={{fontSize:"14px"}}>Create File</h3>
                    <h5 style={{fontSize:"17px"}}>Enter File name</h5>
                    <TextInput style={{border:"0.5px solid lightgray",paddingRight:"140px",padding:"10px"} } placeholder="Enter here"  onChangeText={a=> setFilename(a)} ></TextInput>
                    <h3 style={{fontSize:"14px"}}>Edit Text</h3>
                    <TextInput style={{border:"0.5px solid lightgray",paddingBottom:"200px",paddingRight:"200px",paddingLeft:"10px",paddingTop:"10px"}} placeholder="Type anything here" onChangeText={a=>setTextEdit(a)}></TextInput>
                    <button id="save" >Create new</button>
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