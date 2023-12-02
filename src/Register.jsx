import React, { useState } from 'react'
import './Register.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Message from './Components/Header/Message';
// import {FaEye,FaEyeSlash} from "react-icons/fa";
// import { status } from 'init';

export default function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirm_password] = useState("");
  const [getMessage, setGetMessage] = useState(false);
  const [status, setStatus] = useState("");
  const [role,setRole] = useState("");
  // const [disabled, setDisabled] = useState(false);
  const [checkbox, setCheckbox] = useState("");
  const [message, setMessage] = useState("");
  console.log("checkbox", checkbox);
  console.log("name", name);
  console.log("Address", address);
  console.log("password", password);
  console.log("confirm_password", confirm_password);
  console.log("Role", role);
  

  const handleCheckbox = (e) => {
    console.log("checkbox")
    setCheckbox(!checkbox);
  }

  const handleRegister = () => {
    if (password === confirm_password) {
      const formData = new FormData();
      formData.append("name", name)
      formData.append("email", email)
      formData.append("address", address)
      formData.append("password", password)
      formData.append("confirm_password", confirm_password)
      formData.append("checkbox", checkbox);
      formData.append("role", role);
      console.log("function called",formData);
      axios.post("http://localhost:8000/register", formData).then(function (res) {
        console.log("Backend response", res);
        if (res?.data?.status === 1) {
          setMessage(res?.data?.message);
          setGetMessage(true);
          setStatus(res?.data?.status);
          setTimeout(() => {
            navigate('/login');
            console.log("navigate Anothyer route");
          }, 2000)
        }
        else {
          setMessage(res?.data?.message);
          setGetMessage(true);
          setStatus(res?.data?.status);
          setTimeout(() => {
            setGetMessage(false);
          });
        }
      }).catch(function (error) {
        console.log("backend error", error);
        setMessage("Sometime went wrong");
      })
    } else {
      setMessage("password && confirm_password should be match");
    }
  }
  return (
    <div>
      {/* Registration */}
      <div className='Register_main'>
      {/* <center> */}
        <fieldset className='form'>

          <div>
            <h1>Registration / SignUp</h1><br />
            <div className='form_group'>
              <label htmlFor="name">Name</label>
              <input type="text" value={name} name='name' placeholder='Enter name' onChange={(e) => { setName(e.target.value) }} />
            </div>
            <div className='form_group'>
              <label htmlFor="email">Email</label>
              <input type="email" value={email} email='email' placeholder='Enter email' onChange={(e) => { setEmail(e.target.value) }} />
            </div>
            <div className='form_group'>
              <label htmlFor="address">Address</label>
              <input type="text" value={address} address='address' placeholder='Enter address' onChange={(e) => { setAddress(e.target.value) }} />
            </div>
            <div className='form_group'>
              <label htmlFor="password">Password</label>
              <input type="password" value={password} password='password' placeholder='Enter password' onChange={(e) => { setPassword(e.target.value) }} />
              {/* <span className='icons'>
                <FaEyeSlash/>
                </span> */}
            </div>
            <div className='form_group'>
              <label htmlFor="confirm_password">Confirm_password</label>
              <input type="text" value={confirm_password} confirm_password='cp' placeholder='Re-enter password' onChange={(e) => { setConfirm_password(e.target.value) }} />
            </div>
            <div className='checkRole'>
              <label>Role</label>
              <input type="radio" value="merchant" name='role' onChange={(e) => { setRole(e.target.value) }} style={{margitLeft: "50px"}}/><label htmlFor='role' style={{margitLeft: "5px"}}>Merchant</label>
              <input type="radio" value="customer" name='role' onChange={(e)=>{setRole(e.target.value)}}/><label htmlFor='role' style={{marginLeft: "5px"}}>Customer</label>
            </div>
            <div className='form_grou' htmlFor="checkbox">
              {/* <input type="checkbox" checked={disabled} check='checked' onChange={(e) => setDisabled(e.target.checked)}/> */}
              <input type="checkbox" onChange={(e) => {
                handleCheckbox(e);
              }}
                value={checkbox} name='checkbox' id='checkbox' 
              />
              All terms and Conditions are accepted.
            </div>
            <div className='form_button'>
              {name.length > 0 && email.length > 0 && password.length > 0 && confirm_password.length > 0 && address.length > 0 &&  checkbox ?
                <button onClick={handleRegister} style={{ cursor: "pointer" }}>Register</button> : <button style={{ cursor: "not-allowed" }} disabled>Register</button>}
            </div>
            <p>Already exist please <Link to="/login">Login</Link> </p>
            {getMessage?<Message message={message} status={status}/>:""}
          </div>
        </fieldset>
      {/* </center> */}
      </div>
    </div>
  )
}
 