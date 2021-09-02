import React, {useState} from "react";
import {Button, Grid, List, ListItem, ListItemIcon, ListItemText, TextField} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import MailIcon from "@material-ui/icons/Mail";
import SaveIcon from '@material-ui/icons/Save';
import SettingsIcon from '@material-ui/icons/Settings';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import {useDispatch, useSelector} from "react-redux";
import PrimaryAppBar from "./../../Components/Eccomerce/PrimaryAppBar";

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

const ProfileSettings = (props) => {
    const {history} = props;
    const dispatch = useDispatch()
    const {user: {user}} = useSelector((state) => state.auth);

    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    };
    const classes = useStyles();
    const itemsList = [
        {
            text: "Ajustes de Cuenta",
            icon: <SettingsIcon/>,
            id: 1,
            onClick: () => history.push('/profile/settings')
        },
        {
            text: "Ordenes",
            icon: <MailIcon/>,
            id: 2,
            onClick: () => history.push('/profile/order')
        },
        {
            text: "Privacidad",
            icon: <FingerprintIcon/>,
            id: 3,
            onClick: () => history.push('/profile/privacy')
        }
    ];
    const drawer = (
        <List>
            {itemsList.map((item, index) => {
                const {text, icon, id, onClick} = item;
                return (
                    <ListItem style={index === 0 ? {backgroundColor: '#3f51b5', color: "white"} : {}}
                              button key={text} onClick={onClick}>
                        {icon && <ListItemIcon>{icon}</ListItemIcon>}
                        <ListItemText primary={text}/>
                    </ListItem>
                );
            })}
        </List>
    )
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const container = window !== undefined ? () => window.document.body : undefined;

    return (
        <>
            <PrimaryAppBar/>
            <h1 style={{textAlign: 'center'}}>Configuración de Cuenta</h1>
            <section className={classes.content}>
                <div className={classes.toolbar}/>
                <form>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <TextField label="Nombre" defaultValue={user.name} fullWidth variant="outlined"/>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField label="Email" defaultValue={user.email} fullWidth variant="outlined"/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField label="Telefono" defaultValue={user.phone_num} fullWidth variant="outlined"/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField label="Direccion detallada" defaultValue={user.address} fullWidth
                                       variant="outlined"/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField label="Cedula" defaultValue={user.doc_num} fullWidth variant="outlined"/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField InputLabelProps={{
                                shrink: true,
                            }} type="date" label="Fecha de nacimiento" defaultValue={user.birth} fullWidth
                                       variant="outlined"/>
                        </Grid>
                    </Grid>

                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        size="large"
                        startIcon={<SaveIcon/>}
                        style={{marginTop: 10}}
                    >
                        Guardar Cambios
                    </Button>
                </form>
            </section>
        </>
    )

}


export default ProfileSettings
