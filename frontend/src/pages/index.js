import React, {useEffect, useState} from 'react'

import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar'
import HeroSection from '../Components/HeroSection';
import InfoSection from '../Components/infoSection';
import ProductsSection from '../Components/Products'
import {useDispatch} from "react-redux";
import {getProductList} from "../actions/productAction";
const Home = () => {

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(getProductList())
    }, [dispatch])

    return (
        <>
         
          <Sidebar isOpen={isOpen} toggle={toggle} />
          <Navbar toggle={toggle} />
          <HeroSection/>
         
          <InfoSection/>
          <ProductsSection/>

        </>
    )
}

export default Home
