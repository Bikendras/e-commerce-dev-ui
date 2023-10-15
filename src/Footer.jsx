import React from 'react'
import './Footer.css'
import {TwitterOutlined, FacebookOutlined, InstagramOutlined, GooglePlusOutlined} from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { Tooltip } from 'antd'




export default function Footer() {
  return (
    <footer>
          <div className='f_main'>

            <div className='footer_1'>
              <h3>OneTech +</h3>
              <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
              </p>
              <div>
                <Link to=""><Tooltip title="Twitter" className='Social_media'><TwitterOutlined /></Tooltip></Link>
                <Link to=""><Tooltip title="facebook" className='Social_media'><FacebookOutlined /></Tooltip></Link>
                <Link to=""><Tooltip title="Instagram" className='Social_media'><InstagramOutlined /></Tooltip></Link>
                <Link to=""><Tooltip title="GooglePay" className='Social_media'><GooglePlusOutlined /></Tooltip></Link>
              </div>
            </div>

            <div className='footer_1'>
              <h3>Latest News</h3>
              <div className='img_foot'>
                <img src="/../laptop3.jpg"alt="laptop_img" />
                <p>Even the all-powerful Pointing has no control about<br/>  
                <Link to="" style={{color:"#7F72E4" , fontSize:"15px"}}> Sep. 8, 2023 Admin 23</Link>
                </p>
              </div>
              <div className='img_foot'>
                <img src="/../Design.jpg" alt="Desing_img" />
                <p>Even the all-powerful Pointing has no control about<br/>  
                  <Link to="" style={{color:"#7F72E4" , fontSize:"15px"}}>Sep. 8, 2023 Admin 23</Link></p>
              </div>
            </div>

            <div className='footer_1'>
              <h3>Quick Links</h3>
              <div><Link to="/">Home</Link></div>
              <div><Link to="/about">About</Link></div>
              <div><Link to="/">Services</Link></div>
              <div><Link to="/">Works</Link></div>
              <div><Link to="/">Blog</Link></div>
              <div><Link to="/contact">Contact</Link></div>
            </div>

            <div className='footer_1'>
              <h3>Have a Questions?</h3>
              <h5>
                <Link to=""><img width="24" height="24" src="https://img.icons8.com/fluency/48/google-maps-new.png" alt="google-maps-new"/> Indore MP. State of India.</Link>
              </h5>
              <h5>
              <Link to=""><img width="24" height="24" src="https://img.icons8.com/color/48/ringer-volume.png" alt="ringer-volume"/>	+91 8878685813</Link></h5>
                <h5><Link to=""><img width="24" height="24" src="https://img.icons8.com/fluency/48/filled-sent.png" alt="filled-sent"/>bikendra@gmail.com</Link></h5>
            </div>
          </div>
          <h3 style={{color: 'white', textAlign: 'center'}}>Copyright ©2023 All rights reserved | This template is made with  by OneTech.com</h3>
    </footer>
  )
}
