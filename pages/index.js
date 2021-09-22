import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout from "../components/layout";
import * as React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import { Checkbox, TextField } from "@material-ui/core";

const Index = () => {
  return (
    <div className="container">
      <Head>
        <title>SOPHIA II</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout pageId="page1">
        <div className= "pruebas">Hola</div>
        <main>
          {/* <h2 className="title">
            <Image
              src="/images/eye.png"
              height={50} // Desired size with correct aspect ratio
              width={70} // Desired size with correct aspect ratio
              alt="ojo"/>T.C.S SOPHIA II
          </h2> */}
          
          <div>
            {/* <Button variant="contained" color="primary"> {/* Botones  Filtros! </Button> */}
            {/* <TextField label="Buscar"></TextField> {/* cuadros para escribir texto */} 
          </div> 
          <p className="botonFiltro">
            Clickea el boton para desplegar los filtros!
            {/* <TextField label="Buscar" size="small" ></TextField> {/* cuadros para escribir texto */}  
          </p> 


          {/* <input type="checkbox" name="filter[in][]" value="chl" id="in_chl" class="checkbox"</input> */}

          {/* <input type="button" name="Filtros"></input> */}

          <Button variant="contained" color="primary" > {/* Botones */} Filtros! </Button>
          
          <Button onClick={() => { alert(':D') }}>Filtro por pais</Button>
          <Checkbox >
          </Checkbox>

          {/* <div className="grid">
          <Link
            href={{
              pathname: "/response",
              query: { opt: 0 },
            }}
          >
            <a className="card">Excelente!</a>
          </Link>
          </div> */}
          
          <header>
              <b>Filtro por pais</b>
          </header>
          <nav className="lista">
            <li>
              <input type="checkbox">
              </input>
              <label class="checkbox " for="in_chl">Todos</label>
            </li>
            <li>
              <input type="checkbox">
              </input>
              <label class="checkbox " for="in_chl">Chile</label>
            </li>
            <li>
              <input type="checkbox">
              </input>
              <label class="checkbox " for="in_chl">Argentina</label>
            </li>
            <li>
              <input type="checkbox">
              </input>
              <label class="checkbox " for="in_chl">Brazil</label>
            </li>
            <li>
              <input type="checkbox">
              </input>
              <label class="checkbox " for="in_chl">Mexico</label>
            </li>
            <li>
              <input type="checkbox">
              </input>
              <label class="checkbox " for="in_chl">Colombia</label>
            </li>
          </nav>
          
        </main>
        <footer>
          <a href="https://github.com/FelipePrieto22/Grupo-2-Sophia-2" target="_blank"> Repositorio y tutorial </a>
        </footer>
      </Layout>

    </div>
  );
};

export default Index;
