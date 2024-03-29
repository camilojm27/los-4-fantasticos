import React from 'react'

import Sidebar from '../../../Components/Management/Sidebar'
import Navbar from '../../../Components/Management/Navbar'
import Invoice from '../../../Components/Management/Invoice'
import PrimaryAppBar from "../../../Components/Eccomerce/PrimaryAppBar";

const Invoices = () => {


    return (
        <>
            <PrimaryAppBar/>
            <div className="container">

                <Navbar/>

                <Invoice/>

                <Sidebar/>

            </div>
        </>

    )
}

export default Invoices
