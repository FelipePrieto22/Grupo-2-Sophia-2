import Head from "next/head";
import Link from "next/link";
import * as React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import { TextField } from "@material-ui/core";

const Layout = ({ children, pageId }) => {
  return (
    <div className="container">
      <div>
        <h1 className="title">
          T.C.S SOPHIA II 
        </h1>
      </div>
      
      <header className="menu"> 
        <Link href="/">
          <a className={pageId === "page1" ? "currentPage" : ""}> Pagina principal </a>
        </Link>
        <Link href="/about">
          <a className={pageId === "page2" ? "currentPage" : ""}> Acerca de </a>
        </Link> 
        <Link href="/test_graph">
          <a className={pageId === "page3" ? "currentPage" : ""}> Test graficos </a>
        </Link> 
      </header>
      <main>{children}</main>
    </div>
  );
};
export default Layout;
