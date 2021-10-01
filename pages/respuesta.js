import { Button } from "@mui/material";
import Head from "next/head";
import Link from "next/link";
import tablaRanking from "./ranking";

const Respuesta = () => {
  function resolver(){
    let elemento = "";
    elemento = localStorage.getItem("buscar")
    alert(elemento);
  }
  return (
    <div className="container">
      <Head>
        <title>Busqueda</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Esta será la pagina donde se mostrara la tabla de ranking</h1>

      <main>
        <div className="grid">
          <Link href={"/"}>
            <a className="card">Volver</a>
          </Link>
        </div>
        <Button onClick={()=>resolver()}>respuesta!!!!!</Button>
        {
          tablaRanking()
        }
      </main>

    </div>
  );
};

export default Respuesta;