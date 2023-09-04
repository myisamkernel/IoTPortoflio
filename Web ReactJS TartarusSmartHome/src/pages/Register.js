import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function Register() {
  const navigate = useNavigate();

  let [username,setUsername] = useState("");
  let [password,setPassword] = useState("");

  function setUsernameVar(data){
    setUsername(data);
  }

  function setPasswordVar(data){
    setPassword(data);
  }

  function register(){
    axios.post("http://localhost:8080/register",{
      username:username,
      password:password
    }).then((response)=>{
        console.log(response);
        navigate('/login')
    }).catch((error)=>{
        console.log(error)
    })
  }
  return (
    <div className='loginBackground'>
      <div className='loginForm'>
        <h1 className='Logo'>Tartarus SmartHome Controller</h1>
         
          <div className='form'>
            <label htmlFor="username">Username </label>
            <input type='text' name='username' onChange={(data)=>{setUsernameVar(data.target.value)}}></input>
          </div>
         
          <div className='form'>
            <label htmlFor="password">Password </label>
            <input type='password' name='password' onChange={(data)=>{setPasswordVar(data.target.value)}}></input>
          </div>

          <div className='loginButtonContainer'>
            <button className='loginButton' onClick={()=>{register()}}>Register</button>
          </div>
        
        </div>
    </div>
  )
}
