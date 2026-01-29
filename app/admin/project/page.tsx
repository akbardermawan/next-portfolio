"use client";
import React from "react";
import Link from "next/link";
import { toast } from "react-toastify";
import {
  useDeleteProjectMutation,
  useGetAllProjectAdmQuery,
} from "./slice/projectAdminApiSlice";
import { ProjectType } from "@/common/types/projectType";

const page = () => {
  const {
    data: projects,
    isLoading,
    error,
    refetch,
  } = useGetAllProjectAdmQuery();
  const [deleteProduct, { isLoading: isDeleting }] = useDeleteProjectMutation();

  const handleDeleteProduct = async (id: string) => {
    try {
      await deleteProduct(id).unwrap();
      toast.success("Deleted successfully");
      // Data akan otomatis refresh kalau endpoint menggunakan invalidatesTags dengan benar
      // Refetch data kategori setelah delet
      refetch();
    } catch (error: any) {
      toast.error(
        error?.data?.message || "product deletion failed. Try again.",
      );
    }
  };
  const handleRefetch = async () => {
    const result = await refetch();
  };

  if (isLoading) return <p className="text-center mt-10">Loading...</p>;
  if (error)
    return (
      <p className="text-center mt-10 text-red-500">Error loading projects</p>
    );

  return (
    <div className="pt-20 px-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">All Products</h1>
      <div className="flex justify-between px-5 py-2">
        <Link href={"/admin/product"}>
          <button className="cursor-pointer px-3 py-1 bg-white text-black text-sm rounded border border-black">
            + Tambah Data
          </button>
        </Link>
        <button
          className="cursor-pointer px-3 py-1 bg-green-400 text-white text-sm rounded"
          onClick={() => handleRefetch()}
        >
          Refetch Data
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left border">Image</th>
              <th className="px-4 py-2 text-left border">Nama</th>
              <th className="px-4 py-2 text-left border">Tecnology</th>

              <th className="px-4 py-2 text-left border">Action</th>
            </tr>
          </thead>
          <tbody>
            {projects?.projects?.map((p: ProjectType) => (
              <tr key={p.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                </td>
                <td className="px-4 py-2 border text-sm font-medium">
                  {p.name}
                </td>
                <td className="px-4 py-2 border text-sm text-gray-600">
                  {p.tecnology}
                </td>

                <td className="px-4 py-2 border">
                  <div className="flex space-x-2">
                    <Link href={`/admin/allProduct/update/${p.id}`}>
                      <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition">
                        Update
                      </button>
                    </Link>

                    <button
                      className="px-3 py-1 bg-red-600 text-white text-sm rounded hover:bg-red-700 transition"
                      onClick={() => handleDeleteProduct(p.id)}
                      disabled={isDeleting} // disable saat proses delete
                    >
                      {isDeleting ? "Deleting..." : "Delete"}
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default page;
