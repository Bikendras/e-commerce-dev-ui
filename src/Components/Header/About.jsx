import React from 'react'
import './About.css'

export default function About() {
  return (
    <div>
      <div>
        <div className='Provide_Quelity'>
          <h1>We <span style={{ color: '#ea9c48' }}>Provide Quality</span> to our Clients</h1>
          <p>Our approach is to deliver exceptionally flexible solutions that give maximum advantage at minimal cost to our customers. You can leverage our highly experienced and IT professional team having full range of skills and deep industry expertise with latest technologies.</p>
        </div>
      </div>
      <div className='About_main'>
        <div className='about_img'>
          <img src="why-us2.gif" alt="About image"/>
        </div>
        <div className='about_contant'>
          <h1> <span style={{ color: '#ea9c48' }}>About_US</span></h1>
          <h3>Get to <span style={{ color: '#ea9c48' }}>know us</span></h3>
          <p>We believe in co-existence, if you exist we subsist. Our success lies in your growth. We contribute towards the company’s growth to achieve their vision by leveraging our expertise and competencies so that together we can create a positive impact on society.</p>

          <p>We are a software product engineering company into enterprise solutions, and offer our proficiency through an agile and lean scaffold of execution for accelerated incremental deliverance with better speed and quality where the right skills are used to deliver more values.</p>
        </div>
      </div>
      

      <div className='business_main'>
        <div className='business_contant'>
          <h1><span style={{ color: '#ea9c48' }}>Business Ideas</span></h1>
          <h3> Get to <span style={{ color: '#ea9c48' }}>know us</span></h3>
          <p><b>(i)</b> The About Us page of your website is an essential source of information for all who want to know more about your business.</p>

          <p><b>(ii)</b> About Us pages are where you showcase your history, what is unique about your work, your company’s values, and who you serve.</p>

          <p><b>(iii)</b> The design, written content, and visual or video elements together tell an important story about who you are and why you do it.</p>
        </div>
        <div className='about_img'>
          <img src="about-us-page.webp" alt="Bussiness_img" />
        </div>
      </div>

    </div>
  )
}


