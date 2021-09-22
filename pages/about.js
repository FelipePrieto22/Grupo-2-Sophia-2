import Head from "next/head";
import Layout from "../components/layout";

const About = () => {
  return (
    <div className="container">
      <Layout pageId="page2">
        <Head>
          <title>Acerca de</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>

          <h1 className="title">MAS INFORMACION</h1>
          
        </main>
        <footer>
          <a href="https://github.com/FelipePrieto22/Grupo-2-Sophia-2" target="_blank">
            Repositorio y tutorial
          </a>
        </footer>
      </Layout>
    </div>
  );
};
export default About;
