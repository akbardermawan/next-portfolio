"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";

interface ImageUploadProps {
  disabled?: boolean;
  onChange: (value: string) => void;
  onRemove: (value: string) => void;
  value: string[];
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  disabled,
  onChange,
  onRemove,
  value,
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleUpload = useCallback(() => {
    // @ts-ignore
    window.cloudinary.openUploadWidget(
      {
        cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "dxfuitdj1", // ganti dengan cloud name kamu
        uploadPreset: "e-comerce", // ganti dengan preset yang kamu buat
        sources: ["local", "url", "camera"],
        multiple: false,
        cropping: false,
        defaultSource: "local",
      },
      (error: any, result: any) => {
        if (!error && result && result.event === "success") {
          onChange(result.info.secure_url); // mengirim URL gambar
        }
      },
    );
  }, [onChange]);

  if (!isMounted) return null;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4 flex-wrap">
        {value?.map((url) => (
          <div key={url} className="relative w-48 h-48">
            <Image
              src={url}
              fill
              className="object-cover rounded-md"
              alt="Uploaded"
            />
            <button
              onClick={() => onRemove(url)}
              className="absolute top-2 right-2 bg-black bg-opacity-50 text-white p-1 rounded-full text-xs"
              type="button"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={handleUpload}
        disabled={disabled}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
      >
        Upload Gambar
      </button>
    </div>
  );
};

export default ImageUpload;
