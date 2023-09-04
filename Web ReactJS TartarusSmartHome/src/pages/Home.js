import React, { useEffect, useState } from 'react'
import axios from 'axios'
import DeviceButton from '../component/DeviceButton';

export default function Home() {
  
  let [device,setDevice] = useState([]);
  
  let fetchDevice = async () => {
    try{
      const response = await axios.get("http://localhost:8080/device/getDevice", {
        headers: {
          'Content-Type': 'application/json',
          "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
      });
      setDevice(response.data);
    }catch (error){
      console.log(error);
    }
  };

  useEffect(()=>{
    fetchDevice();
  },[]);

  return (
    
      <div className='container'>
        {device.length > 0 &&
        device.map((device) => <DeviceButton key={device.idDevice} props={device} />)
        }
      </div>
  )
}
