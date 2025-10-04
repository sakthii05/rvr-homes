"use client";
import React, { ReactNode} from "react";
import TopBar from "./Topbar";
import Footer from "./Footer";

const Layout = (props: { children: ReactNode }) => {
  return (
    <div className="flex justify-center">
      <div className="font-figtree w-full">
        <>
          <TopBar />
          <main>{props.children}</main>
        </>

        <footer className="flex justify-center "><Footer /></footer>
      </div>
    </div>
  );
};

export default Layout;
