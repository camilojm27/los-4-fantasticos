import React from 'react'

import Sidebar from '../../../Components/Management/Sidebar'
import Navbar from '../../../Components/Management/Navbar'
import Product from '../../../Components/Management/Products'

const Products = () => {

   
    return (
        <div className="container">
          <Navbar/>
   
          <Product/>
          
          <Sidebar/>
          
        </div> 
    )
}

export default Products
