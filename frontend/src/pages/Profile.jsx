import React, {useState} from "react";
import {
    Drawer,
    ListItem,
    List,
    ListItemIcon,
    ListItemText, TextField, Button, Grid, Hidden, IconButton, Toolbar, AppBar, Typography
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MailIcon from "@material-ui/icons/Mail";
import SaveIcon from '@material-ui/icons/Save';
import SettingsIcon from '@material-ui/icons/Settings';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import MenuIcon from '@material-ui/icons/Menu';

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

const Profile = (props) => {

    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    };
    const classes = useStyles();
    const itemsList = [
        {
            text: "Ajustes de Cuenta",
            icon: <SettingsIcon />,
            id: 1,
            onClick: () => toggleTab(1)
        },
        {
            text: "Privacidad",
            icon: <FingerprintIcon />,
            id: 2,
            onClick: () => toggleTab(2)
        },
        {
            text: "Contact",
            icon: <MailIcon />,
            id: 3,
            onClick: () => toggleTab(3)
        }
    ];
const drawer = (
    <List>
        {itemsList.map((item, index) => {
            const { text, icon,id,  onClick } = item;
            return (
                <ListItem className={{
                    backgroundColor: '#440381ff'}} button key={text} onClick={onClick}>
                    {icon && <ListItemIcon>{icon}</ListItemIcon>}
                    <ListItemText primary={text} />
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
        <div style={{display: 'flex'}}>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Configuración de perfil
                    </Typography>
                </Toolbar>
            </AppBar>
            <nav className={classes.drawer} aria-label="mailbox folders">
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Hidden smUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
            <section className={classes.content}>
                <div className={classes.toolbar} />
                <form>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <TextField label="Nombre" fullWidth variant="outlined"/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField label="Apellidos" fullWidth variant="outlined"/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField label="Email" fullWidth  variant="outlined" />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField label="Telefono"  fullWidth variant="outlined" />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField label="Direccion detallada"  fullWidth variant="outlined" />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField label="Cedula"  fullWidth variant="outlined" />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField  InputLabelProps={{
                                shrink: true,
                            }} type="date" label="Fecha de nacimiento"  fullWidth variant="outlined" />
                        </Grid>
                    </Grid>

                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        size="large"
                        startIcon={<SaveIcon />}
                        style={{marginTop: 10}}
                    >
                        Save
                    </Button>
                </form>
            </section>
        </div>
    )

}


export default Profile
