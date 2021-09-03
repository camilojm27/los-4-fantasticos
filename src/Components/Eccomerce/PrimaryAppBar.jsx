import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import {Link} from 'react-router-dom'
import {IoCartOutline} from 'react-icons/io5'
import {AiOutlineUser} from 'react-icons/ai'
import {Badge, Menu, MenuItem} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {logout} from "../../state/actions/authAction";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(5),
    },
    title: {
        flexGrow: 1,
        color: "whitesmoke"
    },
}));

export default function PrimaryAppBar() {
    const dispatch = useDispatch();
    const logOut = () => {

        dispatch(logout());

    };

    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={classes.root}>
            <AppBar style={{backgroundColor: 'black'}} position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <Link to="/">
                            <img src="https://res.cloudinary.com/kentruri/image/upload/v1615312416/Logo_v81kkw.ico" alt=""/>
                        </Link>
                    </IconButton>
                    <Link to="/products" className={classes.title}>
                        <Typography variant="h6">
                        Productos
                    </Typography>
                    </Link>

                    <Link to="/about" className={classes.title}>
                        <Typography variant="h6" >
                            Sobre Nosotros
                        </Typography>
                    </Link>
                    <Badge badgeContent={3} color="secondary" style={{marginRight: 40}}>
                        <IoCartOutline fontSize={30}/>
                    </Badge>
                    <Badge>
                        <AiOutlineUser fontSize={30} style={{marginRight: 10}} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}/>
                    </Badge>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}><Link to="/profile/settings">Configuración de Perfil</Link></MenuItem>
                        <MenuItem onClick={handleClose}><Link to="/profile/order">Ordenes</Link></MenuItem>
                        <MenuItem onClick={() => {
                            handleClose();
                            logOut();
                        }}>Cerrar Sesión</MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
        </div>
    );
}