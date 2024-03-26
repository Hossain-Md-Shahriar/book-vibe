import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./MainLayout";
import Home from "./pages/Home";
import ListedBooks from "./pages/ListedBooks";
import PagesToRead from "./pages/PagesToRead";
import BookDetails from "./pages/BookDetails";
import Read from "./components/Read";
import Wishlist from "./components/Wishlist";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => fetch("../books.json"),
      },
      {
        path: "/book/:id",
        element: <BookDetails />,
        loader: () => fetch("../books.json"),
      },
      {
        path: "listed-books",
        element: <ListedBooks />,
        children: [
          {
            index: true,
            element: <Read />
          },
          {
            path: "wishlist",
            element: <Wishlist />
          }
        ]
      },
      {
        path: "pages-to-read",
        element: <PagesToRead />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
