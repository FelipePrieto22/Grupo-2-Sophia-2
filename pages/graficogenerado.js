import * as React from 'react';
import Chart from "react-google-charts";
import axios from "axios";
import { useState, useEffect } from "react";

function elementos(data,parametro) {
  let arreglo = [];
  let arrHombre= [];
  let arrMujer = [];
  let arrFinal = [];
  for(var i =0;i<data.total; i++){
    if(data.items[i].profession.trim() == parametro.trim()){
      console.log(data.items[i].mentions)
      arreglo.push(data.items[i]);
    } 
  }
  let user = {name:"steve", profession: "actriz", country: "chile" , gender: "F", year: 1555, mentions: 54}
  let user2 = {name:"steven", profession: "actriz", country: "chile" , gender: "M", year: 1555, mentions: 54}
  for(var i =0;i<25; i++){
    arreglo.push(user);
    arreglo.push(user2);
  }
  console.log(arreglo[10].name);
  console.log(arreglo[0].name);
  
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
    if(arreglo[k].gender == "M"){
        arrHombre.push(arreglo[k]);
    }
    else{
        arrMujer.push(arreglo[k]);
    }
  }
  arrFinal[0] = ['x', 'Hombres', 'Mujeres'];
  
  for(var k = 1; k < arreglo.length; k++){
    if(c < 10){
      
        arrFinal[k] = [posicion[10-k], arrHombre[k-1].mentions,arrMujer[k-1].mentions];
      }
      c++
    }   
  return arrFinal
}

const posicion = [10,9,8,7,6,5,4,3,2,1];

export default function graficoGenerado(parametro) { 
  const [data, setData] = useState("");
  useEffect(() => {
    var config = {
      method: 'get',
      url: 'http://45.79.169.216:86/persons_by_profession/?profession='+parametro+'&page=1&size=50',
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
  const datos = elementos(data,parametro) ;
  return (
    
    <Chart
    width={'500'}
    height={'300px'}
    chartType="Bar"
    loader={<div>Loading Chart</div>}
    
    data={datos}
    options={{
      chartArea: { width: '20%' },
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
