import Head from "next/head";
import Layout from "../components/layout";
import React from "react";
import CountrySelect from "./barraBuscadora";
import tablaRanking from "./ranking";

const Index = () => {
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
      <Layout pageId="page1"> {/* identificacion con por la cual es ubicado en layoud.js */}
        <Head><title>SOPHIA II</title> <link rel="icon" href="/favicon.ico" /> </Head>
        <main>
        <div> <h1>Elige un pais de la barra buscadora: </h1>
            La página buscará si existen personas de aquel país en la base de datos, si existen,
            generará una tabla organizada con las personas más influentes del país según su numero de 
            menciones en los medios.
            <div>PD: la pagina actualmente cuenta con personas de Chile y Estados Unidos</div>
              </div>
          <div className="buscador">
            {
              CountrySelect()
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

export default Index;