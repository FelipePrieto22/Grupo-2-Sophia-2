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
        <main_2> 
          <main>
              <h1 className="titulos">Descripción:</h1>
              <article className="cuadro">
                
                Sophia II es un proyecto que consta de métodos basados en la lingüística computacional y 
                el machine learning para el análisis del pluralismo en los medios de prensa. Para esta 
                aplicación en concreto, se trabajará con una base de datos sobre los medios de prensa, donde se encuentran 
                noticias con datos de distintos países y años (desde el 2000 hasta el 2021), nombres, profesion, entre otros.
                Con la información de la base de datos, esta aplicación será capaz de filtrar según país y periodo de tiempo
                para generar una tabla que despliegue a las mujeres más influyentes según lo solicitado.
                
              </article>
          </main>
          
          <main>
              <h1 className="titulos">Historias de Usuario:</h1>
              <article className="cuadro">
                Las historias de usuario describen una necesidad del usuario final que guia a los desarrolladores 
                en como implementar una aplicación. Para este proyecto en específico, la historia de usuario que se desea satisfacer 
                es la siguiente:
                COMO organización o activista interesada por la equidad de género QUIERO ver una lista de las mujeres más mencionadas
                o emergentes, su profesión y edad de cada país PARA identificar quienes son las mujeres influyentes en cada país
                con las cuales se podría trabajar.
              </article>
              
          </main>
        </main_2>
        <img 
                className = "imagen"
                src="https://i.ibb.co/bbwM9bJ/Protesting-women-fighting-for-rights-Group-of-female-activists-and-protesters-holding-and-raising-ba.jpg"
                alt="new"
              /> 
          <a href="https://www.freepik.com/vectors/woman">Woman vector created by pch.vector - www.freepik.com</a>
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
