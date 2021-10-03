import { Button } from "@mui/material";
import Head from "next/head";
import Link from "next/link";
import tablaRanking from "./ranking";

const Respuesta = () => {
  return (
    <div className="container">
      <Head>
        <title>Busqueda</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="title">Esta será la pagina donde se mostrara la tabla de ranking</h1>
      <p>aun falta traer el valor de la barra de busqueda para ser usado como parametro en la tabla</p>

      <main>
        <div className="grid">
          <Link href={"/"}>
            <a className="card">Volver</a>
          </Link>
        </div>
        {
          tablaRanking()
        }
      </main>

    </div>
  );
};

export default Respuesta;