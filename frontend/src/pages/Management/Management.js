import React, {useEffect, useState} from 'react'
import './app.css'
import Sidebar from '../../Components/Management/Sidebar'
import HeaderSection from '../../Components/Management/HeaderSection'

const Management = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
      setIsOpen(!isOpen)
    }
    return (
        <div className="container">
          <HeaderSection/>
          <Sidebar/>
          
        </div> 
    )
}

export default Management
