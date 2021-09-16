import React from 'react'

import Sidebar from '../../../Components/Management/Sidebar'
import Navbar from '../../../Components/Management/Navbar'
import Client from '../../../Components/Management/Clients'
import PrimaryAppBar from "../../../Components/Eccomerce/PrimaryAppBar";

const Clients = () => {


    return (
        <>
            <PrimaryAppBar/>
            <div className="container">

                <Navbar/>

                <Client/>

                <Sidebar/>

            </div>
        </>

    )
}

export default Clients
