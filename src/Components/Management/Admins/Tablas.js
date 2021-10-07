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
            width: "145vh",
            height: "600px",

        },
        container: {
            maxHeight: 600,
            minHeight: 600,

            minWidth: 1000,
        },
    });

    const columns = [
        { id: 'Nombre', label: 'Nombre', minWidth: 100 },
        { id: 'Email', label: 'Email', minWidth: 100 },
        { id: 'Tipo de documento', label: 'Tipo de documento', minWidth: 100 },
        { id: 'documento', label: 'documento', minWidth: 100 },
        { id: 'Numero de telefono', label: 'Numero de telefono', minWidth: 100 },
        { id: 'direccion', label: 'direccion', minWidth: 100 },
        { id: 'Editar', label: '', minWidth: 100 },
        { id: 'Eliminar', label: '', minWidth: 100 },

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

    const { loading, error, users } = props.listUsers

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

            <CustomizedRadios handleSelect={handleSelect} />
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
                                        style={{ minWidth: column.minWidth }}
                                    >
                                        {column.label}
                                    </StyledTableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <ThemeProvider theme={theme}>
                            <TableBody>
                                {loading ?
                                    <h1>cargando...</h1> : users.users && users.users.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).filter((item) => {
                                        if (item.role !== 0 && item.available) {
                                            if (query === "") {
                                                return item
                                            } else if (select === "Nombre" && item.name.toString().toLowerCase().includes(query.toLowerCase())) {
                                                return item
                                            }
                                            else if (select === "Email" && item.email.toString().toLowerCase().includes(query.toLowerCase())) {
                                                return item
                                            }
                                            else if (select === "Numero de documento" && item.doc_unm.toString().toLowerCase().includes(query.toLowerCase())) {
                                                return item
                                            }
                                            else if (select === "Numero de telefono" && item.phone_num.toString().toLowerCase().includes(query.toLowerCase())) {
                                                return item
                                            }
                                            

                                        }



                                    }).map(item => (

                                        <TableRow key={item.id}>




                                            <StyledTableCell>{item.name}</StyledTableCell>
                                            <StyledTableCell>{item.email}</StyledTableCell>
                                            <StyledTableCell>{item.doc_type}</StyledTableCell>
                                            <StyledTableCell>{item.doc_num}</StyledTableCell>
                                            <StyledTableCell>{item.phone_num}</StyledTableCell>

                                            <StyledTableCell>{item.location.address}</StyledTableCell>
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
                    count={loading ? <h1>cargando...</h1> : users.users && users.users.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </Paper>



            <WrapperBtn><Btn onClick={() => handleChange({
                remove: false,
                edit: false,
                insert: true
            }, {})}> Nuevo usuario</Btn> </WrapperBtn>

            <h1 style={{ margin: "20px 0  0 0" }}>{error}</h1>


        </>


    )
}

export default Tablas
