import React, {useState} from "react";
import {List, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import MailIcon from "@material-ui/icons/Mail";
import SettingsIcon from '@material-ui/icons/Settings';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import './Profile.css'
import PrimaryAppBar from "../../Components/Eccomerce/PrimaryAppBar";

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

export const ProfileOrder = (props) => {

    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    };
    const {history} = props;

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
                    <ListItem style={index === 1 ? {backgroundColor: '#3f51b5', color: "white"} : {}} button key={text}
                              onClick={onClick}>
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
            <div>
                <PrimaryAppBar/>

                <section className={classes.content}>
                    <div className={classes.toolbar}/>
                    <div className="order-card">
                        <div>
                            <img src="https://images.rappi.com/products/2090099620-1566521324.jpg?d=200x200&e=webp"
                                 alt=""/>
                        </div>
                        <div>
                            <h4>Papa John's Cañas Gordas</h4>
                            <div className="order-card-details">
                                <h5>Fecha <small>Sábado, 28 de agosto de 2021</small></h5>
                                <h5>Cantidad <small>2</small></h5>
                                <h5>Total <small> $ 7.590</small></h5>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </>

    )

}
