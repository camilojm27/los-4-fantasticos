import React from "react";
import {Button, Grid, TextField} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {useDispatch, useSelector} from "react-redux";
import PrimaryAppBar from "../../Components/Eccomerce/PrimaryAppBar";
import {useForm} from "react-hook-form";
import axios from "axios";
import {login, logout} from "../../state/actions/authAction";
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
        paper: {
            background: "blue"
        }
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

const ProfileSettings = () => {
    const dispatch = useDispatch();
    const {user: {user, Authorization}} = useSelector((state) => state.auth);
    const {register, handleSubmit: handleUserNewData} = useForm();

    const onSubmit = async (data) => {
        console.log(data)
        console.log(data.email)
        console.log(Authorization)
        const pass = await veryPassword(data.email, data.password);
        if (pass) {
            axios.put('https://ricuritas.herokuapp.com/api/user', data, {
                headers: {
                    'Authorization': Authorization
                }
            }).then(() => {
                alert('Cambios guardados correctamente')
                dispatch(logout());
                dispatch(login(data.email, data.password))

            })
                .catch(() => alert('error'))
        } else {
            alert('La contraseña es incorrecta')
        }

    }
    const veryPassword = async (email, password) => {

        try {
            const {data} = await axios.post('https://ricuritas.herokuapp.com/api/auth/signin', {
                email,
                password
            })
            if (data.Authorization) {
                return true
            }
        } catch (e) {
            return false;
        }
    }

    const classes = useStyles();

    function deleteAccount() {
        const confirmation = window.confirm('Estas seguro que quieres eliminar la cuenta');
        if (confirmation){
            axios.delete('https://ricuritas.herokuapp.com/api/user',  {
                headers: {
                    'Authorization': Authorization
                }
            }).then(() => {
                alert('Cuenta Eliminada correctamente')
                dispatch(logout());

            })
                .catch(() => alert('error'))
        }

    }

    return (
        <>
            <PrimaryAppBar/>
            <h1 style={{textAlign: 'center'}}>Configuración de Cuenta</h1>
            <section className={classes.content}>
                <div className={classes.toolbar}/>
                <form onSubmit={handleUserNewData(onSubmit)}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <TextField {...register("name", {required: true})} label="Nombre" defaultValue={user.name}
                                       type="text" fullWidth variant="outlined"/>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField {...register("email", {required: true})} label="Email" defaultValue={user.email}
                                       type="email" fullWidth variant="outlined"/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField {...register("phone_num", {required: true})} label="Télefono"
                                       type="number" defaultValue={user.phone_num} fullWidth variant="outlined"/>
                        </Grid>
                        {/*<Grid item xs={12}>*/}
                        {/*    <TextField {...register("address", {required: true})} label="Dirección detallada"*/}
                        {/*               defaultValue={user.address} fullWidth*/}
                        {/*              type="text" variant="outlined"/>*/}
                        {/*</Grid>*/}
                        <Grid item xs={12} sm={6}>
                            <TextField {...register("doc_num", {required: true})} label="Cedula"
                                       defaultValue={user.doc_num} fullWidth variant="outlined"/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField {...register("birth", {required: true})} InputLabelProps={{
                                shrink: true,
                            }} type="date" label="Fecha de nacimiento" defaultValue={user.birth} fullWidth
                                       variant="outlined"/>
                        </Grid>
                        <label> </label>

                        <Grid item style={{margin: 'auto'}} xs={6} sm={6}>
                            <TextField {...register("password", {required: true})}
                                       label="Para guardar tus cambios debes ingresar tu contraseña actual"
                                       type="password" fullWidth variant="filled"/>
                        </Grid>
                    </Grid>
                    <br/>
                    <Button

                        variant="contained"
                        color="primary"
                        size="large"
                        startIcon={<SaveIcon/>}
                        style={{margin: '20 auto', width: '50%'}}
                        type="submit"
                    >
                        Guardar Cambios
                    </Button>
                    <Button
                        variant="contained"
                        color="secondary"
                        size="large"
                        startIcon={<DeleteIcon/>}
                        style={{margin: '20 auto', width: '50%'}}
                        onClick={deleteAccount}
                    >
                        Eliminar Cuenta
                    </Button>

                </form>

            </section>
        </>
    )

}


export default ProfileSettings
