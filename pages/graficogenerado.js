import * as React from 'react';
import data from '/public/data/datos.json';
import Chart from "react-google-charts";

function elementos(data,parametro) {
  let arreglo = [];
  let arrHombre= [];
  let arrMujer = [];
  let arrFinal = [];
  for(var i =0;i<data.length; i++){
    if(data[i].source_profession == parametro){
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
    if(arreglo[k].source_gender == "Hombre"){
        arrHombre.push(arreglo[k]);
    }
    else{
        arrMujer.push(arreglo[k]);
    }
    }
  arrFinal[0] = ['x', 'Hombres', 'Mujeres'];
  for(var k = 1; k < arreglo.length; k++){
    if(c < 10){
        arrFinal[k] = [posicion[10-k], arrHombre[k].mentions,arrMujer[k].mentions];
      }
      c++
    }
    console.log(arrFinal);
  
  return arrFinal
}

const posicion = [10,9,8,7,6,5,4,3,2,1];

export default function graficoGenerado(parametro) { 
  const datos = elementos(data,parametro)  
  return (
    <Chart
    width={'800'}
    height={'400px'}
    chartType="LineChart"
    loader={<div>Loading Chart</div>}
    data={datos}
    options={{
      hAxis: { 
        title: 'Ranking'
      },
      vAxis: {
        title: 'N° de menciones',
      }
    }}
    rootProps={{ 'data-testid': '2' }}
  />
    
  );
}
