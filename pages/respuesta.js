import { Button } from "@mui/material";
import Head from "next/head";
import Link from "next/link";
import tablaRanking from "./ranking";
import React, { useEffect } from "react";
import CountrySelect from "./barraBuscadora";

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
    
    <div className="container">
      <Head>
        <title>Busqueda</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="title">Esta será la pagina donde se mostrara la tabla de ranking</h1>
      {
        CountrySelect()
      }
      <main>
        <div className="grid">
          <Link href={"/"}>
            <a className="card">Volver</a>
          </Link>
        </div>
        {
          tablaRanking(result)
        }
      </main>

    </div>
  );
};

export default Respuesta;