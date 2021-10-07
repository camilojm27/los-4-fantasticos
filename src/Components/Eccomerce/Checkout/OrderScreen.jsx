import React, {useEffect, useState} from 'react';
import axios from "axios";
import Typography from "@material-ui/core/Typography";
import {List, ListItem, ListItemText, Paper} from "@material-ui/core";
import {useSelector} from "react-redux";
import PrimaryAppBar from "../PrimaryAppBar";
import {Container} from "../../Management/Elements";

export default function OrderScreen(props) {
    const orderId = props.match.params.id;

    const [order, setOrder] = useState(null)
    const {user: {user, Authorization}} = useSelector((state) => state.auth);

    useEffect(() => {
        axios.get('https://ricuritas.herokuapp.com/api/order/' + orderId, {
            headers: {
                Authorization
            }
        })
            .then((e) => setOrder(e.data.order))
    }, []);


    return (
        <div>
            {order && <>
                <PrimaryAppBar/>
                <Container component="main" maxWidth="lg" sx={{mb: 4}} style={{width: '90%', margin: 'auto'}}>
                    <Paper variant="outlined" sx={{my: {xs: 3, md: 6}, p: {xs: 2, md: 3}}}>
                        <Typography variant="h6" gutterBottom>
                            Resumen de la orden # {orderId} El dia {new Date(order.date_time.replace(' ', 'T')).toLocaleString('es-CO') }
                        </Typography>
                        <List disablePadding>
                            {order.products_list.map((product) => (
                                <ListItem key={product.name + product.id} sx={{py: 1, px: 0}}>
                                    <ListItemText primary={product.name + ' x ' + product.quantity}/>
                                    <Typography variant="body2">{product.price}</Typography>
                                </ListItem>
                            ))}

                            <ListItem sx={{py: 1, px: 0}}>
                                <ListItemText>
                                    <div className="row">
                                        <div>
                                            <strong>Total de la orden</strong>
                                        </div>
                                        <div>
                                            <strong>${order.total.toLocaleString('es-CO')}</strong>
                                        </div>
                                    </div>
                                </ListItemText>

                            </ListItem>
                        </List>
                    </Paper>
                </Container>
            </>
            }
        </div>
)}
