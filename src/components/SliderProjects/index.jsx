import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SliderCardComponent } from "./SliderProjects.styles";

import { SliderProjectsContainer, PrintFrame } from "./SliderProjects.styles";

const SliderProjects = ({ projects }) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1040,
        settings: {
          slidesToShow: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 690,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <SliderProjectsContainer>
      <Slider {...settings} className="test">
        {projects.map((project) => {
          return (
            <SliderCardComponent>
              <a href={project.demo_url} target="_blank" rel="noreferrer">
                <PrintFrame className="frame" background={project.img_print} />
              </a>
              <h3>{project.title}</h3>
            </SliderCardComponent>
          );
        })}
      </Slider>
    </SliderProjectsContainer>
  );
};

export default SliderProjects;
