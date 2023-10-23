import React, { useEffect, useState } from 'react';
import './Merchant.css';
import {Table, Tabs} from 'antd';
import {ArrowLeftOutlined, CreditCardFilled, DeleteOutlined} from "@ant-design/icons"
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

export default function Merchant() {
  const [productname,setProductName] = useState('');
  const [productPrice,setProductPrice] = useState('');
  const [message, setMessage] = useState("");
  const [dataMerchant, setMerchantData] =  useState([]);
  const [discount,setDiscount] = useState("");


  const email = localStorage.getItem("email");
  const navigate = useNavigate();
  const handlesubmitProduct=()=>{
    const formData=new FormData();
    formData.append("productname",productname);
    formData.append("productPrice",productPrice);
    formData.append("discount",discount);
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
            timer: 1000,
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

  const columns = [
    {
      title: 'Sr N.',
      dataIndex: 'key',
    },
    {
      title: 'Productname.',
      dataIndex: 'productname',
    },
    {
      title: 'Product Price.',
      dataIndex: 'productPrice',
    },
    {
      title: 'Discount',
      dataIndex: 'discount',
    },
    {
      title: 'TotalPrice',
      dataIndex: 'totalprice',
    },
    {
      title: 'Action',
      dataIndex: "action",
      
    },
  ];
  const dataSource = dataMerchant.map((x,index)=>{
    return{
      key:index+1,
      productname:x.productname,
      productPrice: `Rs.${x.productPrice}.00`,
      discount: `${x.discount}%`,
      totalprice: `Rs.${(parseInt(x.productPrice)-(parseInt(x.productPrice)*parseInt(x.discount)/100))}.00`,
      action:  (<><DeleteOutlined onClick={()=>removeProduct(x._id)}/><Link to='/'  onClick={()=>editProduct(x._id)} style={{marginLeft: 20}} ><CreditCardFilled/></Link></>),
    }
  })

  const getmarchantOrderData=()=>{
    if (email && email !== "null" && email !== "undefined" && email !== ""){
      axios.get(`http://localhost:8000/MarchantProductget/${email}`,{ 
        headers:{
          Authorization: `${localStorage.getItem('token')}`,
          "Content-Type": "application/json",
        },
      }).then((res)=>{
      if(res.data.status==1){
        console.log("Backend Response getmarchantOrderData",res);
        setMerchantData(res?.data?.merchantProd);
        }
    }).catch((error)=>{
      console.log("merchant Get Data Error",error);
    });
    }else{
      console.log("plz enter a valid email.");
    }
  } 

  const removeProduct=(id)=>{
    console.log("hello worked",id);
    setMerchantData([]);
    const formdata=new FormData();
    formdata.append("email",email);
    axios.post(`http://localhost:8000/productdelete/${id}`,formdata,{
      headers:{
        Authorization: `${localStorage.getItem('token')}`,
        "Content-Type": "multipart/form-data",
      },
    }).then((res)=>{
      console.log("Product deleted successfully",res);
      if(res.data.status==1){
          Swal.fire({
            position: "center",
            icon: "success",
            title: res?.data?.message,
            showConfirmButton: false,
            timer: 1000,
          })
          getmarchantOrderData();
      }else{
        Swal.fire({
          position: "center",
          icon: "error",
          title: res?.data?.message,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }).catch((error)=>{ 
      console.log("backEnd merchant delete error", error);
      setMessage('someting went wrong');
    });
  }
  
// edit Product ka logic kaise likhe 
const editProduct=(id)=>{
  console.log(id);

}

  const onChange = (pagination, filters, sorter, extra,key) => {
    console.log('params', pagination, filters, sorter, extra,key );
  };

// main table view
  const items = [
    {
      key: '1',
      label: <h1>Create New Product</h1>,
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
            <div className='marchant_form_group1'>
              <label htmlFor='discount'>Discount</label>
              <input type="number" value={discount} name="discount" onChange={(e)=>{setDiscount(e.target.value)}} />
            </div>
            <div className='marchant_button1'>
             {productname.length>0&&productPrice.length>0&&discount>0?<button onClick={handlesubmitProduct}>submit</button>:<button style={{cursor:"not-allowed"}}>submit</button>}  <br/>
            </div>
            <Link to="/productUpdate" className='UpdateKey'><ArrowLeftOutlined/>UpdateProductDetail</Link>
          </div>
        </div>
      )
    },
    {
      key: '2',
      label: <h1>My Products</h1>,
      children: (
              <div className='merchant_get_data'>
                  <Table  columns={columns} dataSource={dataSource} onChange={onChange} />;
              </div>
      )
    },
  ];

  // All Merchant Data get.. 

 
  useEffect(()=>{
    getmarchantOrderData();
  },[email]);

  return (
    <div>
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        {/* <Table defaultActiveKey="2" getAllData={getAllData} columns={columns} items={columns} onChange={onChange} />; */}
    </div>
  )
}


