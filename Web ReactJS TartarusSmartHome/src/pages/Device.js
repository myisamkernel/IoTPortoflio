import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function Device() {

  let username = useRef("");
  let command = useRef("");
  let idDevice = useParams();
  let [deviceLog,setDeviceLog]=useState([]);
  let headers = {
    headers: {
      'Content-Type': 'application/json',
      "Authorization": `Bearer ${localStorage.getItem('token')}`
    },}

  let premission = async (method) => {

    let bodyPremission = {
      username:username.current.value 
    }

    if(method === "post"){
      try{
        const response = await axios.post(`http://localhost:8080/premission/addpremission/${idDevice.id}`,
          bodyPremission, 
          { headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }}
        );
        console.log(response);
      }catch (error){
        console.log(error);
      }
    }else{
      try {
        const response = await fetch(`http://localhost:8080/premission/deletepremission/${idDevice.id}`, {
          method: 'DELETE',
          body: JSON.stringify(bodyPremission),
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        })
        const data = await response.json();
        console.log(data);
      //   console.log(headers)
      //   const response = await axios.delete(`http://localhost:8080/premission/deletepremission/${idDevice.id}`,
      //     bodyPremission,
      //     { headers: {
      //       'Authorization': `Bearer ${localStorage.getItem('token')}`
      //     }});
      //   console.log(response.data);
      }catch (error){
        console.log(error);
      }

    }
  };

  const commandPost = async () =>{
      try{
        let response = await axios.post(`http://localhost:8080/command/device/${idDevice.id}`,{
          command:command.current.value
        },headers);
        console.log(response);
      }catch(error){
        console.log(error);
      }
      
  };

  const fetchLog = async () => {
    try{
    
      let response = await axios.get(`http://localhost:8080/log/${idDevice.id}`,{
        headers:headers.headers
      });
      setDeviceLog(response.data);
      console.log(response.data);
    }catch(error){
        console.log(error);
    }finally{

    }
  }

  useEffect(()=>{
    fetchLog();
  },[])

  return (
    <div className='devicePanelContainer'>
    
    <table className='devicePanelForm'>
      
      <tr>
        <div >
          <table>
            <tr>
              <label htmlFor="username"  style={{marginRight:"10px"}}>Username</label>
              <input type="text" name="username" ref={username}></input>
            </tr>
          <button onClick={()=>{premission("post")}} style={{margin:'10px'}}>Add premission</button>
          <button onClick={()=>{premission("delete")}} style={{margin:'10px'}} >Delete premission</button>
          </table>
        </div>
      </tr>
      
      <tr>
        <div>
          <table>
            <tr>
              <label htmlFor="command" style={{marginRight:"10px"}}>Command</label>
              <input type="text" name='command' ref={command}></input>
            </tr>
            <button onClick={()=>{commandPost()}} style={{marginTop:'10px',marginLeft:'80px'}}>Submit command</button>
          </table> 
        </div>
      </tr>

    </table >
    
    <table className='logContainer'>
      <tr>
        <th>id Log</th>
        <th>Time</th>
        <th>Watt</th>
        <th>Volt</th>
      </tr>
      {deviceLog.map(log=>{
        return (
        <tr key={log.idLog} className='log'>
          <td className='logBlock'>{log.idLog}</td>
          <td className='logBlock'>{log.time}</td>
          <td className='logBlock'>{log.watt}</td>
          <td className='logBlock'>{log.volt}</td>
        </tr>);
        })}
    </table>  
      
    </div>
  )
}
