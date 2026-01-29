"use client";
import React from "react";

interface CardProjectProps {
  id: number | string;
  image: string;
  name: string;
  tecnology: string;
  urlProject: string;
  urlGithub: string;
}

const CardProject: React.FC<CardProjectProps> = ({
  id,
  image,
  name,
  tecnology,
  urlProject,
  urlGithub,
}) => {
  return (
    <div
      className="  group flex flex-col overflow-hidden rounded-2xl
  bg-black border border-sky-400
  shadow-md
  transition-all duration-300
  hover:-translate-y-1
  hover:shadow-xl hover:shadow-sky-400/40"
    >
      {/* IMAGE */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      {/* CONTENT */}
      <div className="flex flex-col justify-between flex-1 p-4 sm:p-5">
        <div className="space-y-2">
          <h3 className="text-base sm:text-lg font-semibold text-fuchsia-400 line-clamp-1">
            {name}
          </h3>

          <p className="text-sm text-gray-500 line-clamp-2">{tecnology}</p>
        </div>

        {/* ACTIONS */}
        <div className="mt-4 flex flex-wrap gap-3">
          <a
            href={urlProject}
            target="_blank"
            className="flex-1 text-center rounded-full bg-black px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-800"
          >
            Go Project
          </a>

          <a
            href={urlGithub}
            className="flex-1 text-center rounded-full border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:border-black hover:bg-sky-950 hover:text-sky-400"
          >
            Detail
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardProject;
