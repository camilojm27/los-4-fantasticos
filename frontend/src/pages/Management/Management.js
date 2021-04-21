import React, {useState} from 'react'
import './app.css'
import Sidebar from '../../Components/Management/Sidebar'
import HeaderSection from '../../Components/Management/HeaderSection'

const Management = () => {

   
    return (
        <div className="container">
          <HeaderSection/>
          <Sidebar/>
          
        </div> 
    )
}

export default Management
