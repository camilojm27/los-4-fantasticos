import React, {useEffect, useState} from 'react';
import {createTheme, makeStyles, ThemeProvider, withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TablePagination from '@material-ui/core/TablePagination';
import {Btn, BtnActivate, BtnEdit, BtnRemove, WrapperBtn} from '../Btn'
import SearchBar from "material-ui-search-bar";
import {SearchbarContainer} from '../Searchbar';
import CustomizedRadios from './SearchOption'
import {useDispatch, useSelector} from 'react-redux'
import {editProduct, getProducts} from '../../../state/actions/productAction'

const Tablas = (props) => {
    //Estilos de las tablas
    const {user: currentUser} = useSelector((state) => state.auth);
    const theme = createTheme({
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
        {id: 'Id', label: 'ID', minWidth: 60},
        {id: 'Nombre', label: 'Nombre', minWidth: 80},
        {id: 'Unidades', label: 'Unidades', minWidth: 50},
        {id: 'Category_id', label: 'Categoria', minWidth: 100},
        {id: 'description', label: 'Descripcion', minWidth: 110},
        {id: 'details', label: 'Detalles', minWidth: 110},
        {id: 'available', label: 'disponible', minWidth: 80},
        {id: 'Activar', label: '', minWidth: 100},
        {id: 'Editar', label: '', minWidth: 100},
        {id: 'Eliminar', label: '', minWidth: 100},

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


    //Solicitando datos

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])
    const listProducts = useSelector(state => state.productList)
    const {loading, error, products} = listProducts


    //Busqueda

    const [query, setQuery] = useState("");
    const [select, setSelect] = useState("Id")

    const handleSelect = (option) => {

        setSelect(option)
        console.log(option)


    }


    //CRU

    const handleChange = (object, data) => {
        props.handleSelect(object, data)
    }

    const changeStatus = (data) =>  {
        const form = new FormData()
        form.append("name",data.name)
        form.append("id",data.id)
        form.append("image",data.image)
        form.append("description",data.description)
        form.append("iva",data.iva)
        form.append("units",data.units)
        form.append("details",data.details)
        form.append("available",true)
        form.append("category_id",data.category_id)
        form.append("unit_price",data.unit_price)
        console.log(data)
        console.log(form,currentUser.Authorization, "hola")
        dispatch(editProduct(form, currentUser.Authorization)).then(() => {
            dispatch(getProducts())
        }).catch(error => {
            console.log(error.response.data)
        })
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
                                    <h1>cargando...</h1> : products.products && products.products.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).filter((item) => {
                                  
                                    if (item === undefined || query === "") {
                                        return item
                                    } else if (select === "Id" && item.id.toString().toLowerCase().includes(query.toLowerCase())) {
                                        return item
                                    } else if (select === "Nombre" && item.name.toString().toLowerCase().includes(query.toLowerCase())) {
                                        return item
                                    } else if (select === "Unidad" && item.units.toString().toLowerCase().includes(query.toLowerCase())) {
                                        return item
                                    } else if (select === "Categoria" && item.category_name.toString().toLowerCase().includes(query.toLowerCase())) {
                                        return item
                                    }


                                }).map(item => (
                                    <TableRow key={item.id}>
                                        <StyledTableCell>{item.id}</StyledTableCell>
                                        <StyledTableCell>{item.name}</StyledTableCell>
                                        <StyledTableCell>{item.units}</StyledTableCell>
                                        <StyledTableCell>{item.category_name}</StyledTableCell>
                                        <StyledTableCell>{item.description}</StyledTableCell>
                                        <StyledTableCell>{item.details}</StyledTableCell>
                                        <StyledTableCell>{ (item.available ? "si" : "no")}</StyledTableCell>
                                        <StyledTableCell><BtnActivate onClick={() => changeStatus(item)}>
                                            Activar
                                        </BtnActivate></StyledTableCell>
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
                    rowsPerPageOptions={[2, 10, 15,100,1000]}
                    component="div"
                    count={loading ? <h1>cargando...</h1> : products.products && products.products.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    onPageChange={handleChangePage}/>
            </Paper>


            <WrapperBtn><Btn onClick={() => handleChange({remove: false, edit: false, insert: true}, {})}> Nuevo
                producto</Btn> </WrapperBtn>

        </>
    )
}

export default Tablas
