import {
  Link,
  Location,
  useLocation,
  useNavigate,
} from "react-router-dom";
import classNames from "classnames";
import { ABOUT_PATH, CONTACT_PATH, HOME_PATH } from "../../../utils/constant";
import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function TopPane(props) {
  const location: Location = useLocation();
  const navigate = useNavigate();
  const { pathname } = location;
  const [navbarColor, setNavbarColor] = useState("transparent");
  const [isMenuOpen, toggleMenu] = useState(false);
  const menuRef = useRef(null);

  const handleScroll = () => {
    // Change the navbar color based on the scroll position
    const scrolled = window.scrollY;
    const breakpoint = 80; // Adjust this value to determine when to change the color
    const newNavbarColor = scrolled > breakpoint ? "#ffffff" : "transparent";
    setNavbarColor(newNavbarColor);
  };

  useEffect(() => { 
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => { 
    const handleClickOutside = (event) => {
      // @ts-ignore
      if (menuRef && menuRef.current && !menuRef.current.contains(event.target)) {
        if(isMenuOpen){
          toggleMenu(false)
        }
      }
    }
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  const redirectToHomePage = () => {
    navigate("/home");
  };

  const onMenuItemClick = path => {
    navigate(path);

    toggleMenu(false);

    let element;
    switch(path){
      case HOME_PATH:
        element = document.getElementById("home-page-element");
        element?.scrollIntoView({block: "start", inline: "nearest", behavior: "smooth" });
        break;
      case ABOUT_PATH:
        element = document.getElementById("about-page-element");
        element?.scrollIntoView({block: "start", inline: "nearest", behavior: "smooth" });
        break;
      case CONTACT_PATH:
        element = document.getElementById("contact-page-element");
        element?.scrollIntoView({block: "start", inline: "nearest", behavior: "smooth" });
        break;
      default:
        break;
    } 

  }

 

  return (
    <div
      className="top-pane-container"
      style={{ backgroundColor: navbarColor }}
    >
      <nav className="top-pane container d-flex align-items-center justify-content-between">
        <div className="h-cursor" onClick={() => redirectToHomePage()}>
          <span className="f-20 font-weight-bold primary-color-2">
            Component Library
          </span>
        </div>
        {props.isMobileView && (
          <button className="menu-toggle-button" type="button" onClick={() => toggleMenu(true)}>
            <FontAwesomeIcon
              className=""
              icon="bars"
              size="lg"
              color="#ffffff"
            />
          </button>
        )}

        {!props.isMobileView && (
          <div className="top-pane-nav">
            <ul className="navbar-ul">
              <li
                className={classNames("nav-item mr-2", {
                  active: pathname === HOME_PATH,
                })}
              >
                <Link className="nav-link" to={HOME_PATH}>
                  Home
                </Link>
              </li>
              <li
                className={classNames("nav-item mr-2", {
                  active: pathname === ABOUT_PATH,
                })}
              >
                <Link className="nav-link" to={ABOUT_PATH}>
                  About
                </Link>
              </li>
              <li
                className={classNames("nav-item", {
                  active: pathname === CONTACT_PATH,
                })}
              >
                <Link className="nav-link" to={CONTACT_PATH}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>

      {props.isMobileView && isMenuOpen && <div className="mobile-menu" ref={menuRef}>
        <div className="py-4 d-flex flex-row-reverse">
          <button className="close-menu-button" type="button" onClick={() => toggleMenu(false)}>
            <FontAwesomeIcon
              className=""
              icon="xmark"
              size="lg"
              color="#ffffff"
            />
          </button>
        </div>

        <div className={classNames("menu-item py-12", {"active": pathname === HOME_PATH})} onClick={() => onMenuItemClick(HOME_PATH)}>Home</div>
        <div className={classNames("menu-item py-12", {"active": pathname === ABOUT_PATH})} onClick={() => onMenuItemClick(ABOUT_PATH)}>About</div>
        <div className={classNames("menu-item py-12", {"active": pathname === CONTACT_PATH})} onClick={() => onMenuItemClick(CONTACT_PATH)}>Contact</div>
      </div>}
    </div>
  );
}

export default TopPane;
