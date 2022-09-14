import { AboutMeContainer } from "./AboutMe.styles";
import image2 from "../../assets/img2.svg";

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
        <img
          src="https://static.semrush.com/blog/uploads/media/43/b0/43b0b9a04c8a433a0c52360c9cc9aaf2/seo-guide-to-yoast-for-wordpress.svg"
          alt="yoast seo"
        />
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
        src="https://static.semrush.com/blog/uploads/media/43/b0/43b0b9a04c8a433a0c52360c9cc9aaf2/seo-guide-to-yoast-for-wordpress.svg"
        alt="yoast seo"
      />
    </AboutMeContainer>
  );
};

export default AboutMe;
