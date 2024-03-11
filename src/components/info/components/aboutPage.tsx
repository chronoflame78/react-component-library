import { Location, useLocation, useNavigate } from "react-router-dom";
import * as SVGComponents from "../../../styles/svgIcons";
import CardItem from "./cardItem";
import { recentWorkItems, skillItems, workExperienceItems } from "../constant";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

interface IProps {
  isMobileView?: boolean;
}

function AboutPage(props: IProps) {
  const location: Location = useLocation();
  const navigate = useNavigate();

  const navigateToAbout = () => {
    navigate("/about");
  };

  return (
    <div className="about-page-wrapper">
      <section className="skills-section">
        <div className="container h-100 d-flex align-items-center">
          <div className="w-100 h-100 d-flex flex-direction-column justify-content-evenly pt-4">
            <div>
              <p className="fr-20 font-weight-bold text-gray mb-1">MY SKILLS</p>
              <h2 className="fr-60 font-weight-bold pb-4">Technologies.</h2>
            </div>

            <div className="description-text">
              Proficient in HTML/CSS, Javascript, React. Extensive experience with front-end libraries and tools including Bootstrap, SCSS, and TypeScript...
            </div>

            <div className="position-relative">
              <Swiper
                navigation={true}
                slidesPerView={props.isMobileView ? 3 : 4}
                spaceBetween={36}
                autoplay={
                  props.isMobileView
                    ? false
                    : {
                        delay: 2500,
                        disableOnInteraction: false,
                      }
                }
                modules={[Autoplay, Navigation]}
                loop={true}
                speed={1500}
                className="mySwiper p-3"
              >
                {skillItems.map((x, index) => (
                  <SwiperSlide>
                    <CardItem key={index} itemName={x.itemName} logo={x.logo} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
      <section className="experience-section">
        <div className="container d-flex align-items-center">
          <div className="w-100 d-flex flex-direction-column pt-4 pb-4">
            <h2 className="fr-48 font-weight-bold mb-5 text-center">
              My Work Experience
            </h2>

            <div className="w-100">
              {workExperienceItems.map((x, index) => (
                <div key={index} className="we-item">
                  <div className="period-txt">{x.period}</div>
                  <div className="item-logo">{x.logo}</div>
                  <div className="company-position">
                    <div className="position-txt">{x.position}</div>
                    <div className="company-txt">{x.company}</div>
                  </div>
                  <div>
                    <a className="website-link" target="_blank" href={x.link}>
                      <FontAwesomeIcon
                        className="mr-3 icon-arrow"
                        icon="arrow-right"
                        size="1x"
                      />
                      Go to website
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <h2 className="font-weight-bold f-32 py-4">Recent Work.</h2>

            <div className="w-100">
              {props.isMobileView ? (
                <Swiper
                  slidesPerView={3}
                  spaceBetween={24}
                  autoplay={false}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination]}
                  loop={false}
                  speed={1500}
                  className="re-Swiper"
                >
                  {recentWorkItems.map((x, index) => (
                    <SwiperSlide>
                      <div
                        key={index}
                        className="recent-work-item"
                        onClick={() => {
                          window.open(x.link, "_blank");
                        }}
                      >
                        <div className="re-img-container">
                          <img className="re-image" src={x.img} alt="" />
                        </div>
                        <div className="pt-3 font-weight-bold text-center name-text">
                          {x.name}
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              ) : (
                <Swiper
                  slidesPerView={4}
                  spaceBetween={36}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination, Autoplay]}
                  loop={false}
                  speed={1500}
                  className="re-Swiper"
                >
                  {recentWorkItems.map((x, index) => (
                    <SwiperSlide>
                      <div
                        key={index}
                        className="recent-work-item"
                        onClick={() => {
                          window.open(x.link, "_blank");
                        }}
                      >
                        <div className="re-img-container">
                          <img className="re-image" src={x.img} alt="" />
                        </div>
                        <div className="pt-3 font-weight-bold text-center name-text">
                          {x.name}
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              )}
            </div>
          </div>
        </div>
      </section>
      <div className="shape32-container">
        <SVGComponents.Shape3 className="shape32-svg" />
      </div>
    </div>
  );
}

export default AboutPage;
