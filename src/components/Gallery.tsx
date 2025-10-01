import React from "react";
import ViewLimit from "./common/ViewLimit";

const Gallery = () => {
  return (
    <section className="py-[10%] md:py-[5%] px-5 md:px-10">
      <ViewLimit>
        <div className=" flex justify-center ">
          <h2 className="md:text-lg bg-secondary rounded-full px-4 w-fit text-background ">
            Gallery
          </h2>
        </div>
        <h3 className="text-2xl md:text-4xl text-center py-5">
          A preview of what we can bring to life
        </h3>
        <div className="grid grid-cols-3 gap-5 pt-[10%]">
          <div className=" mt-10 space-y-5">
            <div className="h-56 w-full rounded-lg bg-black"></div>
            <div className="h-72 w-full rounded-lg bg-black"></div>
            <div className="h-56 w-full rounded-lg bg-black"></div>
          </div>
          <div className="space-y-5">
            <div className="h-96 w-full rounded-lg bg-black"></div>
            <div className="h-56 w-full rounded-lg bg-black"></div>
            <div className="h-72 w-full rounded-lg bg-black"></div>
          </div>
          <div className="mt-10 space-y-5">
            <div className="h-96 w-full rounded-lg bg-black"></div>
            <div className="h-72 w-full rounded-lg bg-black"></div>
            <div className="h-40 w-full rounded-lg bg-black"></div>
          </div>
        </div>
      </ViewLimit>
    </section>
  );
};

export default Gallery;
