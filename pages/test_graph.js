import Head from "next/head";
import Layout from "../components/layout";
import * as React from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
import Tabla from "./tabla";

const Test_graph = () => {
  return (
    <div className="container">
      <Layout pageId="page3">
        <Head>
          <title>Acerca de</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
        
           <Tabla /> 
          
          
        </main>
        <footer>
          
        </footer>
      </Layout>
    </div>
  );
};
export default Test_graph;
