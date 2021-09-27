import React, {useEffect, useState} from 'react';
import {createMuiTheme, makeStyles, ThemeProvider, withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TablePagination from '@material-ui/core/TablePagination';
import {Btn, BtnEdit, BtnRemove, WrapperBtn} from '../Btn'
import SearchBar from "material-ui-search-bar";
import {SearchbarContainer} from '../Searchbar';
import CustomizedRadios from './SearchOption'


const Tablas = (props) => {
    //Estilos de las tablas
    const theme = createMuiTheme({
        palette: {
            primary: {
                main: "#D63434",
            },

        },
    });


    const StyledTableCell = withStyles((theme) => ({


        head: {
            backgroundColor: '#575757',
            color: theme.palette.common.white,
            fontSize: 20,
        },
        body: {
            fontSize: 15,
            fontFamily: 'RocknRoll One',
        },

    }))(TableCell);

    const useStyles = makeStyles({
        root: {
            width: "140vh",

        },
        container: {
            maxHeight: 550,
            minHeight: 550,

            minWidth: 1000,
        },
    });

    const columns = [
        {id: 'Id', label: 'ID', minWidth: 0},
        {id: 'Nombre', label: 'Nombre', minWidth: 100},
        {id: 'Fecha de inicio',label:"Fecha de inicio", minWidth:100},
        {id: 'Fecha de finalizacion',label:"Fecha de finalizacion", minWidth:100},
        {id: 'Descuento',label:"Descuento",minWidth:100},
        {id: 'Editar', label: '', minWidth: 100},
        {id: 'Eliminar', label: '', minWidth: 100},

    ];

    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event,newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const {loading, error, promotions} = props.listPromotion

    //Busqueda

    const [query, setQuery] = useState("");
    const [select, setSelect] = useState("Id")

    const handleSelect = (option) => {
        setSelect(option)
    }

    //CRU
    const handleChange = (object, data) => {
        props.handleSelect(object, data)
    }
   

    return (
        <>

            <CustomizedRadios handleSelect={handleSelect}/>
            <SearchbarContainer>


                <SearchBar
                    onChange={(e) => {
                        setQuery(e)
                    }}

                    style={{
                        margin: '0 auto',
                        maxWidth: 800
                    }}
                    placeholder="Buscar..."

                />
            </SearchbarContainer>
 
            <Paper className={classes.root} elevation={10}>
                <TableContainer className={classes.container}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <StyledTableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{minWidth: column.minWidth}}
                                    >
                                        {column.label}
                                    </StyledTableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <ThemeProvider theme={theme}>
                            <TableBody>
                                {loading ?
                                    <h1>cargando...</h1> : promotions.promotions && promotions.promotions.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).filter((item) => {
                               
                                    if (query === "") {
                                        return item
                                    } else if (select === "Id" && item.id.toString().toLowerCase().includes(query.toLowerCase())) {
                                        return item
                                    } else if (select === "Nombre del descento" && item.discount.toString().toLowerCase().includes(query.toLowerCase())) {
                                        return item
                                    }
                                    else if (select === "Fecha de inicio" && item.start_date.toString().toLowerCase().includes(query.toLowerCase())) {
                                        return item
                                    }
                                    else if (select === "Fecha de finalizacion" && item.end_date.toString().toLowerCase().includes(query.toLowerCase())) {
                                        return item
                                    }
                                
                                  
                                    


                                }).map(item => (
                                    <TableRow key={item.id}>
                                        <StyledTableCell>{item.id}</StyledTableCell>
                                        <StyledTableCell>{item.title}</StyledTableCell>
                                        <StyledTableCell>{item.start_date}</StyledTableCell>
                                        <StyledTableCell>{item.end_date}</StyledTableCell>
                                        <StyledTableCell>{item.discount}</StyledTableCell>
                                        <StyledTableCell><BtnEdit onClick={() => handleChange({
                                            remove: false,
                                            edit: true,
                                            insert: false
                                        }, item)}>
                                            Editar
                                        </BtnEdit></StyledTableCell>
                                        <StyledTableCell><BtnRemove onClick={() => handleChange({
                                            remove: true,
                                            edit: false,
                                            insert: false
                                        }, item)}>
                                            Eliminar
                                        </BtnRemove></StyledTableCell>
                                    </TableRow>

                                ))

                                }
                            </TableBody>
                        </ThemeProvider>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[2, 10, 15]}
                    component="div"
                    count={loading ? <h1>cargando...</h1> : promotions.promotions && promotions.promotions.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}/>
            </Paper>


            <WrapperBtn><Btn onClick={() => handleChange({
                                            remove: false,
                                            edit: false,
                                            insert: true}, {})}> Nuevo descuento</Btn> </WrapperBtn>

            <h1 style={{margin: "20px 0  0 0"}}>{error}</h1>


        </>


    )
}

export default Tablas
