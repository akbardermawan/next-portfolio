"use client";
import React from "react";
import { useGetAllProjectQuery } from "../../slice/projectApiSlice";
import CardProject from "./components/CardProject";

const ProjectPage = () => {
  const {
    data: projects,
    isLoading: isLoadProject,
    isError,
    error: errProject,
  } = useGetAllProjectQuery();

  if (isLoadProject)
    return <p className="text-white text-2xl text-center mt-10">Loading...</p>;
  if (errProject)
    return (
      <p className="text-center mt-10 text-red-500">Error loading products</p>
    );

  return (
    <section className="px-4 sm:px-6 lg:px-10 py-10 max-w-7xl mx-auto">
      <header className="flex justify-center items-center mt-4 mb-15">
        <h1 className="font-bold text-4xl md:text-6xl lg:text-8xl text-white">
          My <span className="font-extrabold text-sky-400">Project</span>
        </h1>
      </header>
      {/* GRID RESPONSIVE */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {projects?.projects.map((project) => (
          <CardProject
            key={project.id}
            id={project.id}
            image={project.image ?? "/placeholder.jpg"}
            name={project.name}
            tecnology={project.tecnology ?? ""}
            urlProject={project.url_project}
            urlGithub={project.url_github}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectPage;
