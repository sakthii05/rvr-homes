import React from "react";
import ViewLimit from "./common/ViewLimit";

const Services = () => {
  return (
    <ViewLimit>
      <section className="py-[5%] ">
        <div className=" flex justify-center ">
          <h2 className="md:text-lg bg-secondary rounded-full px-4 w-fit text-background ">
            Services
          </h2>
        </div>
        <h3 className="text-2xl md:text-4xl text-center py-5">
          What We Bring to You
        </h3>
        <p className="text-textlight font-medium text-lg md:text-xl text-center">Find out which one of our services fit the needs of you</p>
      </section>
    </ViewLimit>
  );
};

export default Services;
