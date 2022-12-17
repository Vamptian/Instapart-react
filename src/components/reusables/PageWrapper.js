import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import Header from './Header'


export default function PageWrapper(props) {

  return (
    <div className="flex-col container">
      <div className='flex-row'>
        <Header user={props.user} />
      </div>
      <div className='flex-row'>
        {props.children}
      </div>
      <div className='flex-row'>
        <Footer/>
      </div>

    </div>
  )
}