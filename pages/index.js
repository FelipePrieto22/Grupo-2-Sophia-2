import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout from "../components/layout";


const Index = () => {
  return (
    <div className="container">
      <Layout pageId="page1">
        <Head>
          <title>Sophia 2</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <Image
          src="/images/eye.png"//direccion de la imagen seleccionada
          height={500} // Desired size with correct aspect ratio
          width={300} // Desired size with correct aspect ratio
          padding="50 px" //para que no salga pegado a la pagina
          alt="ojo"//nombre que se le da a la imagen dentro de la página
        />
          <h1 className="title">PLANTILLA</h1>

        </main>
        <footer className="piePagina">
          <a href="https://github.com/FelipePrieto22/Grupo-2-Sophia-2" target="_blank"> Repositorio y tutorial </a>
        </footer>
      </Layout>
    </div>
  );
};

export default Index;