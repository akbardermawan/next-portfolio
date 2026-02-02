//kalau pakai reduxtolkit harus pakai use client
"use client";

import { Poppins } from "next/font/google";
import "./globals.css";

//Redux
import { Provider } from "react-redux";
import store from "../common/store/store";

//Toast
import { ToastContainer } from "react-toastify";

import PillNav from "./nav/PillNav";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});
const logo = "/svg/logo.svg";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Akbar Profile</title>
        {/* Cloudinary Upload Widget */}
        <script
          src="https://widget.cloudinary.com/v2.0/global/all.js"
          type="text/javascript"
          async
        ></script>
      </head>
      <body className={`${poppins.variable} font-sans antialiased`}>
        <Provider store={store}>
          <div className="w-full fixed top-0 left-0 z-50 ">
            <ToastContainer />
            <PillNav
              logo={logo}
              logoAlt="Company Logo"
              items={[
                { label: "Home", href: "/" },
                { label: "Project", href: "/#projects" },
                { label: "Contact", href: "/#contact" },
                { label: "Login", href: "/auth/login" },
              ]}
              className="custom-nav"
              ease="power2.easeOut"
              baseColor="#000000"
              pillColor="#ffffff"
              hoveredPillTextColor="#ffffff"
              pillTextColor="#000000"
              theme="light"
              initialLoadAnimation={false}
            />
          </div>

          {children}
        </Provider>
      </body>
    </html>
  );
}
