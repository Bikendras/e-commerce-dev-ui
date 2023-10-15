import React, { useState } from 'react';
import './Merchant.css';
import {Tabs} from 'antd';
import {ArrowLeftOutlined} from "@ant-design/icons"
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

export default function Merchant() {
  const [productname,setProductName] = useState('');
  const [productPrice,setProductPrice] = useState('');
  const [message, setMessage] = useState("");
  const email = localStorage.getItem("email");
  const navigate = useNavigate();
  const handlesubmitProduct=()=>{
    const formData=new FormData();
    formData.append("productname",productname);
    formData.append("productPrice",productPrice);
    console.log("formdata",formData);

    axios.post(`http://localhost:8000/MarchantProductInsert/${email}`, formData,{
      headers:{
        Authorization: `${localStorage.getItem('token')}`,
        "Content-Type": "multipart/form-data",
      },
    }).then(function(res){
      console.log("Marchant_Product_insert Success Response",res);
      if(res?.data.status==1){
        setTimeout(()=>{
          Swal.fire({
            position: "center",
            icon: "success",
            title: res?.data?.message,
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/")
        },2000);
      }
      else{
        Swal.fire({
          position: "center",
          icon: "error",
          title: res?.data?.message,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }).catch(function(err){
      console.log("Marchant_Product_insert Error Response",err);
      setMessage("Sometime went wrong");
    });
  };
console.log("productname",productname);
console.log("productPrice",productPrice);
  // this is Merchant data.....
  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: '1',
      label: 'Create New Product',
      children: (
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
            <div className='marchant_button1'>
              <button onClick={handlesubmitProduct}>submit</button> <br/>
            </div>
            <Link to="/productUpdate" className='UpdateKey'><ArrowLeftOutlined/>UpdateProductDetail</Link>
          </div>
        </div>
      )
    },
    {
      key: '2',
      label: 'My Products',
      children: 'Product page',
    },
  ];
  return (
    <div><Tabs defaultActiveKey="1" items={items} onChange={onChange} /></div>
  )
}

