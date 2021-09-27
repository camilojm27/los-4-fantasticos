import React, { useState } from 'react';
import { createMuiTheme, makeStyles, ThemeProvider, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TablePagination from '@material-ui/core/TablePagination';
import { Btn, BtnEdit, BtnRemove, WrapperBtn } from '../Btn'
import SearchBar from "material-ui-search-bar";
import { SearchbarContainer } from '../Searchbar';
import CustomizedRadios from '../Category/SearchOption'
import { Link } from 'react-router-dom';


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
        { id: 'Id', label: 'ID', minWidth: 100 },
        { id: 'Id del cliente', label: 'Id del cliente', minWidth: 150 },
        { id: 'Metodo de pago', label: 'Metodo de pago', minWidth: 150 },
        { id: 'Productos comprados', label: 'Productos comprados', minWidth: 100 },
        { id: 'Fecha de compra', label: 'Fecha de compra', minWidth: 100 },
        { id: 'Total', label: 'Total', minWidth: 100 },
        { id: 'Generar PDF', label: 'Generar PDF', minWidth: 150 }

    ];

    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const { loading, error, invoice } = props.listInvoice

    //Busqueda

    const [query, setQuery] = useState("");
    const [select, setSelect] = useState("Id")

    const handleSelect = (option) => {
        setSelect(option)
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
                                    <h1>cargando...</h1> : invoice.fullOrders && invoice.fullOrders.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).filter((item) => {

                                    if (query === "") {
                                        return item
                                    } else if (select === "Id" && item.id.toString().toLowerCase().includes(query.toLowerCase())) {
                                        return item
                                    } else if (select === "Nombre" && item.name.toString().toLowerCase().includes(query.toLowerCase())) {
                                        return item
                                    }


                                }).map(item => (
                                    <TableRow key={item.order.id}>
                                        <StyledTableCell>{item.order.id}</StyledTableCell>
                                        <StyledTableCell>{item.order.user_id}</StyledTableCell>
                                        <StyledTableCell>{item.payments[0].method}</StyledTableCell>
                                        <StyledTableCell>{item.order.products_list.length}</StyledTableCell>
                                        <StyledTableCell> { (item.order.date_time).substr(0,10)}   </StyledTableCell>
                                        <StyledTableCell>{item.order.total}$</StyledTableCell>
                                       
                                        <StyledTableCell>
                                            {console.log(item.order.receipt)}
                                        <a href={item.order.receipt}>
                                        <BtnEdit>
                                           
                                            Generar
                                           
                                           
                                        </BtnEdit>   </a></StyledTableCell>
                                     
           
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
                    count={loading ? <h1>cargando...</h1> : invoice.fullOrders && invoice.fullOrders.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}/>
            </Paper>


         
            <h1 style={{margin: "20px 0  0 0"}}>{error}</h1>


        </>


    )
}

export default Tablas
