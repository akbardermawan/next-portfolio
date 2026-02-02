"use client";
import React, { useState } from "react";
import ImageUpload from "./components/ImageUpload";
import { useCreateProjectMutation } from "../slice/projectAdminApiSlice";
import { toast } from "react-toastify";

const page = () => {
  const [name, setName] = useState<string>("");
  const [tecnology, setTecnology] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [urlGithub, setUrlGithub] = useState<string>("");
  const [urlProject, setUrlProject] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string>("");

  const [createProject] = useCreateProjectMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !tecnology || !imageUrl) {
      alert("Data belum lengkap");
      return;
    }

    try {
      const projectData = {
        name,
        image: imageUrl,
        tecnology,
        description,
        url_github: urlGithub,
        url_project: urlProject,
      };

      const data = await createProject(projectData).unwrap();
      console.log("SUCCESS:", data);
      toast.success(`${data.name} berhasil dibuat!`);
    } catch (error: any) {
      console.error("SUBMIT ERROR:", error?.data || error);
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="p-1 xl:mx-[9rem] sm:mx-[0] md:pt-18 md:flex md:justify-center md:items-center">
        <div className="flex flex-col md:flex-row">
          {/* <AdminMenu /> */}
          <div className="md:w-3/4 p-3">
            <h2 className="h-12 text-xl md:text-2xl md:pt-1 font-bold text-center">
              Create Product
            </h2>

            <ImageUpload
              value={imageUrl ? [imageUrl] : []}
              onChange={(url) => setImageUrl(url)}
              onRemove={() => setImageUrl("")}
              disabled={false}
            />

            <div className="p-3">
              <div className="flex flex-wrap">
                <div className="one w-1/2 pr-3">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="p-4 mb-3 w-full rounded-lg bg-gray-200 text-black"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="two w-1/2">
                  <label htmlFor="tecnology">Tecnology</label>
                  <input
                    type="text"
                    id="tecnology"
                    className="p-4 mb-3 w-full rounded-lg bg-gray-200 text-black"
                    value={tecnology}
                    onChange={(e) => setTecnology(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex flex-wrap">
                <div className="two w-1/2">
                  <label htmlFor="urlGithub">Url Github</label>
                  <input
                    type="text"
                    id="urlGithub"
                    className="p-4 mb-3 w-full rounded-lg bg-gray-200 text-black"
                    value={urlGithub}
                    onChange={(e) => setUrlGithub(e.target.value)}
                  />
                </div>

                <div className="one w-1/2 pr-3">
                  <label htmlFor="urlProject">Url Project</label>
                  <input
                    type="text"
                    id="urlProject"
                    className="p-4 mb-3 w-full rounded-lg bg-gray-200 text-black"
                    value={urlProject}
                    onChange={(e) => setUrlProject(e.target.value)}
                  />
                </div>
              </div>

              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                className="p-2 mb-3 bg-gray-200 border rounded-lg w-full text-black"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>

              <button
                onClick={handleSubmit}
                className="w-full py-3 rounded-lg border border-blue-700 text-black font-semibold text-lg"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
