import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import axios from "axios";
import { useState, useEffect } from "react";
//import data from '/public/data/datos.json';

const columns = [
  { id: 'posicion', label: 'Puesto'},
  { id: 'country', label: 'Pais', minWidth: 170 },
  { id: 'name', label: 'Nombre', minWidth: 100 },
  { id: 'gender', label: 'Género', minWidth: 100 },
  { id: 'profession', label: 'Profesión', minWidth: 100 },
  { id: 'year', label: 'Última mención', minWidth: 100 },
  { id: 'mentions',label: 'Menciones',minWidth: 170,align: 'right',format: (value) => value.toLocaleString('en-US')}];


function elementos(data,parametro,tipo) {
  let arreglo = [];
  let arrFinal = [];
  let arrHombre= [];
  let arrMujer = [];
  //console.log( Object.keys (data) )
  if(tipo == 1){
    for(var i =0;i<data.total; i++){
      if(data.items[i].profession == parametro){
        arreglo.push(data.items[i]);
      } 
    }
    //console.log(Object.keys(data.items).length);
    for(var i = 0; i < arreglo.length;i++){
      for(var j = 0; j <= arreglo.length-2;j++){
        if(parseInt(arreglo[j].mentions) <= parseInt(arreglo[j+1].mentions)){
          var aux = arreglo[j];
          arreglo[j] = arreglo[j+1];
          arreglo[j+1]= aux;
        }
      } 
    }
    for(var k = 0; k < arreglo.length; k++){
      if(arreglo[k].gender == "H"){
          arrHombre.push(arreglo[k]);
      }
      else{
          arrMujer.push(arreglo[k]);
      }
    }
    var c =0;
    for(var k = 0; k < arreglo.length; k++){
      if(c < 10){
        arrFinal.push(arrHombre[k]); 
        arrFinal.push(arrMujer[k]); 
        arrFinal[k].posicion = posicion[k];
      }
      c++
    }
  }
  
  else{
    for(var i =0;i< data.total; i++){
      if(data.items[i].country == parametro && data.items[i].gender == "F"){
        arreglo.push(data.items[i]);
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
        arrFinal[k].posicion = posicion[k];
      }
      c++
    }
  }
  
  return arrFinal
}

const posicion = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

export default function tablaRanking(parametro,tipo) { 
  const [data, setData] = useState("");
  useEffect(() => {
    var config = {
      method: 'get',
      url: 'http://45.79.169.216:86/persons_by_country/?country='+parametro+'&page=1&size=50',
      headers: { 
        'accept': 'application/json', 
        'X-Api-Key': 'password'
      }
    }
    axios(config)
    .then(res => {
        const result = res.data;
        setData(result);
        console.log(result);
    })
  }, []);
  const rows = elementos(data,parametro,tipo);
    
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
