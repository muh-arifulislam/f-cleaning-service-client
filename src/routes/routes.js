import { createBrowserRouter } from "react-router-dom";

// view layout
import Main from "../layout/Main/Main";

// view pages
import Home from "../pages/Home/Home";
import AboutUs from "../pages/AboutUs/AboutUs";
import Contact from "../pages/Contact/Contact";
import Services from "../pages/Services/Services";
import FaqPage from "../pages/FaqPage/FaqPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import SingleService from "../pages/SingleService/SingleService";
import BookService from "../pages/BookService/BookService";
import Showcase from "../pages/Showcase/Showcase";

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
]);

export default routes;
