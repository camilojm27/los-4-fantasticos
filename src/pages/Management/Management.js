
import './app.css'
import React from 'react'
import Sidebar from '../../Components/Management/Sidebar'
import HeaderSection from '../../Components/Management/HeaderSection'
import Navbar from '../../Components/Management/Navbar'
import PrimaryAppBar from "../../Components/Eccomerce/PrimaryAppBar";
const Management = () => {

  return (
      <>
          <PrimaryAppBar/>
          <div className="container">

              <Navbar />
            
              <HeaderSection />
              
              <Sidebar />

          </div>
      </>

  )
}

export default Management
