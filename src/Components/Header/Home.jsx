import React, { useEffect, useState } from 'react'
import { Card, Carousel,Tabs } from 'antd';
import './Home.css';
import axios from 'axios';
import { Link, useNavigate, } from 'react-router-dom';
import SearchBar from '../../SearchBar';
const { Meta } = Card;

const gridStyle = {
  width: '25%',
  textAlign: 'center',
};
export default function Home() {
  const navigate = useNavigate();

  const email = localStorage.getItem("email");

  const [publicHome, setPublicHome] = useState(true);
  const [role, setRole] = useState("");
  const [prodByName, setprodByName] = useState("");
  // console.log("email", email);

  // Product Descriptions Array of object ke form me data...
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
      name: "T shirt",
      image: "T_shirt3.jpg",
      price: "1190",
      Discount: "9%"
    }
  ]

  useEffect((e) => {
    if (email) {
      // setPublicHome(false);
      axios.get(`http://localhost:8000/specificUser/${email}`, {
        headers: {
          Authorization: `${localStorage.getItem('token')}`,
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          console.log("Backend server successfully", res);
          setRole(res.data.user_data.role);
          setPublicHome(false);
        }).catch((err) => {
          console.log("backend error", err);
        });
    }
  }, [email]);

  return (
    <div>
      {
        publicHome ?(
              <>
              {/* slider Home page  or Public Home Page*/}
              <Carousel autoplay>
                <div className='img_default'>
                  <div className='data_p'>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel eum doloremque incidunt rerum suscipit ut voluptate eos, assumenda dicta beatae deleniti, modi explicabo sequi ex laborum nulla aut aliquam atque.
                    </p>
                  </div>
                  <div className='data_img'>
                    <img src="web_img.png" alt="web_img" />
                  </div>
                </div>
                <div className='img_default'>
                  <div className='data_p'>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia harum minima consequuntur dolore, laudantium autem a possimus accusantium nostrum voluptate, veritatis cumque excepturi, eos repellendus. Officia hic libero sed ipsa?
                    </p>
                  </div>
                  <div className='data_img'>
                    <img src="bigData.png" alt="web_img" />
                  </div>
                </div>
                <div className='img_default'>
                  <div className='data_p'>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eos excepturi corrupti magni ab aliquam molestias obcaecati? Illo molestias veniam voluptatem vero eaque, fugit officiis suscipit, aspernatur iusto enim error!
                    </p>
                  </div>
                  <div className='data_img'>
                    <img src="web_img.png" alt="web_img" />
                  </div>
                </div>
                <div className='img_default'>
                  <div className='data_p'>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto, modi nisi incidunt provident inventore explicabo labore dignissimos alias saepe minus quam. Commodi inventore enim nisi tenetur, magni natus? Exercitationem, rem.
                    </p>
                  </div>
                  <div className='data_img'>
                    <img src="bigData.png" alt="web_img" />
                  </div>
                </div>
              </Carousel>
              <div>
                <Card title="Card Title">
                  <Card.Grid style={gridStyle} className='gridStyle'>
                    <img src="Phone1.webp" alt="" />
                  </Card.Grid>
                  <Card.Grid style={gridStyle} className='gridStyle'>
                    <img src="Desktop.webp" alt="" />
                  </Card.Grid>
                  <Card.Grid style={gridStyle} className='gridStyle'>
                    <img src="Bags.webp" alt="" />
                  </Card.Grid>
                  <Card.Grid style={gridStyle} className='gridStyle'>
                    <img src="Laptop1.webp" alt="" />
                  </Card.Grid>
                  <Card.Grid style={gridStyle} className='gridStyle'>
                    <img src="Watch2.webp" alt="" />
                  </Card.Grid>
                  <Card.Grid style={gridStyle} className='gridStyle'>
                    <img src="T_shirt.jpg" alt="" />
                  </Card.Grid>
                  <Card.Grid style={gridStyle} className='gridStyle'>
                    <img src="enco-buds.webp" alt="" />
                  </Card.Grid>
                  <Card.Grid style={gridStyle} className='gridStyle'>
                    <img src="frezz.jpg" alt="" />
                  </Card.Grid>
                  <Card.Grid style={gridStyle} className='gridStyle'>
                    <img src="T_shirt1.jpg" alt="" />
                  </Card.Grid>
                  <Card.Grid style={gridStyle} className='gridStyle'>
                    <img src="Watch1.webp" alt="" />
                  </Card.Grid>
                  <Card.Grid style={gridStyle} className='gridStyle'>
                    <img src="T_shirt3.jpg" alt="" />
                  </Card.Grid>
                  <Card.Grid style={gridStyle} className='gridStyle'>
                    <img src="Shoes.webp" alt="" />
                  </Card.Grid>
                </Card>
              </div>
              </>
        )
          :
          (
            role=="merchant"?
            // Merchant Data page
                  <div>
                    {navigate("/merchant")}
                  </div>
            :
            (

                productData.map((x,i) => {
                  return (
                    <>
                      <div key={i} className='main-card'>
                        <div className='main-card2'>
                          {/* ProductDetail component ka path dita gaya hai Aur es component se ID ko Dynamic liya ja raha hai. */}
                          <Link to={`/product/Id/${x.id}`}>
                            <Card title={x.name}>
                              <div className="imgpro">
                                <img src={x.image} alt="Product_img" className='card_img' />
                              </div>
                              <div className='product_description'>
      
                                <p>price: Rs {x.price}</p>
                                <p>Discount: {x.Discount}</p>
                                <p>Total Amount: {(parseFloat(x.price) - (parseFloat(x.price) * parseFloat(x.Discount) / 100))}</p>
                              </div>
                              <div>
                                <button className='addcart'><span style={{ color: "white" }}>Add Cart</span></button>&nbsp;&nbsp;
                                <button className='buybtn'><span style={{ color: "white" }}>Buy</span></button>
                              </div>
                            </Card>
                          </Link>
                        </div>
                      </div>
                    </>
                  )
                })
              )
          )
      }
    </div>
  )
}




