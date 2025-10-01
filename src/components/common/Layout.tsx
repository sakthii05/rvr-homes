"use client";
import React, { ReactNode, useRef } from "react";
import TopBar from "./Topbar";
import Footer from "./Footer";
// import Footer from "./Footer";

const Layout = (props: { children: ReactNode }) => {
  return (
    <div className="flex justify-center">
      <div className="font-figtree w-full">
        <>
          <TopBar />
          <main>{props.children}</main>
        </>

        <footer className="flex justify-center  bg-blue-500"><Footer /></footer>
      </div>
    </div>
  );
};

export default Layout;
