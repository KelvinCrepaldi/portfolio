import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { SliderProjectsContainer, PrintFrame } from "./SliderProjects.styles";

const SliderProjects = ({ projects }) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    initialSlide: 0,
  };
  return (
    <SliderProjectsContainer>
      <Slider {...settings} className="test">
        {projects.map((project) => {
          return (
            <>
              <PrintFrame className="frame" background={project.img_print} />
              <h3>{project.title}</h3>
            </>
          );
        })}
      </Slider>
    </SliderProjectsContainer>
  );
};

export default SliderProjects;
