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
import { DataGrid } from '@material-ui/data-grid';

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
                    <ListItem style={ index === 1 ? { backgroundColor: '#3f51b5', color: "white" } : {}} button key={text} onClick={onClick}>
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
    const columns = [
        { field: 'id', headerName: 'ID' },
        {
            field: 'firstName',
            headerName: 'First name',
            width: 150,
        },
        {
            field: 'lastName',
            headerName: 'Last name',
            width: 150,
        },
        {
            field: 'age',
            headerName: 'Age',
            type: 'number',
            width: 110,
        },
        {
            field: 'fullName',
            headerName: 'Full name',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 160,
            valueGetter: (params) =>
                `${params.getValue(params.id, 'firstName') || ''} ${
                    params.getValue(params.id, 'lastName') || ''
                }`,
        },
    ];

    const rows = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    ];
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
                <div style={{ height: 400, width: '100%' }}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                        disableSelectionOnClick
                    />
                </div>
            </section>

        </div>
    )

}
