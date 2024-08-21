"use client";

import { Inter } from "next/font/google";
import { Provider } from "react-redux";
import { Suspense } from "react";
import store from "./redux/store/store";
import Spinner from "./components/spinner/index";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

/**
 * The root layout component for the application.
 *
 * This component wraps the entire application, providing the basic HTML structure
 * and the Redux store to the application.
 *
 * @param {{ children: React.ReactNode }} props The props for the component.
 * @returns {JSX.Element} The root layout element.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* The title element for the document */}
      <title></title>
      {/* A meta element for search engine optimization */}
      <meta
        name=""
        property=""
        content=""
        key=""
      />
      <body className={inter.className}>
        <Provider store={store}>
          <Suspense fallback={<Spinner/>}>
            {children}
          </Suspense>
        </Provider>
      </body>
    </html>
  );
}
