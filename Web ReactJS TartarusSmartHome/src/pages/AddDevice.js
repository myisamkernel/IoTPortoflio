import React from 'react'
import axios from 'axios';
import { useRef } from 'react';
export default function AddDevice() {


    let deviceName = useRef("");
    let deviceType = useRef("");
    let deviceRunTime = useRef("");
    let deviceVoltSensitivity = useRef(0);


    let addDevice = async () => {
        console.log(deviceName.current.value);
        try{
          const response = await axios.post("http://localhost:8080/device/setDevice",{
            name:deviceName.current.value,
            type:deviceType.current.value,
            runTime:deviceRunTime.current.value,
            voltSensitivity:deviceVoltSensitivity.current.value
          }, {
            headers: {
              'Content-Type': 'application/json',
              "Authorization": `Bearer ${localStorage.getItem('token')}`
            }
          });
          console.log(response);
        }catch (error){
          console.log(error);
        }
      };
    
  return (
    <div className='addDeviceForm'>
      <table>
          <tr>
              <td>
                <label htmlFor="deviceName">device name</label>
              </td>
              <td>
                <input type='text' name='deviceName' ref={deviceName} required></input>
              </td>
          </tr>
          <tr>
              <td>
                <label htmlFor="deviceType">type</label>
              </td>
              <td>
                <input type='text' name='deviceType' ref={deviceType} required></input>
              </td>
          </tr>
          <tr>
              <td>
                <label htmlFor="deviceRuntime">RunTime</label>  
              </td>
              <td>
                <input type='text' name='deviceRuntime' ref={deviceRunTime}></input>
              </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="deviceVoltSensitivity">Volt Sensitivity</label>
            </td>  
            <td>
              <input type='text' name='deviceVoltSensitivity'ref={deviceVoltSensitivity}></input>
            </td>
          </tr>
          
        </table>
        <button style={{margin:"10px"}} onClick={()=>addDevice()}>Add device</button>
    </div>
  )
}
