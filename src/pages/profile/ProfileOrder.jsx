import React, {useEffect, useState} from "react";
import './Profile.css'
import PrimaryAppBar from "../../Components/Eccomerce/PrimaryAppBar";
import {DataGrid} from "@mui/x-data-grid";
import {useSelector} from "react-redux";
import axios from "axios";
import {AiOutlineDownload} from 'react-icons/ai'

const columns = [
    { field: 'id', headerName: '# Orden', width: 150 },
    {
        field: 'date_time',
        headerName: 'Fecha',
        width: 200,
        editable: false,
    },
    {
        field: 'total',
        headerName: 'Total',
        width: 150,
        editable: false,
    },
    {
        field: 'method',
        headerName: 'Medio de Pago',
        width: 200,
        editable: false,
    },
    {
        field: 'receipt',
        headerName: 'Recibo',
        width: 150,
        editable: false,
        renderCell: (params) => (
            <a target='_blank' rel='noreferrer' href={params.value}>
                <AiOutlineDownload size={30} style={{alignSelf: 'center'}}/>
            </a>
        )
    },
];



export const ProfileOrder = () => {


    const [order, setOrder] = useState(null)
    const {user: {user, Authorization}} = useSelector((state) => state.auth);

    useEffect(() => {
        axios.get('https://ricuritas.herokuapp.com/api/order/client/' + user.doc_num, {
            headers: {
                Authorization
            }
        })

            .then((e) => {
                const orders = e.data.fullOrders.map(
                    obj=> {
                        return {
                            id: obj.order.id,
                            date_time: new Date(obj.order.date_time).toLocaleString('es-CO') ,
                            total: obj.order.total,
                            method: obj.payments[0].method,
                            receipt: obj.payments[0].receipt,
                        }
                    }
                )
                setOrder(orders)
                console.log(orders)
                console.log(e.data)
            })
    }, []);



    return (
        <>
            <div>
                <PrimaryAppBar/>
                {
                    order &&
                    <div style={{ height: 600, width: '90%' ,margin:'auto'}}>
                        <DataGrid
                            rows={order}
                            columns={columns}
                            pageSize={9}
                            rowsPerPageOptions={[20]}
                            disableSelectionOnClick
                        />
                    </div>
                }


            </div>
        </>

    )

}
