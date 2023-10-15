import React from 'react'
import { Card, Carousel, Space } from 'antd';
import './Home.css';
import { Link } from 'react-router-dom';

const { Meta } = Card;

export default function Home_default() {
    const productData = [
        {
          id: 1,
          name: "Mobile",
          image: "Phone1.webp",
          price: "15000",
          Discount: "15%"
        },
        {
          id: 2,
          name: "Desktop",
          image: "Desktop.webp",
          price: "5000",
          Discount: "8%"
        },
        {
          id: 3,
          name: "Bags",
          image: "Bags.webp",
          price: "900",
          Discount: "10%"
        },
        {
          id: 4,
          name: "Refrigreter",
          image: "frezz.jpg",
          price: "40000",
          Discount: "17%"
        },
        {
          id: 5,
          name: "Laptop",
          image: "Laptop1.webp",
          price: "54000",
          Discount: "9%"
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
          name: "SunGlasses",
          image: "Sun_glasses.webp",
          price: "1190",
          Discount: "9%"
        }
      ]
  return (
    <div>
      <Carousel autoplay>
            <div className='img_default'>
              <img src="web_img.png" alt="web_img" />
            </div>
            <div className='img_default'>
              <img src="web_img.png" alt="web_img" />
            </div>
            <div className='img_default'>
              <img src="web_img.png" alt="web_img" />
            </div>
            <div className='img_default'>
              <img src="web_img.png" alt="web_img" />
            </div>
          </Carousel>
      {
        productData.map((x) => {
          return (
            <>
              <div className='main-card'>
                <Link to={`/product/Id/${x.id}`}>
                  <Card title={x.name}>
                    <div className="imgpro">
                      <img src={x.image} alt="Product_img" className='card_img'/>
                    </div>
                    <div className='product_description'>
                      <p>price:Rs{x.price}</p>
                      <p>Discount: {x.Discount}</p>
                      <p>Total Amount: {(parseInt(x.price)-(parseInt(x.price)*parseInt(x.Discount)/100))}</p>
                    </div>
                      <div>
                        <button className='addcart'><span style={{color:"white"}}>Add Cart</span></button>&nbsp;&nbsp;
                        <button className='buybtn'><span style={{color:"white"}}>Buy</span></button>
                      </div>
                  </Card>
                </Link>
              </div>
            </>
          )
        })
      }



    </div>
  )
}
