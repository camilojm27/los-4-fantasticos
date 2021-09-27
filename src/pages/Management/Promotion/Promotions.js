import React from 'react'

import Sidebar from '../../../Components/Management/Sidebar'
import Navbar from '../../../Components/Management/Navbar'
import Category from '../../../Components/Management/Category'
import PrimaryAppBar from "../../../Components/Eccomerce/PrimaryAppBar";

const Promotions = () => {


    return (
        <>
            <PrimaryAppBar/>
            <div className="container">

                <Navbar/>

                <Category/>

                <Sidebar/>

            </div>
        </>

    )
}

export default Promotions
