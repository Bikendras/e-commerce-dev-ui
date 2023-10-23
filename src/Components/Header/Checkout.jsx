import React, { useEffect, useState } from 'react'
import '../ProductDetail.css';
import { Card } from 'antd';
import { ArrowLeftOutlined, MinusOutlined } from "@ant-design/icons"
import { Link, Navigate, useParams } from 'react-router-dom';
import OrderConfirm from './OrderConfirm';
import axios from 'axios';

export default function Checkout() {
  const [address, setAddress] = useState("");

  // create a object of an array of cards data.
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

  // Delivery time...
  var someDate = new Date();
  someDate.setDate(someDate.getDate() + 2); //number  of days to add, e.x. 15 days
  var dateFormated = someDate.toISOString().substr(0, 10);

  const [selectAddress, setselectAddress] = useState(false);
  const [checkoutProduct, setCheckoutProduct] = useState(""); // first of all take a params id than put id inside a checkoutProduct name this state, and take this this id sothat only that this card detrails.
  const [details, setDetails] = useState(false); // and if about the some payment Details so initial state false than take a payment details so true.
  const [selectOption, setSelectOption] = useState(""); // choice the multiple options.
  const [iscontinue, setIscontinue] = useState(false);
  const { id } = useParams("");
  // after login get a email in user
  const email = localStorage.getItem("email");
  // fetched a Address from this API...
  useEffect(() => {
    // after login get a email in user then run a UseEffect method
    if (email) {
      axios.get(`http://localhost:8000/specificUser/${email}`,
        {
          // main object 
          headers: {
            // key Authorization me localStorage se token ko lena hai aur token ko check karna hai ki token valid hai ki nhi...
            Authorization: `${localStorage.getItem("token")}`,
            // React me data ka type Application hota hai
            "Content-Type": "Application/json",
          }
        }).then((res) => {
          // use email se token mil jata hai to backend ka data print ho jayega..
          console.log("backend success response Fached Address", res);
          // aur us backend ke response se ham us user ka Address nikal rahe hai..
          setAddress(res?.data?.user_data?.address);
        }).catch((error) => {
          console.log("backend error response not fached Address", error);
        })
    }
  }, [email]);


  useEffect(() => {
    setCheckoutProduct(productData[id - 1]);
  }, [])
  // handleoptionChange
  // select the multipe options so choese the selecte one  option , so declaire the Function..
  const handleOptionChange = (e) => {
    console.log("handleOption Change");
    if (e.target.value == "1") {
      setDetails(true);
      setSelectOption(e.target.value);
    }
    else if (e.target.value == "2") {
      setDetails(true);
      setSelectOption(e.target.value);
    }
    else {
      setDetails(true);
      setSelectOption(e.target.value);
    }
  }

  // handleContinueselect option
  const handleContinue = () => {
    console.log("handleContinue worked");
    setIscontinue(true); // button ke click pe next page me render karne ke liye usko true kar rahe...
  }

  // handleAddress changed
  const handleAddressChange = (e) => {
    console.log("handleAddress changed worked");
    setAddress(e.target.value); // Payment_Confirm hone ke paad next page me component render hone par wah component address ki value bhi le kar jaye..
    setselectAddress(true)
  }
  return (
    <div>
      <Link to={`/product/Id/${id}`} style={{ margin: "20px" }} ><ArrowLeftOutlined /><MinusOutlined />Back </Link>
      <div className='checkout'>
        {/* {checkoutProduct.map((x)=>{ */}
        {/* return( */}
        <div className='Payment_product_img'>
          <Card title={checkoutProduct.name}>
            <img src={`../../${checkoutProduct.image}`} alt="Product_img" className='card_img1' />
            <h3 style={{ fontWeight: "bold" }}>price: {checkoutProduct.price}</h3>
            <h3 style={{ fontWeight: "bold" }}>Discount: {checkoutProduct.Discount}</h3>
            <h3 style={{ fontWeight: "bold", marginBottom: "20px" }}>Total Amount: {(parseInt(checkoutProduct.price) - (parseInt(checkoutProduct.price) * parseInt(checkoutProduct.Discount) / 100))}</h3>
          </Card>
        </div>
        {/* ) */}
        {/* })} */}
        <div className='payment'>
          <h2 style={{ fontWeight: "bold" }}> <img width="28" src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/external-location-contact-us-flaticons-flat-flat-icons.png" alt="external-location-contact-us-flaticons-flat-flat-icons" ></img>
            <span> Deliver to Address</span></h2>
          <p><input type="radio" value={address} onChange={(e) => { handleAddressChange(e); }}></input> <span>{address}</span></p>

          <h2 style={{ fontWeight: "bold" }}><img width="28" src="https://img.icons8.com/external-sbts2018-outline-color-sbts2018/58/external-payment-options-ecommerce-basic-1-sbts2018-outline-color-sbts2018.png" alt="external-payment-options-ecommerce-basic-1-sbts2018-outline-color-sbts2018" />
            Payment Options</h2>
          <ul className='Description'>
            <li>
              <input type="radio" name='payment' value='1' onChange={(e) => handleOptionChange(e)}></input>
              <span style={{ margin: 5 }}> <img width="28" src="https://img.icons8.com/external-beshi-line-kerismaker/48/external-Cash-on-delivery-online-shopping-beshi-line-kerismaker.png" alt="external-Cash-on-delivery-online-shopping-beshi-line-kerismaker" />Cash on Delivery</span>

              <span className='payment_Description'>{details && selectOption == '1' ? <p className='selectBox_PaymentOption'>product price ={(parseInt(checkoutProduct.price) - (parseInt(checkoutProduct.price) * parseInt(checkoutProduct.Discount) / 100))}</p> : ""}</span>
            </li>
            <li>
              <input type="radio" name='payment' value='2' onChange={(e) => handleOptionChange(e)} ></input>
              <span style={{ margin: 5 }}><img width="28" src="https://img.icons8.com/color/48/bhim.png" alt="bhim" /></span> UPI

              <span>{details && selectOption == '2' ? <p className='selectBox_PaymentOption'>Product Price + delivery Charge={(parseInt(checkoutProduct.price) + 50 - (parseInt(checkoutProduct.price) * parseInt(checkoutProduct.Discount) / 100))}</p> : ""}</span>
            </li>
            <li>
              <input type="radio" name='payment' value='3' onChange={(e) => handleOptionChange(e)} ></input>
              <span style={{ margin: 5 }}><img width="28" src="https://img.icons8.com/external-kmg-design-outline-color-kmg-design/32/external-bank-business-startup-kmg-design-outline-color-kmg-design.png" alt="external-bank-business-startup-kmg-design-outline-color-kmg-design" /></span> Net Banking

              <span>{details && selectOption == '3' ? <p className='selectBox_PaymentOption'>Product price Delivery Charge + platform charge={(parseInt(checkoutProduct.price) + 90 - (parseInt(checkoutProduct.price) * parseInt(checkoutProduct.Discount) / 100))}</p> : ""}</span>
            </li>
          </ul>
          {/* selection ke click hone par hi Payment_Confirm ki button show hogi*/}
          {selectOption && selectAddress ? <Link to='' onClick={handleContinue} className='Payment__Continue'><span>Payment__Continue</span></Link> : ""}
          {/* <Link to='order_confirmation'className='addcart1'><span>Payment__process</span></Link> */}
          <br /><br />
          {/* isContinue state initialy false hai then Payment__Continuebutton pe click karne pe wah true ho jayegi than fir invoice dikhane lagegi.. */}
          {
            iscontinue ? <OrderConfirm status='1' price={
              selectOption == "1" ? (parseInt(checkoutProduct.price) - (parseInt(checkoutProduct.price) * parseInt(checkoutProduct.Discount) / 100))
                : selectOption == "2" ? (parseInt(checkoutProduct.price) + 50 - (parseInt(checkoutProduct.price) * parseInt(checkoutProduct.Discount) / 100))
                  : (parseInt(checkoutProduct.price) + 90 - (parseInt(checkoutProduct.price) * parseInt(checkoutProduct.Discount) / 100))}
              selectOption={selectOption} address={address} date={dateFormated} name={checkoutProduct.name} /> : " "
          }
        </div>
      </div>
    </div>

  )
}


