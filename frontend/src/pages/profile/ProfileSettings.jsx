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
import {useDispatch, useSelector} from "react-redux";
import {getUser} from "../../actions/userActions";

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
    const { user: {user} } = useSelector((state) => state.auth);

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
            onClick: () => history.push('/profile/settings')
        },
        {
            text: "Ordenes",
            icon: <MailIcon />,
            id: 2,
            onClick: () => history.push('/profile/order')
        },
        {
            text: "Privacidad",
            icon: <FingerprintIcon />,
            id: 3,
            onClick: () => history.push('/profile/privacy')
        }
    ];
const drawer = (
    <List>
        {itemsList.map((item, index) => {
            const { text, icon,id,  onClick } = item;
            return (
                <ListItem style={ index === 0 ? { backgroundColor: '#3f51b5', color: "white" } : {}}
                                  button key={text} onClick={onClick}>
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
                            <TextField label="Nombre" defaultValue={user.name} fullWidth variant="outlined"/>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField label="Email" defaultValue={user.email} fullWidth  variant="outlined" />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField label="Telefono" defaultValue={user.phone_num} fullWidth variant="outlined" />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField label="Direccion detallada" defaultValue={user.address} fullWidth variant="outlined" />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField label="Cedula" defaultValue={user.doc_num} fullWidth variant="outlined" />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField  InputLabelProps={{
                                shrink: true,
                            }} type="date" label="Fecha de nacimiento" defaultValue={user.birth}  fullWidth variant="outlined" />
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


export default ProfileSettings
