import { AboutMeContainer } from "./AboutMe.styles";
import image2 from "../../assets/img2.svg";
import image1 from "../../assets/img1.svg";

const AboutMe = () => {
  return (
    <AboutMeContainer>
      <p>
        Meu contato com tecnologia começou a partir da minha curiosidade por
        sistemas computacionais na adolescência, desde então tenho dedicado meu
        tempo para aprender desenvolvimento web.
      </p>
      <div className="first-block">
        <img src={image2} alt="yoast seo" />
        <p>
          Gosto da área porque me sinto feliz criando códigos e atingindo as
          metas de um projeto, dessa forma meus objetivos são melhorar minhas
          habilidades como programador, e me tornar um programador completo Full
          Stack, tendo a liberdade de trabalhar em qualquer lugar do mundo.
        </p>
      </div>
      <div className="second-block">
        <img src={image1} alt="yoast seo" />
        <p>
          Formado pela Kenzie Academy como Full Stack, aprendi principais
          tecnologias de Front End e Back End. Entre as linguagens e tecnologias
          aprendidas, estão HTML5, CSS3, JavaScript (ES6 +), React, Redux,
          Python (Django e Flask),Node.js, Express, e SQL. Além de soft skills
          disponíveis para o mercado de trabalho, Scrum, Kanban.
        </p>
      </div>

      <div className="total-width-space">
        <span className="final-message">E a minha jornada continua . . .</span>
      </div>
      <img
        className="bottom-img"
        src="https://i.imgur.com/pRlisxV.png"
        alt="Certificado Kenzie Academy"
      />
    </AboutMeContainer>
  );
};

export default AboutMe;
