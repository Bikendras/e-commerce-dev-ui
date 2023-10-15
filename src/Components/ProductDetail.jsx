import React, { useEffect, useState } from 'react'
import './ProductDetail.css';
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';


// import './Home.css';

import { Card } from 'antd';
// useParams react router don ki methode hai.
import { useParams } from 'react-router-dom'
import axios from 'axios';

export default function ProductDetail() {
  const [productdataDetailes, setproductdataDetailes] = useState("");

  const productData = [
    {
      id: 1,
      name: "Mobile",
      image: "Phone1.webp",
      price: "15000",
      Discount: "15%",
      Description: ["6 GB RAM | 128 GB ROM | Expandable Upto 1 TB",
        "22.1 cm (8.7 inch) HD Display",
        "8 MP Primary Camera | 5 MP Front",
        "Android 11 | Battery: 6400 mAh Lithium Ion",
        " Voice Call (Dual Sim, GSM|WCDMA|LTE FDD|TD-LTE)",
        "Processor: ARM A75, Unisoc T616"],
      Reviews: ["very good thanks flipakrts", "good camera Quelity", "nice Prodect", "battery service is not good"]
    },
    {
      id: 2,
      name: "Desktop",
      image: "Desktop.webp",
      price: "5000",
      Discount: "8%",
      Description: ["Lenovo G Series 23.8 inch Full HD LED Backlit IPS Panel Gaming Monitor (G24-20)",
        "Panel Type: IPS Panel",
        "Screen Resolution Type: Full HD",
        "Brightness: 350 nits",
        "Response Time: 0.5 ms | Refresh Rate: 144 Hz",
        "HDMI Ports - 2"],
      Reviews: ["very good thanks flipakrts", "Good quality product", "Highly recommended", "Fabulous!", "Mind-blowing purchase"]
    },
    {
      id: 3,
      name: "Bags",
      image: "Bags.webp",
      price: "900",
      Discount: "10%",
      Description: ["Capacity: 49 L",
        "Color: Blue",
        " Weight: 2.5 kg",
        "External Width: 38 cm",
        "External Height: 55 cm",
        "External Depth: 23 cm",
        "Warranty Summary: 3 Years",
        "Domestic Warranty: 3 Year",
        "International Warranty: 3 Year"],
      Reviews: ["Best product with best service", "good product", "Fantastic trolley bag", "Good product Really awesome"]
    },
    {
      id: 4,
      name: "Refrigreter",
      image: "frezz.jpg",
      price: "40000",
      Discount: "17%",
      Description: ["LG 242 L Frost Free Double Door 3 Star Refrigerator with Smart Inverter",
        "Smart Diagnosis",
        "Auto Smart Connect Technology",
        "Moist ‘N’ Fresh Fruit and Vegetable Storage",
        "Toughened Glass Shelves",
        "Large Bottle Storage",
        "Double Twist Ice Tray",
        "Antibacterial Gasket"],
      Reviews: ["very good thanks flipakrts", "Great product", "Absolute rubbish!", "Terrific purchase"]
    },
    {
      id: 5,
      name: "Laptop",
      image: "Laptop1.webp",
      price: "54000",
      Discount: "9%",
      Description: ["HP 15s (2023) Intel Core i5 1155G7 11th Gen",
        "16 GB/512 GB SSD",
        "15.6 Inch, Natural Silver, 1.69 Kg, With MS Office",
        "64 bit Windows 11 Operating System",
        "39.62 cm (15.6 inch) display"],
      Reviews: ["Nice product", "good camera Quelity", "Terrific purchase", "battery service is good", "Mind-blowing purchase"]
    },
    {
      id: 6,
      name: "Watch",
      image: "Watch1.webp",
      price: "4000",
      Discount: "11%"
    },
    {
      id: 7,
      name: "PowerBank",
      image: "Power_Bank.webp",
      price: "1000",
      Discount: "9%"
    },
    {
      id: 8,
      name: "SmartWatch",
      image: "Watch2.webp",
      price: "84000",
      Discount: "11%"
    },
    {
      id: 9,
      name: "Camera",
      image: "Camera.webp",
      price: "17000",
      Discount: "9%"
    },
    {
      id: 10,
      name: "Printer",
      image: "Printer.webp",
      price: "7000",
      Discount: "12%"
    },
    {
      id: 11,
      name: "Shoes",
      image: "Shoes.webp",
      price: "3500",
      Discount: "9%"
    },
    {
      id: 12,
      name: "T shirt",
      image: "T_shirt3.jpg",
      price: "1190",
      Discount: "9%"
    },
  ]
  const cartData = [];
  const handleAddCard = () => {
    // Add cart Data Successfully in click to button....
    const email = localStorage.getItem('email');
    const formdata= new FormData();
    formdata.append("image",productData[id - 1].image);
    formdata.append("name",productData[id - 1].name);
    formdata.append("price",productData[id - 1].price);
    formdata.append("Discount",productData[id - 1].Discount);
    console.log("formdata",formdata);
    axios.post(`http://localhost:8000/user/myaddCardApi/${email}`,formdata).then((res)=>{
      if(res.data.status==1){
        console.log("Add TO Card BackEnd Response",res);
        Swal.fire({
        position: 'center',
        icon: "success",
        title: "Added Successfully",
        showConfirmButton: true,
       })
      }
    }).catch((err)=>{
      console.log("Add TO Card BackEnd Error",err);
    });

  }

  useEffect(() => {
    console.log("Product data by id", productData[id - 1]);
    // useParams se jis bhi product ki id milegi usi product ko show karege product detail pe.
    setproductdataDetailes(productData[id - 1]);
  }, []);

  const { id } = useParams("");
  console.log("id", id);

  return (
    <div className='product_main1'>
      <div className='product_img1'>
        <div>
          <img src={`../../${productdataDetailes.image}`} alt="Product_img" className='card_img1' />
        </div>
      </div>
      <div className='Description'>
        <h1 class="font-bold">{productdataDetailes.name}</h1>
        <p>price: {productdataDetailes.price}</p>
        <p>Discount: {productdataDetailes.Discount}</p>
        <p style={{marginBottom:"20px"}}>Total Amount: {(parseInt(productdataDetailes.price) - (parseInt(productdataDetailes.price) * parseInt(productdataDetailes.Discount) / 100))}</p>
        <Link to='' className='addcart1' onClick={handleAddCard}><span >Add Cart</span></Link> &nbsp; &nbsp; &nbsp;
        <Link to={`/checkout/Id/${id}`} className='buybtn1'><span>Buy</span></Link>
        {/* Product Description */}
        {/* Product Details agar array me hogi tabhi sho hogi nhi to detaile nhi dikhe gi becouse conditional rendring ki gayi hai.. */}
        <div className='Detail_1'>
          {/* Product Amount Detail */}
          {productdataDetailes?.Description?.length > 0 ? <span>Details:</span> : " "}
          {productdataDetailes?.Description?.map((detail) => {
            return (
              <ul>
                <li> {detail}</li>
              </ul>
            );
          })}

          {/* Reviews Details */}
          {productdataDetailes?.Reviews?.length > 0 ? <span>Reviews:</span> : " "}
          {productdataDetailes?.Reviews?.length > 0 ? productdataDetailes?.Reviews?.map((review) => {
          return (
            <ul>
              <li>{review}</li>
            </ul>
          );
        }) : " "}
        </div>
        {/* Product Details agar array me hogi tabhi sho hogi nhi to detaile nhi dikhe gi becouse conditional rendring ki gayi hai.. */}
      </div>
    </div>
  )
}


