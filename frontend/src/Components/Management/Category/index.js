import React from 'react';
import { withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { createMuiTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import TablePagination from '@material-ui/core/TablePagination';
import {CategoryContainer,CategoryWrapperTable} from './CategoryElements'
const Category = () => {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#D63434",
      },

    },
  });

  const StyledTableCell = withStyles((theme) => ({


    head: {
      backgroundColor: '#EBE412',
      color: theme.palette.common.white,
      fontSize: 25,
    },
    body: {
      fontSize: 20,
      fontFamily: 'RocknRoll One',
    },

  }))(TableCell);

  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(even)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

  function createData(Id, Nombre, Editar, Eliminar) {
    return { Id, Nombre, Editar, Eliminar };
  }

  const rows = [
    createData('01', 'Carnes', 'Editar', 'Eliminar'),
    createData('02', 'Comidas rapidas', 'Editar', 'Eliminar'),

  ];

  const useStyles = makeStyles({
    root: {
      width: '100%',
    },
    container: {
      maxHeight: 440,
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


   
    return (
      <CategoryContainer>
        <CategoryWrapperTable>
      <Paper className={classes.root}>
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
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <StyledTableCell key={column.id} align={column.align}>
                        {value == "Editar" ? (<Button variant="contained" color='primary'>
                          Editar
                        </Button>) : value == "Eliminar" ? <Button variant="contained" color=''>
                          Eliminar
</Button> : value}
                      </StyledTableCell>
                    );
                  })}
                </TableRow>
              );
            })}

          </TableBody>
          </ThemeProvider>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
    </CategoryWrapperTable>
    </CategoryContainer>
    )
}

export default Category
