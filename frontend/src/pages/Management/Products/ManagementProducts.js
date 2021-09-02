import React from 'react'

import Sidebar from '../../../Components/Management/Sidebar'
import Navbar from '../../../Components/Management/Navbar'
import Product from '../../../Components/Management/Products'
import PrimaryAppBar from "../../../Components/Eccomerce/PrimaryAppBar";

const ManagementProducts = () => {


  return (
      <>
          <PrimaryAppBar/>
          <div className="container">

              <Navbar />

              <Product />

              <Sidebar />

          </div>
      </>

  )
}

export default ManagementProducts
