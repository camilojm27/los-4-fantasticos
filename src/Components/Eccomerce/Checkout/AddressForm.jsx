import React from 'react';
import Typography from "@material-ui/core/Typography";
import {Checkbox, FormControlLabel, Grid, TextField} from "@material-ui/core";
import {useSelector} from "react-redux";

export default function AddressForm() {

    const {user: {user, Authorization}} = useSelector((state) => state.auth);


    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Shipping address
            </Typography>
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
                        value={user.name}
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
                        value={user.location.address}

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
                        control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                        label="Guardar detalles para próxima compra"
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}
