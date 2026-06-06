import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Layout from "./Constant/Layout";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> }, // cleaner than "/"
        
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}