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
const Tablas = () => {
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






//Solicitando datos


  const [datos, setDatos] = useState([] || null)


  const obtainData = async () => {
    const data = await fetch('https://ricuritas.herokuapp.com/api/category')
    const dataJs = await data.json()
    setDatos(dataJs)
    console.log(datos)
  }

  useEffect(() => {
    obtainData()
  }, [])


  //Busqueda

  const [query,setQuery] = useState("");
  const [select,setSelect] = useState("")

  const handleSelect = (option) => {
     
      setSelect(option)

      
  }
  
    return (
        <>
             <CustomizedRadios  handleSelect={handleSelect} />
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
                  {datos.categories && datos.categories.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).filter((item) => {
                   
                   if(item == undefined || query==""){
                     return item
                   }else if (select =="Id" && item.id.toString().toLowerCase().includes(query.toLowerCase())  ){
                     return item
                   }else if (select == "Nombre" && item.name.toString().toLowerCase().includes(query.toLowerCase())  ){
                    return item}
                    
                    
                  }).map(item => (
                    <TableRow>
                      <StyledTableCell>{item.id}</StyledTableCell>
                      <StyledTableCell>{item.name}</StyledTableCell>
                      <StyledTableCell><BtnEdit>
                        Editar
                               </BtnEdit></StyledTableCell>
                      <StyledTableCell><BtnRemove>
                        Eliminar
 </BtnRemove ></StyledTableCell>
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
            count={datos.categories && datos.categories.length }
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </Paper>


        <WrapperBtn><Btn> Nueva categoria</Btn> </WrapperBtn>

        </>
    )
}

export default Tablas
