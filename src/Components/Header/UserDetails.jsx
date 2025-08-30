import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Profile from './Profile';

export default function UserDetails() {
    // Update Detailes
    const [name,setName]=useState("")
    const [address,setAddress]=useState("")
    const navigate=useNavigate();
    const email=localStorage.getItem("email");

    const handleUpdate=()=>{
      console.log(name,address);

    const formData=new FormData();
    formData.append("name",name);
    formData.append("address",address);
    axios.post(`http://localhost:8000/update/${email}`,formData,{
      headers:{
        Authorization: `${localStorage.getItem('token')}`,
        'content-type': 'multipart/form-data',
      }
    }).then((res)=>{
      console.log("backEnd Response Update Profile",res);
      if(res?.status===1){
        console.log("backEnd Response Update Profile",res);
        
        setTimeout(()=>{
          navigate("/");
        },2000);
      }
      else{
        // setAddress(res?.data?.address);
      }
    }).catch((error)=>{
      console.log("backend Error response",error);
    });

    }


  return (
    <div>
        <Profile/>
        <h1>Update Profile</h1><br />

            <div className='form_group'>
              <label htmlFor="email" className='name'>email</label>
              <input type="text" value={email} name='email' readOnly />
            </div>
            <div className='form_group'>
              <label htmlFor="name" className='name'>Name</label>
              <input type="text" value={name} name='name' placeholder='Enter name' onChange={(e) => { setName(e.target.value) }} />
            </div>
            <div className='form_group'>
              <label htmlFor="address">Address</label> 
              <input type="text" value={address} name='address' placeholder='Enter address' onChange={(e) => { setAddress(e.target.value) }} />
            </div>
            <Link to=''className='addcart1'><span onClick={handleUpdate}>Update Profile</span></Link>
    </div>
  )
}





