//kalau pakai reduxtolkit harus pakai use client
"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

//Redux
import { Provider } from "react-redux";
import store from "../common/store/store";

import Navigation from "./nav/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Provider store={store}>
          <Navigation />
          {children}
        </Provider>
      </body>
    </html>
  );
}
