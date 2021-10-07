import { Button } from "@mui/material";
import Head from "next/head";
import Link from "next/link";
import tablaRanking from "./ranking";
import React, { useEffect } from "react";
import CountrySelect from "./barraBuscadora";
import Layout from "../components/layout";

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
  }
  return (
    <div className="container"> {/* estructura de la pagina */}
      <Layout>
        <Head><title>SOPHIA II</title> <link rel="icon" href="/favicon.ico" /> </Head>
        
      

        <main>
          <div className="buscador">
            {
              CountrySelect()
            }
        <h1 className="title">
          Tabla de búsqueda 
        </h1>
          </div>
        

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