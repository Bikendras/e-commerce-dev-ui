import React, { useState } from 'react'
import "./Forget.css";
import axios from 'axios';
import { Link } from 'react-router-dom';
export default function Forget() {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [new_password,setNew_password]=useState("");
    const [confirm_password,setConfirm_password]=useState("");
    const [message,setMessage]=useState("");

    const handelForget=()=>{
        if(new_password==confirm_password){
            const formData = new FormData();
            formData.append("email",email)
            formData.append("password",password)
            formData.append("new_password",new_password)
            formData.append("confirm_password",confirm_password)
            axios.post("http://localhost:8000/update",formData).then((res)=>{
                console.log("Backend response",res);
                if(res?.data?.status==1){
                    setMessage(res?.data?.Message)
                }
                else{
                    setMessage(res?.data?.Message)
                }
            }).catch((error)=>{
                console.log("Backend response",error);
                setMessage("Some time went wrong");
            })
        }else{
            setMessage("new_password && confirm_password shoud be same")
        }
    }
  return (
    <div>
        <div className='forget_main'>
        <center>
            <fieldset className='form2'>
            <div>
                <h1>Reset Password</h1><br />
                <div className='forget_group'>
                    <label htmlFor="email">Email</label>
                    <input type="text" value={email} email='email' placeholder='Enter Email' onChange={(e)=>{setEmail(e.target.value)}}/>
                </div>
                <div className='forget_group'>
                    <label htmlFor="password">Password</label>
                    <input type="text" value={password} password="password" placeholder='Enter old password' onChange={(e)=>{setPassword(e.target.value)}}/>
                </div>
                <div className='forget_group'>
                    <label htmlFor="New_Password">New password</label>
                    <input type="password" value={new_password} new_password="new_password" placeholder='Enter new password' onChange={(e)=>{setNew_password(e.target.value)}} />
                </div>
                <div className='forget_group'>
                    <label htmlFor="confirm_password">Confirm new password</label>
                    <input type="text" value={confirm_password} confirm_password="confirm_password" placeholder='Re-enter new password' onChange={(e)=>{setConfirm_password(e.target.value)}} />
                </div>
                <div className='forget_btn'>
                    {email.length>0 && password.length>0 && new_password>0 && confirm_password>0?
                    <button onClick={handelForget} style={{cursor:"pointer"}}>Reset</button>:<button style={{cursor:"not-allowed"}} disabled>Reset</button>}
                </div><br/>
                <p>GO back>> <Link to="/login">Click_me</Link> </p>
                <div className='message'>
                    <span style={{color:"red",backgroundColor:"black"}}>{message}</span>
                </div>
            </div>
            </fieldset>
        </center>
    </div>
    </div>
  )
}
