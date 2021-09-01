import React, { useEffect, useState } from 'react';
import { withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { createMuiTheme } from '@material-ui/core/styles';
import TablePagination from '@material-ui/core/TablePagination';
import { Btn, WrapperBtn, BtnEdit, BtnRemove } from '../Btn'
import SearchBar from "material-ui-search-bar";
import { SearchbarContainer } from '../Searchbar';
import CustomizedRadios from './SearchOption'
import { useDispatch } from 'react-redux'
import { getProducts } from '../../../redux/actions/productAction'
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
            maxHeight: 330,
            minHeight: 330,

            minWidth: 1000,
        },
    });

    const columns = [
        { id: 'Id', label: 'ID', minWidth: 170 },
        { id: 'Nombre', label: 'Nombre', minWidth: 100 },
        { id: 'Unidades', label: 'Unidades', minWidth: 100 },
        { id: 'Category_id', label: 'Categoria', minWidth: 100 },
        { id: 'description', label: 'Descripcion', minWidth: 100 },

        { id: 'details', label: 'Detalles', minWidth: 100 },
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

    const { loading, error, products } = props.listProduct
    //Solicitando datos

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])


    //Busqueda

    const [query, setQuery] = useState("");
    const [select, setSelect] = useState("Id")

    const handleSelect = (option) => {

        setSelect(option)


    }

    const handleChange = (object, data) => {
        props.handleSelect(object, data)

    }

    return (
        <>
            <CustomizedRadios handleSelect={handleSelect} />
            <SearchbarContainer>
                <SearchBar
                    onChange={(e) => { setQuery(e) }}

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
                                {loading ? <h1>cargando...</h1> : products.products && products.products.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).filter((item) => {

                                    if (item === undefined || query === "") {
                                        return item
                                    } else if (select === "Id" && item.id.toString().toLowerCase().includes(query.toLowerCase())) {
                                        return item
                                    } else if (select === "Nombre" && item.name.toString().toLowerCase().includes(query.toLowerCase())) {
                                        return item
                                    }
                                    else if (select === "Unidad" && item.units.toString().toLowerCase().includes(query.toLowerCase())) {
                                        return item
                                    }
                                    else if (select === "Categoria" && item.category_name.toString().toLowerCase().includes(query.toLowerCase())) {
                                        return item
                                    }


                                }).filter(item => (
                                  item.available ?
                                     <TableRow key={item.id}>

                                        <StyledTableCell>{item.id}</StyledTableCell>
                                        <StyledTableCell>{item.name}</StyledTableCell>
                                        <StyledTableCell>{item.units}</StyledTableCell>
                                        <StyledTableCell>{item.category_name}</StyledTableCell>
                                        <StyledTableCell>{item.description}</StyledTableCell>

                                        <StyledTableCell>{item.details}</StyledTableCell>
                                        <StyledTableCell><BtnEdit onClick={() => handleChange({ remove: false, edit: true, insert: false }, item)}>
                                            Editar
                                        </BtnEdit></StyledTableCell>
                                        <StyledTableCell><BtnRemove onClick={() => handleChange({ remove: true, edit: false, insert: false }, item)}>
                                            Eliminar
                                        </BtnRemove ></StyledTableCell>
                                    </TableRow>  :  null

                                ))

                                }
                            </TableBody>
                        </ThemeProvider>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[2, 10, 15]}
                    component="div"
                    count={loading ? <h1>cargando...</h1> : products.categories && products.categories.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                    onPageChange={handleChangePage}/>
            </Paper>


            <WrapperBtn><Btn onClick={() => handleChange({ remove: false, edit: false, insert: true }, {})}> Nuevo producto</Btn> </WrapperBtn>

            <h1 style={{ margin: "20px 0  0 0" }}>{error}</h1>

        </>
    )
}

export default Tablas
