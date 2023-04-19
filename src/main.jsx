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
        path: "/financare/",
        element: <Home></Home>,
      },
      {
        path: "/financare/transactions",
        element: <TransactionsPage></TransactionsPage>,
      },
      {
        path: "/financare/charts",
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
