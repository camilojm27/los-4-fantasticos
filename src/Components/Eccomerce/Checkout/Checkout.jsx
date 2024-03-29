import React, {useState} from 'react';

import {
    Box,
    Checkbox,
    FormControlLabel, FormLabel,
    Grid,
    List,
    ListItem,
    ListItemText,
    Paper, Radio, RadioGroup,
    Step,
    StepLabel,
    Stepper,
    TextField
} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {ThemeProvider} from "styled-components";
import {Container} from "../../Management/Elements";
import {Button} from "../../MainPage/ButtonElement";
import {createTheme} from "@material-ui/core/styles";
import PrimaryAppBar from "../PrimaryAppBar";
import {useDispatch, useSelector} from "react-redux";
import SignInModal from "../../MainPage/SignInModal";
import creditCardType from "credit-card-type";
import SendOrder from "./SendOrder";
import FormControl from "@material-ui/core/FormControl";

const steps = ['Dirección de Recogida', 'Tipo de Pago', 'Detalles de Pago', 'Revisa tu orden'];


const theme = createTheme();

export default function Checkout() {
    const {user} = useSelector((state) => state.auth);
    const cart = useSelector((state) => state.cart);
    const {cartItems} = cart;
    const [activeStep, setActiveStep] = useState(0);
    const [details, setDetails] = useState('');
    const [ccname, setCCname] = useState('');
    const [cc_number, setCCnumber] = useState('');
    const [cc_exp, setCCexp] = useState('');
    const [cc_cvv, setCCcvv] = useState('');

    const [order, setOrder] = useState({});
    const [payments, setPayments] = useState(null)
    const [value, setValue] = React.useState('Tarjeta de credito');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleNext = async () => {
        let entity = ''
        let newOrder = {}

        if(activeStep === 2){
            try {
                const cardSize = cc_number.length;
                const {niceType} = creditCardType(cc_number)[0]

                if (cc_number.length !== 16) {
                    alert('La tarjeta debe tener 16 Dígitos')
                    return
                }
                if (cc_cvv.length > 4 || cc_cvv.length < 3){
                    alert('Ingresa una código cvv de 3 o 4 dígitos')
                    return
                }

                if (ccname.length < 6){
                    alert('Ingresa un Nombre de Titular Valido')
                    return
                }

                if (cc_exp <= new Date()){
                    alert('Ingresa un fecha de expiracion valida')
                    return
                }

                const newPayments = [
                    {name: 'Tipo de tarjeta', detail: niceType},
                    {name: 'Titular', detail: ccname},
                    {
                        name: 'Numero de Tarjeta', detail: 'xxxx-xxxx-xxxx-' + cc_number[cardSize - 4]
                            + cc_number[cardSize - 3]
                            + cc_number[cardSize - 2]
                            + cc_number[cardSize - 1]
                    },
                    {name: 'Fecha de Expiración', detail: cc_exp},

                ]
                setPayments(newPayments)
            }catch (e) {
                alert('Ingresa una tarjeta VALIDA')
                return
            }
        }

        if (activeStep === 3){

            console.log(cc_exp)



            try {
                entity = creditCardType(cc_number)[0].type


                let products_list = cartItems.map(
                    obj => {
                        return {
                            "id" : obj.product,
                            "quantity":obj.qty,
                            "name":obj.name,
                            "uprice": obj.price,
                            "amount": obj.price
                        }
                    }
                );

                newOrder = {
                    restaurant_id: 1,
                    user_id: Number.parseInt(user.user.doc_num),
                    nit: 12345,
                    subtotal: cart.totalPrice,
                    total: cart.totalPrice,
                    quotas: 1,
                    cart_num: cc_number,
                    entity,
                    iva: 19,
                    method: value,
                    products_list ,
                }
            } catch (e) {
                alert('Ingresa una tarjeta valida')
            }


            setOrder(newOrder)

        }

        setActiveStep(activeStep + 1);

    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    const toPrice = (num) => Number(num.toFixed(2)); // 5.123 => "5.12" => 5.12
    cart.itemsPrice = toPrice(
        cart.cartItems.reduce((a, c) => a + c.qty * c.price, 0)
    );
    cart.shippingPrice = cart.itemsPrice > 100 ? toPrice(0) : toPrice(10);
    cart.taxPrice = toPrice(0.15 * cart.itemsPrice);
    cart.totalPrice = cart.itemsPrice + cart.shippingPrice + cart.taxPrice;
    const dispatch = useDispatch();
    // const placeOrderHandler = () => {
    //     dispatch(createOrderAction({ ...cart, orderItems: cart.cartItems }));
    // };


    function getStepContent(step) {
        switch (step) {
            case 0:
                // ADDRESS FORM
                return (<React.Fragment>
                    <Typography variant="h6" gutterBottom>
                        Dirección de Envío
                    </Typography>
                    <h4>
                        Para modificar tus datos ingresa al perfil
                    </h4>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="fullname"
                                name="fullname"
                                label="Nombre completo"
                                fullWidth
                                autoComplete="family-name"
                                variant="standard"
                                value={user.user.name}
                                disabled
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                id="address1"
                                name="address1"
                                label="Dirección"
                                fullWidth
                                autoComplete="shipping address-line1"
                                variant="standard"
                                value={user.user.location.address}
                                disabled

                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="details"
                                name="details"
                                label="Detalles"
                                fullWidth
                                autoComplete="shipping address-line2"
                                variant="standard"
                                value={details}
                                onChange={(e) => setDetails(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="city"
                                name="city"
                                label="City"
                                fullWidth
                                autoComplete="shipping address-level2"
                                variant="standard"
                                value='Cali'
                                disabled
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                id="state"
                                name="state"
                                label="Departamento / Region"
                                fullWidth
                                variant="standard"
                                value='Valle del Cauca'
                                disabled
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                id="zip"
                                name="zip"
                                label="Código postal"
                                fullWidth
                                autoComplete="shipping postal-code"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="country"
                                name="country"
                                label="País"
                                fullWidth
                                autoComplete="shipping country"
                                variant="standard"
                                value='Colombia'
                                disabled
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox color="secondary" name="saveAddress" value="yes"/>}
                                label="Guardar detalles para próxima compra"
                            />
                        </Grid>
                    </Grid>
                </React.Fragment>)
            case 1: return (<div>
                <Typography variant="h6" gutterBottom>
                    Método de Pago

                    <FormControl component="fieldset">
                        <RadioGroup
                            aria-label="gender"
                            name="controlled-radio-buttons-group"
                            value={value}
                            onChange={handleChange}
                        >
                            <FormControlLabel value="Tarjeta de credito" control={<Radio />} label="Tarjeta de credito" />
                            <FormControlLabel value="Efectivo" control={<Radio />} label="Efectivo" />
                        </RadioGroup>
                    </FormControl>
                </Typography>
            </div>)
            case 2:
                // PAYMENT FORM
                return (
                    <React.Fragment>
                        <Typography variant="h6" gutterBottom>
                            Método de Pago
                        </Typography>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    required
                                    id="cardName"
                                    label="Nombre completo del Titular"
                                    fullWidth
                                    autoComplete="cc-name"
                                    variant="standard"
                                    value={ccname}
                                    onChange={(e) => setCCname(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    required
                                    id="cardNumber"
                                    label="Número de Tarjeta"
                                    fullWidth
                                    autoComplete="cc-number"
                                    variant="standard"
                                    value={cc_number}
                                    onChange={(e) => setCCnumber(e.target.value)}
                                    type="number"
                                    inputProps={{ maxLength: 16 }}


                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    required
                                    id="expDate"
                                    label="Expiry date"
                                    fullWidth
                                    autoComplete="cc-exp"
                                    variant="standard"
                                    value={cc_exp}
                                    onChange={(e) => setCCexp(e.target.value)}
                                    type="month"
                                    inputProps={{min: "2021-10", max: "2027-12"} }
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    required
                                    id="cvv"
                                    label="CVV"
                                    helperText="Last three digits on signature strip"
                                    fullWidth
                                    autoComplete="cc-csc"
                                    variant="standard"
                                    value={cc_cvv}
                                    onChange={(e) => setCCcvv(e.target.value)}
                                    type="number"
                                    inputProps={{ maxLength: 4 }}
                                />
                            </Grid>
                            {/*<Grid item xs={12}>*/}
                            {/*    <FormControlLabel*/}
                            {/*        control={<Checkbox color="secondary" name="saveCard" value="yes" />}*/}
                            {/*        label="Remember credit card details for next time"*/}
                            {/*    />*/}
                            {/*</Grid>*/}
                        </Grid>
                    </React.Fragment>
                )

            case 3:
                // REVIEW
                return (<React.Fragment>
                        <Typography variant="h6" gutterBottom>
                            Order summary
                        </Typography>
                        <List disablePadding>
                            {cartItems.map((product) => (
                                <ListItem key={product.name + product.id} sx={{py: 1, px: 0}}>
                                    <ListItemText primary={product.name + ' ' + product.qty} secondary={
                                        <img src={product.image} alt="" height={100}/>
                                    }/>
                                    <Typography variant="body2">{product.price}</Typography>
                                </ListItem>
                            ))}

                            <ListItem sx={{py: 1, px: 0}}>
                                <ListItemText primary="Total"/>
                                <ListItemText>
                                    <h2>Resumen de Compra</h2>
                                </ListItemText>
                                <ListItemText>
                                    <div className="row">
                                        <div>Productos</div>
                                        <div>${cart.itemsPrice.toLocaleString('es-CO')}</div>
                                    </div>
                                </ListItemText>
                                <ListItemText>
                                    <div className="row">
                                        <div>Envío</div>
                                        <div>${cart.shippingPrice.toLocaleString('es-CO')}</div>
                                    </div>
                                </ListItemText>
                                <ListItemText>
                                    <div className="row">
                                        <div>Impuestos</div>
                                        <div>${cart.taxPrice.toLocaleString('es-CO')}</div>
                                    </div>
                                </ListItemText>
                                <ListItemText>
                                    <div className="row">
                                        <div>
                                            <strong>Total de la orden</strong>
                                        </div>
                                        <div>
                                            <strong>${cart.totalPrice.toLocaleString('es-CO')}</strong>
                                        </div>
                                    </div>
                                </ListItemText>
                            </ListItem>
                        </List>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <Typography variant="h6" gutterBottom sx={{mt: 2}}>
                                    Envío
                                </Typography>
                                <Typography gutterBottom>{user.user.name}</Typography>
                                <Typography gutterBottom>{user.user.location.address}</Typography>
                            </Grid>
                            <Grid item container direction="column" xs={12} sm={6}>
                                <Typography variant="h6" gutterBottom sx={{mt: 2}}>
                                    Payment details
                                </Typography>
                                {
                                    payments &&
                                    <Grid container>

                                        {payments.map((payment) => (
                                            <React.Fragment key={payment.name}>
                                                <Grid item xs={6}>
                                                    <Typography gutterBottom>{payment.name}</Typography>
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <Typography gutterBottom>{payment.detail}</Typography>
                                                </Grid>
                                            </React.Fragment>
                                        ))}
                                    </Grid>
                                }

                            </Grid>
                        </Grid>
                    </React.Fragment>

                )

            default:
                throw new Error('Unknown step');
        }
    }

    //
    // useEffect(() => {
    //     if(user === null){
    //         alert('Inicia sesion');
    //     }
    // }, [])

    return (
        <>
            <PrimaryAppBar/>
            {user !== null ?

                <ThemeProvider theme={theme}>

                    <Container component="main" maxWidth="lg" sx={{mb: 4}} style={{width: '90%', margin: 'auto'}}>
                        <Paper variant="outlined" sx={{my: {xs: 3, md: 6}, p: {xs: 2, md: 3}}}>
                            <Typography component="h1" variant="h4" align="center">
                                Compra
                            </Typography>
                            <Stepper activeStep={activeStep} sx={{pt: 3, pb: 5}}>
                                {steps.map((label) => (
                                    <Step key={label}>
                                        <StepLabel>{label}</StepLabel>
                                    </Step>
                                ))}
                            </Stepper>
                            <React.Fragment>
                                {activeStep === steps.length ? (
                                    <SendOrder token={user.Authorization} orderData={order}/>
                                ) : (
                                    <React.Fragment>
                                        {getStepContent(activeStep)}
                                        <Box sx={{display: 'flex', justifyContent: 'flex-end'}}>
                                            {activeStep !== 0 && (
                                                <Button onClick={handleBack} sx={{mt: 3, ml: 1}}>
                                                    Atrás
                                                </Button>
                                            )}

                                            <Button
                                                variant="contained"
                                                onClick={handleNext}
                                                sx={{mt: 3, ml: 1}}
                                            >
                                                {activeStep === steps.length - 1 ? 'Crear orden' : 'Siguiente'}
                                            </Button>
                                        </Box>
                                    </React.Fragment>
                                )}
                            </React.Fragment>
                        </Paper>
                    </Container>
                </ThemeProvider>
                :
                <SignInModal showSignIn={true}/>
            }

        </>

    );
}
