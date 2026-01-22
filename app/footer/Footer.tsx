"use client";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import EmailIcon from "@mui/icons-material/Email";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <div>
      <footer className="bg-sky-950 text-white py-6 mt-10">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Akbar. All rights reserved.
          </p>

          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="https://github.com/akbardermawan"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition flex"
            >
              <FaGithub className="text-xl" />
              <p className="hidden md:flex md:ml-1">Github</p>
            </a>
            <a
              href="https://www.linkedin.com/in/akbar-dermawan-30bb6a210/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition flex"
            >
              <FaLinkedin className="text-xl" />
              <p className="hidden md:flex md:ml-1">LinkedIn</p>
            </a>
            <a
              href="https://mail.google.com/mail/u/0/#search/akbardermawan27%40gmail.com"
              className="hover:text-blue-400 transition flex"
            >
              <EmailIcon />
              <p className="hidden md:flex md:ml-1">Email</p>
            </a>
            <a
              href="https://www.youtube.com/@ADM.code1"
              className="hover:text-blue-400 transition flex"
            >
              <YouTubeIcon />
              <p className="hidden md:flex md:ml-1">YouTube</p>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
