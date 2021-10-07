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
  { id: 'source_gender', label: 'Género', minWidth: 100 },
  { id: 'source_profession', label: 'Profesión', minWidth: 100 },
  { id: 'source_birthday', label: 'Última mención', minWidth: 100 },
  { id: 'mentions',label: 'Menciones',minWidth: 170,align: 'right',format: (value) => value.toLocaleString('en-US')}];


function elementos(data,parametro) {
  let arreglo = [];
  let arrFinal = [];
  for(var i =0;i<data.length; i++){
    if(data[i].source_nationality == parametro && data[i].source_gender == "Mujer"){
      arreglo.push(data[i]);
    } 
  }
  
  for(var i = 0; i < arreglo.length;i++){
    for(var j = 0; j <= arreglo.length-2;j++){
      if(parseInt(arreglo[j].mentions) <= parseInt(arreglo[j+1].mentions)){
        var aux = arreglo[j];
        arreglo[j] = arreglo[j+1];
        arreglo[j+1]= aux;
      }
    } 
  }
  var c =0;
  for(var k = 0; k < arreglo.length; k++){
    if(c < 10){
      arrFinal.push(arreglo[k]);
      console.log[arrFinal[k]]  
      arrFinal[k].posicion = posicion[k];
    }
    c++
  }
  return arrFinal
}

const posicion = [1,2,3,4,5,6,7,8,9,10];

export default function tablaRanking(parametro) { 
  const rows = elementos(data,parametro)  
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
