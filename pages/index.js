import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout from "../components/layout";
import * as React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import { alertClasses, Checkbox, TextField } from "@material-ui/core";
import { getSystemErrorMap } from "util";
import { Script } from "vm";

const Index = () => {
  return (
    <div className="container">
      <Layout pageId="page1">
        <Head>
          <title>SOPHIA II</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
        
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