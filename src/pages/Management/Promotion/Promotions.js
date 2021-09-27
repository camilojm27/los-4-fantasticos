import React from 'react'

import Sidebar from '../../../Components/Management/Sidebar'
import Navbar from '../../../Components/Management/Navbar'
import Promotion from '../../../Components/Management/Promotion'
import PrimaryAppBar from "../../../Components/Eccomerce/PrimaryAppBar";

const Promotions = () => {


    return (
        <>
            <PrimaryAppBar/>
            <div className="container">

                <Navbar/>

                <Promotion/>

                <Sidebar/>

            </div>
        </>

    )
}

export default Promotions
