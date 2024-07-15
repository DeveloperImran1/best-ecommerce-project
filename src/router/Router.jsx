import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Error from "../pages/error/Error";
import Register from "../pages/register/Register";
import Home from "./../pages/home/Home";
import Login from "./../pages/login/Login";
import Faq from "../pages/faq/Faq";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/faq",
        element: <Faq></Faq>
      }
    ],
  },
]);

export default router;
