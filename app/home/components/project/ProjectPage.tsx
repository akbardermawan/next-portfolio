"use client";
import React from "react";
import { useGetAllProjectQuery } from "../../slice/projectApiSlice";

const ProjectPage = () => {
  const { data: projects, isLoading, isError, error } = useGetAllProjectQuery();

  return (
    <div>
      {projects?.projects.map((project) => (
        <div className="group relative overflow-hidden rounded-2xl bg-white  shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
          {/* Image */}
          <div
            key={project.id}
            className="relative h-52 w-full overflow-hidden"
          >
            <img
              src={project.image}
              alt={project.name}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </div>

          {/* Content */}
          <div className="p-5 space-y-3">
            <h3 className="text-lg font-semibold text-gray-800">
              {" "}
              {project.name}
            </h3>

            <span className="text-sm text-gray-500">{project.tecnology}</span>

            {/* Actions */}
            <div className="flex items-center gap-3 pt-4">
              <a
                href={project.url_project}
                target="_blank"
                className="inline-flex items-center justify-center rounded-full bg-black px-5 py-2 text-sm font-medium text-white transition hover:bg-gray-800"
              >
                Go Project
              </a>

              <a
                href={project.url_github}
                className="inline-flex items-center justify-center rounded-full border border-gray-300 px-5 py-2 text-sm font-medium text-gray-700 transition hover:border-black hover:text-black"
              >
                Detail
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectPage;
