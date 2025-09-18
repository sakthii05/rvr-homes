"use client";
import React, { ReactNode, useRef } from "react";
// import TopBar from "./TopBar";
// import Footer from "./Footer";

const Layout = (props: { children: ReactNode }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={scrollRef}
      className="h-full w-full grid grid-cols-1 content-between font-inter"
    >
      <div className="col-span-1">
        {/* <TopBar /> */}
        {props.children}
      </div>
      <footer className="col-span-1 flex justify-center">
        <div className="w-screen max-w-[2560px]">
          {/* <Footer /> */}
        </div>
      </footer>
    </div>
  );
};

export default Layout;
