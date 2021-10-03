import Head from "next/head";
import Layout from "../components/layout";
import React from "react";
import CountrySelect from "./barraBuscadora";

const Index = () => {
  return (
    <div className="container"> {/* estructura de la pagina */}
      <Layout pageId="page1"> {/* identificacion con por la cual es ubicado en layoud.js */}
        <Head><title>SOPHIA II</title> <link rel="icon" href="/favicon.ico" /> </Head>
        <main>
        
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