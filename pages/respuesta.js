import { Button } from "@mui/material";
import Head from "next/head";
import Link from "next/link";
import tablaRanking from "./ranking";
import React, { useEffect } from "react";
import CountrySelect from "./barraBuscadora";
import Layout from "../components/layout";
import hastaTo from "./responsiveTo";
import ResponsiveDatePickers from "./responsive";

const Respuesta = () => {
  if (typeof window !== "undefined") {  //obtiene el pais que esta en la url
    // browser code
    var elemento = document.URL
    for(var i=0; i < elemento.length ;i++){
      if(elemento.charAt(i) == '?'){
        var a = i;
      }
    }
    var result = elemento.substring(a+1,elemento.length);
    result = result.replace("%20", " "); // reemplaza los %20 por un espacio
    
  }
  return (
    <div className="container"> 
      <Layout>
        <Head><title>SOPHIA II</title> <link rel="icon" href="/favicon.ico" /> </Head>
        
        <main>
          <div className="buscador_resultado">
            {
              CountrySelect()
            }
          </div>
          <div className="desde">
            {
              ResponsiveDatePickers()
            }
          </div>
          <div className="hasta">
            {
              hastaTo()
            }
          </div>
          <h1 className="searchTable">
          Tabla de búsqueda 
          </h1>
            {
              tablaRanking(result)
            }
        </main>
        <footer>
          <a href="https://github.com/FelipePrieto22/Grupo-2-Sophia-2" target="_blank"> Repositorio y tutorial </a>
        </footer>
        </Layout>
    </div>
  );
  
};

export default Respuesta;