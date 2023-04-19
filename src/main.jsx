import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { TransactionsPage } from "./routes/TransactionsPage";
import { Home } from "./routes/Home";
import { ChartsPage } from "./routes/ChartsPage";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App></App>,
//   },
//   {
//     path: "/transactions",
//     element: <TransactionsPage></TransactionsPage>,
//   },
// ]);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "fincare/",
        element: <Home></Home>,
      },
      {
        path: "fincare/transactions",
        element: <TransactionsPage></TransactionsPage>,
      },
      {
        path: "fincare/charts",
        element: <ChartsPage></ChartsPage>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
