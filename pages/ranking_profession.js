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
import { randomInt } from 'crypto';
import dataJson from '/public/data/datos.json' ;

const columns = [
  { id: 'posicion', label: 'Puesto'},
  { id: 'source_nationality', label: 'Pais', minWidth: 170 },
  
  
  { id: 'source_profession', label: 'Profesión', minWidth: 100 },
  
  { id: 'mentions',label: 'Menciones',minWidth: 170,align: 'right',format: (value) => value.toLocaleString('en-US')}
];
10
function elementos(data,parametro,tipo) {
  let arreglo = [];
  let arrFinal = [];
  let arrHombre= [];
  let arrMujer = [];

  if(tipo == 1){ 
    
      //Tabla historia de usuario 2
    
      for(var i =0;i<dataJson.length; i++){
        if(dataJson[i].source_profession == parametro){
          arreglo.push(dataJson[i]);
        } 
      }
      
      for(var i = 0; i < arreglo.length;i++){  //Ordena el arreglo
        for(var j = 0; j <= arreglo.length-2;j++){
          if(parseInt(arreglo[j].mentions) <= parseInt(arreglo[j+1].mentions)){
            var aux = arreglo[j];
            arreglo[j] = arreglo[j+1];
            arreglo[j+1]= aux;
          }
        } 
      }
      for(var k = 0; k < arreglo.length; k++){
        if(arreglo[k].source_gender == "Hombre"){
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
          //arrFinal.push(arrMujer[k]); 
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
    for(var i = 0; i<arreglo.length;i++){ //Arregla numero de menciones random
      var num = Math.floor(Math.random() * (1000 - 80)) + 80;
      arreglo[i].mentions = num;
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

const posicion = [1,2,3,4,5,6,7,8,9,10];

export default function tablaRankingProfession(parametro,tipo) { 
  
  const rows = elementos(dataJson,parametro,tipo);
    
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
            {rows.map((row) => {
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
