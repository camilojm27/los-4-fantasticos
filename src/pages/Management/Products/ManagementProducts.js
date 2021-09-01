import React from 'react'

import Sidebar from '../../../Components/Management/Sidebar'
import Navbar from '../../../Components/Management/Navbar'
import Product from '../../../Components/Management/Products'

const ManagementProducts = () => {


    return (
        <div className="container">
          <Navbar/>

          <Product/>

          <Sidebar/>

        </div>
    )
}

export default ManagementProducts
