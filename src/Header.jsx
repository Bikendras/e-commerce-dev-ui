import React, { useState, useEffect } from 'react'
import './Header.css'
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import logo from './img/cart.png'
// import Search from './img/icons8-search-50.png';
import Footer from './Footer';
import { LogoutOutlined, LoginOutlined, DownOutlined, SettingOutlined,UserOutlined, SearchOutlined,ProfileOutlined,ShoppingCartOutlined } from "@ant-design/icons";
import { Dropdown, Space, Button, Input, Tooltip } from 'antd';
import axios from 'axios';

// antd se search box ko create karne ke onSearch name ka variable liya hai
const { Search } = Input;
const onSearch = (value) => console.log(value);

 
export default function Header() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  // after login get a email in user
  const email = localStorage.getItem("email");
  console.log("email in navbar", email);
  const handleLogout = () => {
    console.log("handleLogout function called on click");
    // At the time of user logout then remove email in localStorage.
    localStorage.removeItem("email");
    const email = localStorage.getItem("email");
    localStorage.removeItem("userCardData");
    localStorage.removeItem("token"); 
    // email nhi hai to login Component me navigate kara do
    if (!email) {
      navigate("/login");
    }
  };

  useEffect(() => {
    // after login get a email in user then run a UseEffect method
    if (email) {
      axios.get(`http://localhost:8000/specificUser/${email}`,
        {
          // main object 
          headers: {
            // key Authorization me localStorage se token ko lena hai
            Authorization: `${localStorage.getItem("token")}`,
            // React me data ka type Application hota hai
            "Content-Type": "Application/json",
          }
        }).then((res) => {
          // use email se token mil jata hai to backend ka data print ho jayega..
          console.log("backend success response", res);
          // aur us backend ke response se ham us user ka name nikal rahe hai..
          setName(res?.data?.user_data?.name);
        }).catch((error) => {
          console.log("backend error response", error);
        })
    }
  }, [email]);
// user name And detail show karne ke liye...
  const items = [
    {
      label: <Link to="/userDetail" >Profile <ProfileOutlined /></Link>,
      key: '0',
    },
    {
      label: <Link to="/myorder">Oders <img width="28" src="https://img.icons8.com/color/48/order-completed.png" alt="order-completed"/></Link>,
      key: '1',
    },
    {
      label: <Link to="/cart">Cart <ShoppingCartOutlined /></Link>,
      key: '2',
    },
    {
      label: <Link to="">Help <img width="24" src="https://img.icons8.com/material-rounded/24/help.png" alt="help"/></Link>,
      key: '3',
    },
    {
      type: 'divider',
    },
  ];

  return (
    <div>
      {/* Search bar */}
      <div className='footer'>
        <div className='head'>
          <span className='One'>OneTech+</span>

          <div className='log_1'>
            <Search placeholder="Search products..." onSearch={onSearch} enterButton />

            {/* <input type="search" name='search' className="search__input" placeholder='Search products...' />
            <Link to=""><img src={Search} className='search_img' alt="" /></Link> */}
          </div>

          <div className='login_cart_customer'>
            <div className='cust'>
              {/* He is Printing a dynamicaly user name.. */}
              {email ? (
              <Dropdown
              menu={{
                items,
              }}
              trigger={['click']}>
              <Link onClick={(e) => e.preventDefault()}> 
                <Space>
                <span className='Dynamic_name' style={{ color: "white" }}><Tooltip title="UserName"><span className='name'>{name}</span><span className='userOutline'><UserOutlined /></span></Tooltip></span>
                
                </Space>
              </Link>
            </Dropdown>)
                 : " "}
            </div>
            <div className='log'>
              {email ?
                (<Button className='log_button' onClick={handleLogout} block>
                  Logout<LogoutOutlined />
                </Button>) : (<Button className='log_button' onClick={handleLogout} block>
                  Login<LoginOutlined />
                </Button>)
                // (<Link to="/login" onClick={handleLogout} className='butt'>Logout <LogoutOutlined /></Link>) :
                // (<Link to="/login" className='butt'>Login <LoginOutlined /></Link>
                // )
              }
            </div>

            <div className='cart'>
              <Link to='/cart'>
                <img src={logo} className='cart_img' alt="" />
                <span className='cart2'>Cart</span>
              </Link>
            </div>
            <div className='cust1'>
              <span >Customer Service</span>
              <h5>9916000016</h5>
            </div>
          </div>
        </div>
        {/* Navbar */}
        <div className='topbar'>
          <nav className='nav'>
            <ul>
              <li>
                {email?<NavLink style={({ isActive }) => { return { color: isActive ? 'green' : '' } }} to="/">Products</NavLink>:
                <NavLink style={({ isActive }) => { return { color: isActive ? 'green' : '' } }} to="/"> Home</NavLink>}
              </li>
              <li><NavLink style={({ isActive }) => { return { color: isActive ? 'green' : '' } }} to="/about">About_Us</NavLink></li>
              <li><NavLink style={({ isActive }) => { return { color: isActive ? 'green' : '' } }} to="/contact">Contact_Us</NavLink></li>
              {/* <li><NavLink style={({ isActive }) => { return { color: isActive ? 'green' : '' } }} to="/product">Product</NavLink></li> */}
            </ul>
          </nav>
          {/* setting ka icon */}
          <div style={{marginTop:"15px",marginRight:"40px", cursor:"pointer"}}>
                {email?<><Tooltip title="Setting"><Dropdown
                    menu={{
                      items,
                    }}>
                    <a style={{marginTop:"20px", color:"white"}} onClick={(e) => e.preventDefault()}> 
                      <Space style={{ marginLeft: "10px" }}>
                      <SettingOutlined />
                      </Space>
                    </a>
                  </Dropdown></Tooltip></>
                  : " "
                }   
          </div>
        </div>
        <Outlet />
        </div>

        <Footer />
      
      {/* Footer page */}
    </div>
  )
}


