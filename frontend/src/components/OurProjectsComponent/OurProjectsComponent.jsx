import React from "react";
import OurProjectsTabs from "./OurProjectsTabs";
import LineStyle from "../common/LineStyle";

const OurProjectsComponent = () => {
  return (
    <section id="projects" className="mt-24">
      <div className="flex items-center justify-center">
        <LineStyle />
        <h1 className="px-2 font-base text-orange-400">Our Projects</h1>
        <LineStyle />
      </div>
      <div className="mb-4">
        <h1 className="font-bold text-3xl text-green-600 my-2 text-center">
          Improving Everday, Reaching New Heights
        </h1>
      </div>
      <OurProjectsTabs />
    </section>
  );
};

export default OurProjectsComponent;
