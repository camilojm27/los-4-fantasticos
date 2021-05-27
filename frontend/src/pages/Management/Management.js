
import './app.css'
import React from 'react'
import Sidebar from '../../Components/Management/Sidebar'
import HeaderSection from '../../Components/Management/HeaderSection'
import Navbar from '../../Components/Management/Navbar'
import { useSelector } from "react-redux";
import { Redirect,useHistory } from 'react-router-dom'
const Management = () => {




  return (
    <div className="container">
      <Navbar />
      <HeaderSection />
      <Sidebar />

    </div>
  )
}

export default Management
