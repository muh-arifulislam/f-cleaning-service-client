import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Home from "../pages/Home/Home";
import AboutUs from "../pages/AboutUs/AboutUs";
import Contact from "../pages/Contact/Contact";
import Services from "../pages/Services/Services";
import FaqPage from "../pages/FaqPage/FaqPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";

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
        path: "faq-page",
        element: <FaqPage />,
      },
    ],
    errorElement: <NotFoundPage />,
  },
]);

export default routes;
