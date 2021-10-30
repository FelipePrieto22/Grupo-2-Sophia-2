import { TableContainer, Paper } from "@mui/material";
import Head from "next/head";
import React, { useEffect } from "react";
import Layout from "../components/layout";
import buscarProfesion from "./busquedaProfesion";
import graficoGenerado from "./graficogenerado";
import tablaRanking from "./ranking";
/* import tablaProfesion from "./tablaProfesion"; */

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
          <div className="buscador_resultado">
            {
              buscarProfesion()
            }
        <h1 className="title">
          Grafico de resultado de busqueda
        </h1>
          </div>

          {
          graficoGenerado(result)//crear una tabla con la informacion de las personas
          /*  tablaProfesion(result) */
          }
          <div>
           {
             tablaRanking(result,1)
           }
          </div>
        </main>
        <footer>
          <a href="https://github.com/FelipePrieto22/Grupo-2-Sophia-2" target="_blank"> Repositorio y tutorial </a>
        </footer>
        </Layout>
    </div>
  );
  
};

export default Respuesta;