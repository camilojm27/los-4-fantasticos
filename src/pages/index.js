import React, {useState} from 'react'

import Navbar from '../Components/MainPage/Navbar';
import Sidebar from '../Components/MainPage/Sidebar'
import HeroSection from '../Components/MainPage/HeroSection';
import InfoSection from '../Components/MainPage/infoSection';
import ProductsSection from '../Components/MainPage/Products'
import RegisterSection from '../Components/MainPage/RegisterSection'


const Home = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>

            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <HeroSection/>

            <InfoSection/>
            <ProductsSection/>
            <RegisterSection/>

        </>
    )
}

export default Home
