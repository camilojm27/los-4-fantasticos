import React, {useState} from 'react'

import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar'
import HeroSection from '../Components/HeroSection';
import InfoSection from '../Components/infoSection';
import ProductsSection from '../Components/Products'
import RegisterSection  from '../Components/RegisterSection'

const Home = () => {

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }


    return (
        <>
         
          <Sidebar isOpen={isOpen} toggle={toggle} />
          <Navbar toggle={toggle} />
          <HeroSection/>
         
          <InfoSection/>
          <ProductsSection/>
          <RegisterSection/>

        </>
    )
}

export default Home
