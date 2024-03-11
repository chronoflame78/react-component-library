import myImage from "../../../assets/leo_image2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Location, useLocation, useNavigate } from "react-router-dom";
import * as SVGComponents from "../../../styles/svgIcons";
import AboutPage from "../../info/containers/aboutPage";
import ContactPage from "../../contact/containers/contactPage";
import { useRef, useEffect } from "react";
import { ABOUT_PATH, CONTACT_PATH, HOME_PATH } from "../../../utils/constant";

interface IProps {
  isMobileView: boolean;
}

function HomePage(props: IProps) {
  const location: Location = useLocation();
  const { pathname } = location;
  const navigate = useNavigate();
  const aboutPageRef = useRef<HTMLDivElement>(null);
  const contactPageRef = useRef<HTMLDivElement>(null);

  const navigateToAbout = () => {
    navigate("/about");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToAboutPage = () => {
    aboutPageRef?.current?.scrollIntoView({block: "start", inline: "nearest", behavior: "smooth" });
  };

  const scrollToContactPage = () => {
    contactPageRef?.current?.scrollIntoView({block: "start", inline: "nearest", behavior: "smooth" });
  };

  useEffect(() => {
    if (pathname === HOME_PATH) {
      scrollToTop();
    } else if (pathname === ABOUT_PATH) {
      scrollToAboutPage();
    } else if (pathname === CONTACT_PATH) {
      scrollToContactPage();
    }
  }, [pathname]);

  return (
    <>

    </>
  );
}

export default HomePage;
