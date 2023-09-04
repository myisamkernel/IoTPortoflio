import React, { useState } from 'react'
import '../App.css'
import axios from 'axios';
import { useNavigate,useLocation } from 'react-router-dom';
export default function Login() {

  const navigate = useNavigate();
  const location = useLocation();

  let [username,setUsername] = useState("");
  let [password,setPassword] = useState("");

  function setUsernameVar(data){
    setUsername(data);
  }

  function setPasswordVar(data){
    setPassword(data);
  }

  function login(){
    axios.post("http://localhost:8080/login",{
      username:username,
      password:password
    }).then((response)=>{
      localStorage.setItem('token',response.data.token);
      if(location.state === null){
        navigate("/");
      }else{
      navigate(location.state.from);
    }
    });
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
            <button className='loginButton' onClick={()=>{login()}}>Login</button>
          </div>
        
        </div>
    </div>
  )

}
