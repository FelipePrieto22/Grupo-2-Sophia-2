import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import data from '/public/data/datos.json';

const columns = [
  { id: 'posicion', label: 'Puesto'},
  { id: 'source_nationality', label: 'Pais', minWidth: 170 },
  { id: 'source_name', label: 'Nombre', minWidth: 100 },
  { id: 'source_gender', label: 'Genero', minWidth: 100 },
  { id: 'source_profession', label: 'Profesión', minWidth: 100 },
  { id: 'source_birthday', label: 'Ultima mencion', minWidth: 100 },
  {id: 'mentions',label: 'Menciones',minWidth: 170,align: 'right',format: (value) => value.toLocaleString('en-US')}];

function elementos(data) {
  var arreglo = [];
  for(var i =0;i<1000; i++){
    arreglo[i]= data[i];
  }
  return arreglo
}

const rows = elementos(data);

export default function tablaRanking() { 
  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 600 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead> {/* cabezera de la tabla que contiene las id de el*/}
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.id} align={column.align}style={{ minWidth: column.minWidth}}
                  className="barraRank">{column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .map((row) => {
                return (
                  <TableRow hover  tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>

  );
}
