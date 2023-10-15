import React from 'react'
import {useState} from 'react';
import { Button, Modal } from 'antd';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import axios, { Axios } from 'axios';

export default function OrderConfirm(props) {
  console.log("props Data", props);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const Navigate=useNavigate();
  const showModal = () => {
    setIsModalOpen(true);

  };
  const email = localStorage.getItem("email");
  const handleOk = () => {
    setIsModalOpen(false);
    const Id=Math.floor(Math.random(10)*10);
    console.log("Random product ID: " , Id);
    const orderID = `order_${Id}_product_1_user_${email}`;
    console.log("address,selection,Paymode,Payment_Date",props.address,props.selectOption,props.price,props.date);
    axios.post(`http://localhost:8000/user/${email}/OrderBooked`,
    {
      name: props.name,
      address: props.address,
      Payment_mode: props.selectOption,
      price: props.price,
      Delivery_date: props.date,
      Order_Id: orderID,
      status: "Placed"
    },{
      headers:{
        Authorization: `${localStorage.getItem('token')}`,
        "Content-Type": "multipart/form-data",
      },
    }
    ).then((res)=>{
        console.log("backend Response in OrderConfirm", res);
        if(res.data.status === 1){
          Swal.fire({
            position: 'center',
            icon: "success",
            title: res.data.message,
            showConfirmButton: false,
            timer: 1500,
          })
          setTimeout(function () {
            Navigate("/");
          },2000)
        }else {
          Swal.fire({
            position: 'center',
            icon: "error",
            title: res.data.message,
            showConfirmButton: false,
            timer: 1500,
          })
        }
    }).catch((error)=>{
        console.log("Error in OrderConfirm", error);
        Swal.fire({
        position: 'center',
        icon: "error",
        title: "Network error please check Connectivity",
        showConfirmButton: false,
        timer: 1500,
    })
    })
    
  };
  const handleCancel = () => {
    var text=window.confirm("Are you sure you want");
    if(text) {
      setIsModalOpen(false);
    }
  };
  return (
    <div>
      <Button type="primary" onClick={showModal}>
      Order_Confirm
      </Button>
      <Modal 
      title="Order-Invoice" 
      open={isModalOpen} 
      onOk={handleOk} 
      onCancel={handleCancel}>
        <p><span style={{fontWeight: "bold", fontSize: "30"}}>Address:</span> {props.address}</p>
        <p><span style={{fontWeight:"bold"}}>Payment mode:</span> {props.selectOption=="1"?"cash on Delivery":props.selectOption=="2"?"UPI":"Net Banking"}</p>
        <p><span style={{fontWeight:"bold"}}>Product Price:</span> {props.price}</p>
        <p><span style={{fontWeight:"bold"}}>Expected Delivery Date:</span> {props.date}</p>
      </Modal>
    </div>
  )
}


