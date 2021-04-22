import React from 'react'

import Sidebar from '../../../Components/Management/Sidebar'
import Navbar from '../../../Components/Management/Navbar'
import Category from '../../../Components/Management/Category'

const Categories = () => {

   
    return (
        <div className="container">
          <Navbar/>
   
          <Category/>
          
          <Sidebar/>
          
        </div> 
    )
}

export default Categories
