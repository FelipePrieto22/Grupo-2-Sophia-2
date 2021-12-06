import Head from "next/head";
import React from "react";
import Layout from "../components/layout";
import buscarProfesion from "./busquedaProfesion";
import graficoGenerado from "./graficogenerado";
import tablaRanking from "./ranking";
import tablaRankingProfession from "./ranking_profession"

const Respuesta=()=>{ 
  if (typeof window !== "undefined") {  //obtiene la profesion que esta en la url

    var elemento = document.URL
    for(var i=0; i < elemento.length ;i++){
      if(elemento.charAt(i) == '?'){
        var a = i;
      }
    }
    var profession = elemento.substring(a+12,elemento.length);
    console.log(profession)
    
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
          Grafico resultante de la profesion: {profession}
        </h1>
        </div>
          {
            graficoGenerado(profession)
          }
          <div>
            
           {
            tablaRankingProfession(profession,1)
           }
          </div>

        </main>
        <footer>
          <a href="https://github.com/FelipePrieto22/Grupo-2-Sophia-2" target="_blank"> Repositorio y tutorial </a>
        </footer>
        </Layout>
    </div>
  )
}

export default Respuesta;