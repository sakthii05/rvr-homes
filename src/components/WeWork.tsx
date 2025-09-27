import React from "react";
import ViewLimit from "./common/ViewLimit";

const WeWork = () => {
  const steps = [
    {
      title: "Initial Consultation",
      description:
        "We listen and understand your lifestyle, priorities, and budget to shape the project scope.",
      image: "",
    },
    {
      title: "Concept Development",
      description:
        "Short iterative reviews — quick adjustments until the concept truly matches your vision.",
      image: "",
    },
    {
      title: "Planning & Preparation",
      description:
        "We convert the chosen concept into detailed plans: drawings, schedules, permits, and procurement lists.",
      image: "",
    },
    {
      title: "Execution & Delivery",
      description:
        "Skilled tradespeople and project managers deliver the build with quality checks at every milestone.",
      image: "",
    },
  ];

  return (
    <section className="py-[10%] md:py-[5%] px-5 md:px-10">
      <ViewLimit>
        <div className="flex justify-center">
          <div className="flex flex-col lg:flex-row lg:justify-between gap-10 lg:gap-[10%] relative md:w-[80%] ">
            <div className="w-full lg:sticky h-fit lg:top-[10%] space-y-5">
              <h2 className="md:text-lg bg-secondary rounded-full px-4 w-fit text-background ">
                How We Work
              </h2>
              <h3 className="text-xl md:text-4xl">
                From vision to reality, we make building your dream home simple
                and exciting.
              </h3>
            </div>
            <div className="space-y-7 w-full">
              {steps.map((step, i) => (
                <div
                  key={i}
                  className="bg-slate-100 w-full h-fit p-5  rounded-2xl"
                >
                  <div className=" h-72 w-full bg-black rounded-xl"></div>
                  <div className="space-y-3 pt-3">
                    <h4 className=" font-medium text-2xl">{step.title}</h4>
                    <p>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ViewLimit>
    </section>
  );
};

export default WeWork;
