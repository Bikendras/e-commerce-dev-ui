import axios from 'axios';
import React, { useState } from 'react'
import Swal from 'sweetalert2';

export default function Profile() {

  const [image,setImage]=useState();
    console.log(image);
    const [showImage,setShowImage]=useState(false);
    const email=localStorage.getItem('email');
    console.log("image data on change",email);
    const handleUpload = (event)=>{
      const formData= new FormData();
      formData.append("image",image);
      event.preventDefault();
      axios.post(`http://localhost:8000/userImageUpload/${email}`,formData
      ).then((res)=>{
        console.log("Uploade image succes response",res);
        
        if(res?.data.status==1){
          console.log("backend Succes response in if",res);
          Swal.fire({
            position: 'center',
            icon: "success",
            title: res.data.message,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }).catch((error)=>{
        console.log("Uploade image error response",error);
      })
    }
  return (
    <div>
      <h3>Profile_Upload</h3>
      <form onSubmit={handleUpload}>
        <label htmlFor='image'>Upload Photo</label>
        <input type="file" name='image' onChange={(e)=>setImage(e.target.files[0])} />
        <button type='submit' onClick={handleUpload}>Upload</button>
      </form>
    </div>
  );
}




