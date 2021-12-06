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
          <a className={pageId === "page1" ? "currentPage" : ""}> Historia 1 </a>
        </Link>
        <Link href="/grafico">
          <a className={pageId === "page2" ? "currentPage" : ""}> Historia 2</a>
        </Link>
        <Link href="/about">
          <a className={pageId === "page3" ? "currentPage" : ""}> Acerca de </a>
        </Link>
        

      </header>
      <main>{children}</main>
    </div>
  );
};
export default Layout;
