"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

import { MdEmail } from "react-icons/md";
import { FaWhatsapp, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

//eart
import { EarthCanvas } from "../../canvas";

//bacground
import ContactBackground from "./ContactBackground";

// import ContactButton from "../components/ContactButton";

const ContactPage = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    nohp: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const scriptURL =
      "https://script.google.com/macros/s/AKfycbwNZAWJgSIWpil3C5WXVA44p5SDYAuF7DUecWdrw-hoCY8KEygTCzhGjBOVtzTDT6EnJg/exec";
    const formData = new FormData();
    formData.append("nama", form.name);
    formData.append("mail", form.email);
    formData.append("hp", form.nohp);
    formData.append("pesan", form.message);

    fetch(scriptURL, {
      method: "POST",
      body: formData,
    })
      .then(() => {
        setLoading(false);
        alert("Pesan Anda berhasil dikirim!");

        setForm({
          name: "",
          email: "",
          nohp: "",
          message: "",
        });

        formRef.current?.reset();
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error!", error.message);
        alert("Terjadi kesalahan. Silakan coba lagi.");
      });
  };
  return (
    <div className="bg-black/95 relative w-full h-[1590px] md:h-[1300px] lg:h-[1300px]">
      {/* bacground */}
      <div className="absolute inset-0 z-0">
        <ContactBackground
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* contenten */}
      <div className="relative z-5 max-w-7xl pt-16 px-4 sm:px-6 lg:px-8 mx-auto">
        <header className="flex justify-center items-center ">
          <h1 className="font-bold text-4xl md:text-6xl lg:text-8xl text-white">
            My <span className="font-extrabold text-sky-400">Contact</span>
          </h1>
        </header>

        <div className="flex flex-col md:flex-row gap-8 mt-8">
          {/* Bagian EarthCanvas */}
          <div className="w-full md:w-1/2 h-[300px] md:h-auto">
            <EarthCanvas />
          </div>
          <div className=" flex justify-center items-center flex-col  mt-10 p-6   mx-auto">
            <h2 className="text-xl font-semibold  text-white">Don't be Shy</h2>
            <p className="text-white">
              Feel free get in touch with me. I am always open to discussing new
              project, create ideas or opporties to be part of your visions.
            </p>

            <div className=" w-full">
              <div>
                <div className="flex items-center mt-2">
                  <FaWhatsapp className="w-[25px] h-[25px] text-sky-400" />
                  <div className="ml-3">
                    <p className="text-gray-400 text-sm">Call me</p>
                    <p className=" text-white">082337528525</p>
                  </div>
                </div>

                <a
                  href="mailto:akbardermawan27@gmail.com"
                  className="flex items-center mt-2"
                >
                  <MdEmail className="w-[25px] h-[25px] text-sky-400" />
                  <div className="ml-3">
                    <span className="text-gray-400 text-sm">Mail me</span>
                    <p className=" text-white">akbardermawan27@gmail.com</p>
                  </div>
                </a>
              </div>
              <div className=" mt-10 w-full flex ">
                <a
                  href="https://www.linkedin.com/in/akbar-dermawan-30bb6a210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center mr-2"
                >
                  <FaLinkedin className="w-[25px] h-[25px] text-sky-400" />
                </a>
                <a
                  href="https://github.com/akbardermawan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center mr-2"
                >
                  <FaGithub className="w-[25px] h-[25px] text-sky-400" />
                </a>
                <a
                  href="https://github.com/akbardermawan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center mr-2"
                >
                  <FaYoutube className="w-[25px] h-[25px] text-sky-400" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bagian Form */}
        <div className="w-full md:w-1/2 flex items-center justify-center mx-auto">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="w-full  mt-8 md:mt-12 flex flex-col gap-6 bg-gradient-to-b from-sky-500/50 to-black/50 p-6 sm:p-7 rounded-xl"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-2">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your good name?"
                className="bg-tertiary py-3 px-4 placeholder:text-secondary text-white rounded-lg outline-none ring-2 ring-blue-400/50 focus:ring-2 focus:ring-sky-500 font-medium"
              />
            </label>

            <label className="flex flex-col">
              <span className="text-white font-medium mb-2">Your Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email address?"
                className="bg-tertiary py-3 px-4 placeholder:text-secondary text-white rounded-lg outline-none ring-2 ring-blue-400/50 focus:ring-2 focus:ring-sky-500 font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-2">Your HP</span>
              <input
                type="text"
                name="nohp"
                value={form.nohp}
                onChange={handleChange}
                placeholder="What's your no hp?"
                className="bg-tertiary py-3 px-4 placeholder:text-secondary text-white rounded-lg outline-none ring-2 ring-blue-400/50 focus:ring-2 focus:ring-sky-500 font-medium"
              />
            </label>

            <label className="flex flex-col">
              <span className="text-white font-medium mb-2">Your Message</span>
              <textarea
                rows={6}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What you want to say?"
                className="bg-tertiary py-3 px-4 placeholder:text-secondary text-white rounded-lg outline-none ring-2 ring-blue-400/50 focus:ring-2 focus:ring-sky-500 font-medium"
              />
            </label>

            {/* <ContactButton
              as="button"
              type="submit"
              color="#3b82f6" // warna biru
              speed="4s"
              thickness={2}
              className="rounded-xl px-8 py-3 font-bold text-white hover:bg-sky-700 hover:text-black transition duration-300 self-center"
            >
              {loading ? "Sending..." : "Send"}
            </ContactButton> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
