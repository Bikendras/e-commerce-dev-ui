import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';

export default function Profile() {

  const [image,setImage]=useState();
  const [allImages, setAllImages] = useState();
    console.log(image);
    const [showImage,setShowImage]=useState(false);
    const email=localStorage.getItem('email');
    console.log("image data on change",email);
    const handleUpload = (event)=>{
      const formData= new FormData();
      formData.append("image",image);
      event.preventDefault();
      axios.post(`http://localhost:8000/userImageUpload/${email}`,formData,{
        // main object 
        headers: {
          // key Authorization me localStorage se token ko lena hai aur token ko check karna hai ki token valid hai ki nhi...
          Authorization: `${localStorage.getItem("token")}`,
          // React me data ka type Application hota hai
          "Content-Type": "multipart/form-data",
        }
      }
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

    // const getImages=async (e)=>{
    //   axios.get(`http://localhost:8000/profile${email}`).then((res)=>{
    //   setAllImages(res.data.data);
    //   // handleUpload();
    //  }).catch((error)=>{
    //   console.log("Error getting",error);
    //  });
    // }

// useEffect(()=>{
//   getImages();
// },[email]);

  return (
    <div>
      <h3>Profile_Upload</h3>
      {/* <form onSubmit={handleUpload}> */}
        <label htmlFor='image'>Upload Photo</label>
        <input type="file" name='image' onChange={(e)=>setImage(e.target.files[0])} />
        <button type='submit' onClick={handleUpload}>Upload</button>
      {/* </form> */}
      {allImages == null ? "" :
        allImages.map((data)=>{
          return(
            <div>
                <img src={require(`../../../public/${data.image}`)} alt="" height={50} width={50} />
            </div>
          )
        })
      }

    </div>
  );
}




