import React, {useEffect, useState} from 'react'

import Navbar from '../Components/MainPage/Navbar';
import Sidebar from '../Components/MainPage/Sidebar'
import HeroSection from '../Components/MainPage/HeroSection';
import InfoSection from '../Components/MainPage/infoSection';
import ProductsSection from '../Components/MainPage/Products'
import RegisterSection  from '../Components/MainPage/RegisterSection'

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
          <RegisterSection/>

        </>
    )
}

export default Home
