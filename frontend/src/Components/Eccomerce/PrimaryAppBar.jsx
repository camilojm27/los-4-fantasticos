import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from 'react-router-dom'

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
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar style={{backgroundColor: 'black'}} position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <Link to="/">
                            <img src="https://res.cloudinary.com/kentruri/image/upload/v1615312416/Logo_v81kkw.ico" alt=""/>
                        </Link>
                    </IconButton>
                    <Link className={classes.title}>
                        <Typography variant="h6">
                        Productos
                    </Typography>
                    </Link>

                    <Link className={classes.title}>
                        <Typography variant="h6" >
                            Sobre Nosotros
                        </Typography>
                    </Link>
                    {/*<Button color="inherit">Login</Button>*/}
                </Toolbar>
            </AppBar>
        </div>
    );
}
