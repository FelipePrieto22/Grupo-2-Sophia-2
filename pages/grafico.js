//pasos necesarios
//1-obtener los siguientes parametros: profesion y numero de menciones(ademas de ser filtrados por pais)
//2- mejorar a elejir mundialmente o solo en paises especificos
import Head from "next/head";
import Layout from "../components/layout";
import React from "react";

import buscarProfesion from "./busquedaProfesion";


const Grafico = () => {
  return (
    
    
    <div className="container">
      <Layout pageId="page2"> 
        <Head><title>Grafico</title> <link rel="icon" href="/favicon.ico" /> </Head>
        <main>
              <div> <h1>Prueba con las siguientes profesiones: </h1>
                Profesor,Abogado, Médico cirujano, Paleontólogo, Ingeniero, Historiador, Geógrafo, Biólogo,
                Filólogo, Psicólogo, Matemático, Arquitecto, Profesor, Periodista, Botánico, Físico, Sociólogo, 
                Administrador, Lingüista, Radiólogo, Contador, Psicoanalista, Ecólogo
              </div>
            <div className="buscador">
              
              {
                buscarProfesion()
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

export default Grafico;