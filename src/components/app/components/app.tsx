import { Location, Outlet, useLocation, useNavigate } from "react-router-dom";
import "../../../styles/app.scss";
import TopPane from "../containers/topPane";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faArrowRight,
  faChevronRight,
  faChevronLeft,
  faEnvelope,
  faDownload,
  faBars,
  faXmark
} from "@fortawesome/free-solid-svg-icons";
import {
  fab,
  faLinkedin,
  faGithub,
  faSkype,
} from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

library.add(
  faArrowRight,
  faChevronRight,
  faChevronLeft,
  faEnvelope,
  faLinkedin,
  faGithub,
  faSkype,
  fab,
  far,
  faDownload,
  faBars,
  faXmark
);

function App(props) {
  const location: Location = useLocation();
  const navigate = useNavigate();
  const { pathname } = location;

  const onResize = (/* event */) => {
    setTimeout(() => {
      props.windowResized(window.innerWidth, window.innerHeight);
    }, 200);
  };

  useEffect(() => {
    window.addEventListener("resize", onResize);
    onResize();
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => {
    if (pathname === "/") navigate("/home");
  });

  return (
    <>
      <TopPane />
      <div>
        <Outlet />
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
