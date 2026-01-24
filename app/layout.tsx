//kalau pakai reduxtolkit harus pakai use client
"use client";

import { Poppins } from "next/font/google";
import "./globals.css";

//Redux
import { Provider } from "react-redux";
import store from "../common/store/store";

import Navigation from "./nav/Navigation";
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
      </head>
      <body className={`${poppins.variable} font-sans antialiased`}>
        <Provider store={store}>
          {/* <Navigation /> */}
          <PillNav
            logo={logo}
            logoAlt="Company Logo"
            items={[
              { label: "Home", href: "/" },
              { label: "About", href: "/about" },
              { label: "Services", href: "/services" },
              { label: "Contact", href: "/contact" },
            ]}
            activeHref="/"
            className="custom-nav"
            ease="power2.easeOut"
            baseColor="#000000"
            pillColor="#ffffff"
            hoveredPillTextColor="#ffffff"
            pillTextColor="#000000"
            theme="light"
            initialLoadAnimation={false}
          />
          {children}
        </Provider>
      </body>
    </html>
  );
}
