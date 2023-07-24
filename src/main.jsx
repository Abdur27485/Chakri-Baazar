import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import ContactUs from "./pages/ContactUs/ContactUs";

const router = createBrowserRouter([
  {
    path: '',
    element: <App></App>,
    children: [
      {
        path: '',
        element: <Home></Home>
      },
      {
        path: 'About',
        element: <About></About>
      },
      {
        path: 'ContactUs',
        element: <ContactUs></ContactUs>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
<RouterProvider router={router}></RouterProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
