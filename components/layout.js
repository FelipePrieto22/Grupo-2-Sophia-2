import Head from "next/head";
import Link from "next/link";
import * as React from 'react';

const Layout = ({ children, pageId }) => {
  return (
    <div className="container">
      <div>
        <h1 className="title">
          Sophia II 
        </h1>
      </div>
      
      <header className="menu"> 
        <Link href="/">
          <a className={pageId === "page1" ? "currentPage" : ""}> Página principal </a>
        </Link>
        <Link href="/about">
          <a className={pageId === "page2" ? "currentPage" : ""}> Acerca de </a>
        </Link>
        

      </header>
      <main>{children}</main>
    </div>
  );
};
export default Layout;
