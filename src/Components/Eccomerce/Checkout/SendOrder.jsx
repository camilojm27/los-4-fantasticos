import React, {useEffect} from 'react';
import axios from "axios";
import {Skeleton} from "@material-ui/lab";
import {useHistory} from "react-router-dom";
import {emptyCart} from "../../../state/actions/cartActions";
import {useDispatch} from "react-redux";

export default function SendOrder({token, orderData}) {
    const history = useHistory()
    const dispatch = useDispatch()
    const [order, setOrder] = React.useState(null);
    const [error, setError] = React.useState(null);


    useEffect(() => {
        axios.post('https://ricuritas.herokuapp.com/api/order', orderData, {
            headers: {
                'Authorization': token
            }
        }).then((data) => {
            dispatch(emptyCart)
            setOrder(order)
            setError(null)
            history.push('/order/'+data.data.order.id)
        })
            .catch((e) => setError(e))
    }, [order])

    if (error) return `Error: ${error.message}`;

    if (!order) return (
        <>
            <Skeleton />
            <Skeleton animation="wave" />
            <Skeleton animation={false} />
        </>
    );

}
