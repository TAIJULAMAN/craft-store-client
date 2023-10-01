import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Components/Layout/Main.jsx";
import Home from "./Components/Home/Home.jsx";
import SignUp from "./Components/SignUp/SignUp";
import LogIn from "./Components/LogIn/LogIn";
import AuthProviders from "./Components/Providers/AuthProviders";
import Products from "./Components/Products/Products";
import About from "./Components/Home/About";
import Blogs from "./Components/Blogs/Blogs";
import Checkout from "./Components/Products/Checkout";
import Bookings from "./Components/Products/Bookings";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import AboutCraft from "./Components/Home/AboutCraft";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <LogIn></LogIn>,
      },
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/products",
        element: <Products></Products>,
      },
      {
        path: "/aboutcraft",
        element: <AboutCraft></AboutCraft>
      },
      {
        path: "/checkout/:id",
        element: <Checkout></Checkout>,
        loader:({params}) =>fetch(`http://localhost:5000/products/${params?.id}`)
        
      },
      {
        path: "/bookings",
        element:<PrivateRoute><Bookings></Bookings></PrivateRoute>
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="max-w-7xl mx-auto">
   <AuthProviders>
   <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
   </AuthProviders>
  </div>
)
