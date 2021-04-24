import React from 'react'
import './app.css'
import Sidebar from '../../Components/Management/Sidebar'
import HeaderSection from '../../Components/Management/HeaderSection'
import Navbar from '../../Components/Management/Navbar'
const Management = () => {

   
    return (
        <div className="container">
          <Navbar/>
          <HeaderSection/>
          <Sidebar/>
          
        </div> 
    )
}

export default Management
