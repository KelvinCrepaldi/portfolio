import ContentContainer from "../../components/ContentContainer ";
import { HomeContainer } from "./Home.styles";
import AboutMe from "../../components/AboutMe";

const Home = () => {
  return (
    <HomeContainer>
      <div className="title-content">
        <div>
          <div className="title-container">
            <span className="title-content-top">
              Olá, eu sou Kelvin Crepaldi
            </span>
            <span className="title-content-bottom">
              Desenvolvedor Full-Stack Jr
            </span>
          </div>
          <div className="button-home-container">
            <button>Github</button>
            <button>Linkedin</button>
          </div>
        </div>

        <div className="welcome-message">
          <span>
            Esse website é meu espaço, criado para guardar algumas coisas que
            aprendi e criei durante meu tempo como programador
          </span>
          <span> Seja bem vindo...</span>
        </div>
      </div>

      <ContentContainer>
        <AboutMe></AboutMe>
      </ContentContainer>
    </HomeContainer>
  );
};

export default Home;
