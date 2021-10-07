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
          <h1 className="titulos">Descripción:</h1>
          <article className="contenido">
            El proyecto Sophia II que consta de métodos basados en la lingüística computacional y 
            el machine learning para el análisis del pluralismo en los medios de prensa, para este 
            proyecto se trabajará con una base de datos sobre los medios de prensa, donde se encuentran 
            noticias, datos de distintos países y años, nombres, entre otros recursos. Esta base de datos 
            contiene datos desde el año 2000 hasta el 2021.
          </article>
          <h1 className="titulos">Historias de usuario</h1>
          <article className="contenido">
            Organización o activista interesada por la equidad de género.
            Ver una lista de las mujeres más mencionadas o emergentes, su profesión y edad de cada país .
            Para identificar quienes son las mujeres influyentes en cada país con las cuales se podría trabajar.
          </article>
          <div>
            <aside className="contenidoExtra">
              Organización o activista interesada por la equidad de género.Ver una lista de las mujeres más 
              mencionadas o emergentes, su profesión y edad de cada país .Para identificar quienes son las 
              mujeres influyentes en cada país con las cuales se podría trabajar.Organización o activista 
              Organización o activista interesada por la equidad de género.Ver una lista de las mujeres más 
              mencionadas o emergentes, su profesión y edad de cada país .Para identificar quienes son las 
              mujeres influyentes en cada país con las cuales se podría trabajar.Organización o activista
              Organización o activista interesada por la equidad de género.Ver una lista de las mujeres más 
              mencionadas o emergentes, su profesión y edad de cada país .Para identificar quienes son las 
              mujeres influyentes en cada país con las cuales se podría trabajar.Organización o activista
              Organización o activista interesada por la equidad de género.Ver una lista de las mujeres más 
              mencionadas o emergentes, su profesión y edad de cada país .Para identificar quienes son las 
              mujeres influyentes en cada país con las cuales se podría trabajar.Organización o activista
              Organización o activista interesada por la equidad de género.Ver una lista de las mujeres más 
              mencionadas o emergentes, su profesión y edad de cada país .Para identificar quienes son las 
              mujeres influyentes en cada país con las cuales se podría trabajar.Organización o activista
              Organización o activista interesada por la equidad de género.Ver una lista de las mujeres más 
              mencionadas o emergentes, su profesión y edad de cada país .Para identificar quienes son las 
              mujeres influyentes en cada país con las cuales se podría trabajar.Organización o activista
              Organización o activista interesada por la equidad de género.Ver una lista de las mujeres más 
              mencionadas o emergentes, su profesión y edad de cada país .Para identificar quienes son las 
              mujeres influyentes en cada país con las cuales se podría trabajar.Organización o activista
            </aside>    
          </div>    
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
