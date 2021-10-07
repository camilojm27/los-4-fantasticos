import React from 'react'

import Sidebar from '../../../Components/Management/Sidebar'
import Navbar from '../../../Components/Management/Navbar'
import Admin from '../../../Components/Management/Admins'
import PrimaryAppBar from "../../../Components/Eccomerce/PrimaryAppBar";

const Admins = () => {


    return (
        <>
            <PrimaryAppBar/>
            <div className="container">

                <Navbar/>

                <Admin/>

                <Sidebar/>

            </div>
        </>

    )
}

export default Admins
