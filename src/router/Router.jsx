import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import AboutUs from "../pages/about_us/AboutUs";
import Error from "../pages/error/Error";
import FaqPage from "../pages/faq/FaqPage";
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
<<<<<<< HEAD
        path: "/faq",
        element: <Faq></Faq>
      }
=======
        path: "/about-us",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/faq",
        element: <FaqPage></FaqPage>,
      },
>>>>>>> 03b58b24e537b083a7b9689817feec7321602816
    ],
  },
]);

export default router;
