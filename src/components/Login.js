import React, { useState } from "react";
import './LoginSignup.css'
import Axios from 'axios';

import user_icon from "../Assets/person.png"
import email_icon from "../Assets/email.png"
import password_icon from "../Assets/password.png"
import { useNavigate } from "react-router-dom";


const LoginSignup = () => {

  const [action, setAction] = useState("Sign Up");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  const [registerStatus, setRegisterStatus] = useState("");
  const navigate = useNavigate();

  const register = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3001/clients1", {
      email: email,
      username: username,
      password: password,
    }).then((response) => {
      setRegisterStatus(response);
      console.log(response);
      if(response.data.message){
        setRegisterStatus(response.data.message);
      }else{
        setRegisterStatus("ACCOUNT CREATED SUCCESSFULLY");
      }
      setAction("Sign Up")
    })
  }

  const login = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3001/login", {
      username: username,
      password: password,
    }).then((response) => {
      if(response.data.message){
        setLoginStatus(response.data.message);
      }else{
        setLoginStatus(response.data[0].email);
      }
      setAction("/Login")
    })
  }

  return (
    <div>
      <div className="container">
        <div className="header">
          <div className="text" >{action}</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          {action==="Login"?<div></div>:<div className="input">
            <img src={user_icon} alt="" />
            <input className="textInput" type="text" name="username" onChange={(e) => {setUsername(e.target.value)}} placeholder="Name" required />
          </div>
          }
          
          <div className="input">
            <img src={email_icon} alt="" />
            <input className="textInput" type="text" name="email" onChange={(e) => {setEmail(e.target.value)}} placeholder="Email Id" required />
          </div>
            <div className="input">
              <img src={password_icon} alt="" />
              <input className="textInput" type="password" name="password" onChange={(e) => {setPassword(e.target.value)}} placeholder="Password" required />
            </div>
        </div>
        {action==="Sign Up"? <div></div>:<div className="forgaot-password" onClick={() => {
                navigate("/reset");
              }}>Don't Know The Password?<span>Click Here!</span></div>}
        
        <div className="submit-container">
          <div className={action==="Login"?"submit gray":"submit"} onClick={register}>Sign Up</div>
          <div className={action==="Sign Up"?"submit gray":"submit"} onClick={login} >Login</div>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup;