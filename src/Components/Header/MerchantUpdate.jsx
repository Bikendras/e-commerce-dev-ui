import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function MerchantUpdate() {
    const {id} = useParams("");
    const navigate = useNavigate();
    const [productname,setProductName] = useState("");
    const [productPrice,setProductPrice] = useState("");
    const [discount,setDiscount] = useState("");
    const handleUpdateProduct=()=>{
        const formdata= new FormData();
        formdata.append("productname", productname);
        formdata.append("productprice", productPrice);
        formdata.append("discount",discount);
        axios.post(`http://localhost:8000/productupdate/${id}`,formdata,{
            headers:{
              Authorization: `${localStorage.getItem('token')}`,
              'content-type': 'multipart/form-data',
            }
          }).then((res)=>{
            console.log("Product updated Seccusses Response",res);
            if(res.data.status==1){
                setTimeout(function(){
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: res?.data?.message,
                        showConfirmButton: false,
                        timer: 1000,
                      })
                    navigate('/');
                }, 1000);
            }else{
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: res?.data?.message,
                    showConfirmButton: false,
                    timer: 1500,
                  });
            }
        }).catch((err)=>{
            console.log("Product is not updated backEnd Error Response",err);
        });
    }
  return (
    <div className='marchant_main'>
          <div className='marchant_form_1'>
            <div className='marchant_form_group1'>
              <label htmlFor='productname'>Productname</label>
              <input type="text" value={productname} name="productname" onChange={(e)=>{setProductName(e.target.value)}} />
            </div>
            <div className='marchant_form_group1'>
              <label htmlFor='productPrice'>ProductPrice</label>
              <input type="number" value={productPrice} name="productPrice" onChange={(e)=>{setProductPrice(e.target.value)}} />
            </div>
            <div className='marchant_form_group1'>
              <label htmlFor='discount'>Discount</label>
              <input type="number" value={discount} name="discount" onChange={(e)=>{setDiscount(e.target.value)}} />
            </div>
            <div className='marchant_button1'>
             {productname.length>0&&productPrice.length>0&&discount>0?<button onClick={handleUpdateProduct}>submit</button>:<button style={{cursor:"not-allowed"}}>submit</button>}  <br/>
            </div>
          </div>
        </div>
  )
}
