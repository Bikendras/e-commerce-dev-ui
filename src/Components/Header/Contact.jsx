import React from 'react'
import './About.css'
import Counter from '../../Counter'
import Reducer from '../Reducer'

export default function Contact() {
  return (
    <div>
        <div className='contact'>
          <h2>Contact</h2>
          <Counter/>
          <Reducer/>
        </div>
      </div>
  )
}
