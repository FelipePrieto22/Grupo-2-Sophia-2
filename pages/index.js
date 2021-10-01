import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout from "../components/layout";

import Search from "./search";
import tablaRanking from "./ranking";

const Index = () => {
  return (
    <div className="container"> {/* estructura de la pagina */}
      <Layout pageId="page1"> {/* identificacion con por la cual es ubicado en layoud.js */}
        <Head>
          <title>SOPHIA II</title> 
          <link rel="icon" href="/favicon.ico" /> 
        </Head>
        <main>
          <h1 className="titulo">Ranking</h1>
            <div className="menuFiltro">
              {
                Search()
              }
            </div>
            {
              tablaRanking()
            }
        </main>
        <footer>
          <a href="https://github.com/FelipePrieto22/Grupo-2-Sophia-2" target="_blank"> Repositorio y tutorial </a>
        </footer>
      </Layout>
    </div>
  );
};

export default Index;