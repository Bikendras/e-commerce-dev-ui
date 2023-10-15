import axios from 'axios';
import React, { useState } from 'react'
import Swal from 'sweetalert2';

export default function Profile() {

  const [image,setImage]=useState();
    console.log(image);
    const [showImage,setShowImage]=useState(false);
    const email=localStorage.getItem('email');
    console.log("image data on change",email);
    // Login user ki photo and details show kar rahe hai by function  ..
    const handleUpload = (event)=>{
      // data ko backend pe store
      const formData= new FormData();
      // formData.append("image",event.target.files[0]);
      // console.log("image upload worked",event);
      // // image ko target karke image ko display kiya jayega..
      // setImage(event.target.files[0]);
      formData.append("image",image);
      event.preventDefault();
      axios.post(`http://localhost:8000/userImageUpload/${email}`,formData
      // ,{header:{
      //     Authorization: `${localStorage.getItem("token")}`,
      //     'Content-Type':'multipart/form-data',  // it upload the file like (image ,audio, video) into the server...
      //   },
      // }
      ).then((res)=>{
        console.log("Uploade image succes response",res);
        
        if(res?.data.status==1){
          console.log("backend Succes response in if",res);
          // return;
          // setShowImage(true);
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
        // throw new Error(error);
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




