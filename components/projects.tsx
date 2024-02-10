import { projectsData } from "@/lib/data";
import React from "react";
import Project from "./project";
import SectionHeading from "./section-heading";

export default function Projects() {
  return (
    <section>
      <SectionHeading title="Projects" />
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
