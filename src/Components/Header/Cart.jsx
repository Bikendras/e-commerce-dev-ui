import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import {Card,Empty} from 'antd';
import { Link } from 'react-router-dom';
import axios from 'axios';


export default function Cart() {
  const [cartData,setCartData]=useState([]);
  const email = localStorage.getItem('email');

  const handleProductRemove = (id)=>{
    setCartData([]);
    const formdata=new FormData();
    formdata.append("email" , email);
    axios.post(`http://localhost:8000/user/cardremove/${id}`, formdata).then((res)=>{
    if(res.data.status == 1){
      Swal.fire({
        position: 'center',
        icon: "success",
        title: "Delete Successfully",
        showConfirmButton: false,
        timer: 1500
      });
      getCartData()
    }
    }).catch((error)=>{
      console.log("Not Removed",error);
    })
  };

  const getCartData = ()=>{
    axios.get(`http://localhost:8000/user/mygetCardApi/${email}`).then((res)=>{
      if(res.data.status ==1){
        console.log("res. data",res.data);
        setCartData(res?.data?.mygetCardData);
      }
    }).catch((err)=>{
      console.log("Cart Reject", err);
    });
  };
  useEffect(()=>{
    getCartData();
    },[]);

  return (
    <div>
        <div>
          {cartData.length>0?
          cartData.map((x)=>{
            return (
              <div className='product_main'>
       <Card title={x.name}>
         <div className="imgpro">
           <img src={`../../${x.image}`} alt="Product_img" className='card_img'/>
         </div>
         <div className='product_description'>
           <p>price:Rs{x.price}</p>
          {x.Discount && <p>Discount: {x.Discount}</p>}
           <p>Total Amount: {x.price}</p>
         </div>
         <div>
           <Link className='addcart'><span style={{color:"white"}}>See Details...</span></Link>&nbsp;&nbsp;
           <Link className='buybtn' onClick={(e) => handleProductRemove(x._id)}><span style={{color:"white"}}>Remove</span></Link>
         </div>
       </Card>
      </div>
            )
          })
          : <Empty /> }
        </div>
    </div>
  )
}

