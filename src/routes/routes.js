import { createBrowserRouter } from "react-router-dom";

// User pages
import Main from "../layout/UserLayout/Main";
import Home from "../pages/User/Home/Home";
import AboutUs from "../pages/User/AboutUs/AboutUs";
import Contact from "../pages/User/Contact/Contact";
import Services from "../pages/User/Services/Services";
import FaqPage from "../pages/User/FaqPage/FaqPage";
import NotFoundPage from "../pages/User/NotFoundPage/NotFoundPage";
import SingleService from "../pages/User/SingleService/SingleService";
import BookService from "../pages/User/BookService/BookService";
import Showcase from "../pages/User/Showcase/Showcase";

// Admin pages
import AdminLayout from "../layout/AdminLayout/AdminLayout";
import Dashboard from "../pages/Admin/Dashboard/Dashboard";
import AdminServices from "../pages/Admin/AdminServices/AdminServices.jsx";
import Customers from "../pages/Admin/Customers/Customers";
import Reviews from "../pages/Admin/Reviews/Reviews";
import AdminShowcase from "../pages/Admin/AdminShowcase/AdminShowcase";
import Users from "../pages/Admin/Users/Users";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "contact-us",
        element: <Contact />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "services/:id",
        element: <SingleService />,
      },
      {
        path: "showcase",
        element: <Showcase />,
      },
      {
        path: "faq-page",
        element: <FaqPage />,
      },
      {
        path: "book-service",
        element: <BookService />,
      },
    ],
    errorElement: <NotFoundPage />,
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "service",
        element: <AdminServices />,
      },
      {
        path: "customer",
        element: <Customers />,
      },
      {
        path: "review",
        element: <Reviews />,
      },
      {
        path: "showcase",
        element: <AdminShowcase />,
      },
      {
        path: "user",
        element: <Users />,
      },
    ],
  },
]);

export default routes;
