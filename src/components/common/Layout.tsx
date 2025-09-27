"use client";
import React, { ReactNode, useRef } from "react";
import TopBar from "./Topbar";
import Footer from "./Footer";
// import Footer from "./Footer";

const Layout = (props: { children: ReactNode }) => {
  return (
    <div className="flex justify-center overflow-hidden ">
      <div className="font-figtree w-screen">
        <main className="w-full">
          <TopBar />
          {props.children}
        </main>
        <footer className="flex justify-center">
          {/* <Footer /> */}
        </footer>
      </div>
    </div>
  );
};

export default Layout;
