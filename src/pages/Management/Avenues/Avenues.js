import React from 'react'

import Sidebar from '../../../Components/Management/Sidebar'
import Navbar from '../../../Components/Management/Navbar'
import Avenue from '../../../Components/Management/Avenue'
import PrimaryAppBar from "../../../Components/Eccomerce/PrimaryAppBar";

const Avenues = () => {


    return (
        <>
            <PrimaryAppBar/>
            <div className="container">

                <Navbar/>

                <Avenue/>

                <Sidebar/>

            </div>
        </>

    )
}

export default Avenues
