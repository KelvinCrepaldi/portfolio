import ContentContainer from "../../components/ContentContainer ";
import { HomeContainer } from "./Home.styles";

const Home = () => {
  return (
    <HomeContainer>
      <div className="first-content">
        <div className="title-container">
          <span className="title-content-one">Olá, eu sou Kelvin Crepaldi</span>
          <span className="title-content-two">Desenvolvedor Full-Stack Jr</span>
          <button>Github</button>
          <button>Linkedin</button>
        </div>

        <div>
          Esse website é meu espaço, criado para guardar algumas coisas que
          aprendi e criei durante meu tempo como programador Seja bem vindo...
        </div>
      </div>

      <ContentContainer className="sobre-mim">
        <h1>Sobre mim</h1>
        <p>
          Meu contato com tecnologia começou com minha curiosidade sobre
          “programação” na adolescência, desde então tenho dedicado meu tempo
          para aprender desenvolvimento web, sempre gostei da ideia de ser um
          "programador e desenvolvedor" então decidi me tornar um.
        </p>
        <p>
          No início do ano iniciei meus estudos de desenvolvimento web, fazendo
          alguns cursos na Udemy e pesquisando aquilo que me interessava, foi ai
          que conheci a Kenzie Academy, e iniciei minha jornada de 1 ano de
          estudos.
        </p>
        <p>
          Formado pela Kenzie Academy como Full Stack, aprendi principais
          tecnologias de Front End e Back End. Entre as linguagens e tecnologias
          aprendidas, estão HTML5, CSS3, JavaScript (ES6 +), React, Redux,
          Python (Django e Flask),Node.js, Express, e SQL. Além de soft skills
          disponíveis para o mercado de trabalho, Scrum, Kanban.
        </p>
        <span>E minha jornada continua . . .</span>
      </ContentContainer>
    </HomeContainer>
  );
};

export default Home;
