import {
    createBrowserRouter,
} from "react-router-dom";
import App from "../components/app/containers/app";
import ErrorPage from "../components/app/components/errorPage";
import HomePage from "../components/home2/containers/homePage";
import AboutPage from "../components/info/components/aboutPage";
import ContactPage from "../components/contact/components/contactPage";
  
export const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "home",
          element: <HomePage />,
          errorElement: <ErrorPage />,
        },
        {
          path: "about",
          element: <AboutPage />,
          errorElement: <ErrorPage />,
        },
        {
          path: "contact",
          element: <ContactPage />,
          errorElement: <ErrorPage />,
        },
      ],
    },
  ]);