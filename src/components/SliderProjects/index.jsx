import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { SliderProjectsContainer, FrameImg } from "./SliderProjects.styles";

const SliderProjects = ({ projects }) => {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 2,
  };
  return (
    <SliderProjectsContainer>
      <Slider {...settings} className="test">
        {projects.map((project) => {
          return (
            <div>
              <div className="frame" backgorundImg={project.img_print}>
                asdads
              </div>
              <h3>{project.title}</h3>
            </div>
          );
        })}
      </Slider>
    </SliderProjectsContainer>
  );
};

export default SliderProjects;
