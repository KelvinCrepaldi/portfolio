import ContentContainer from "../../components/ContentContainer ";
import { HomeContainer } from "./Home.styles";
import AboutMe from "../../components/AboutMe";
import Technologies from "../../components/Technologies";
import GoToPortfolio from "../../components/GoToPortfolio";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faAddressCard, faMicrochip } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <HomeContainer>
      <div className="title-content">
        <div>
          <div className="title-container">
            <span className="title-content-top">
              Olá, eu sou <span className="name">Kelvin Crepaldi</span>
            </span>
            <span className="title-content-bottom">
              Desenvolvedor Full-Stack Jr
            </span>
          </div>
          <div className="button-home-container">
            <button>
              <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
              <span>Github</span>
            </button>
            <button>
              <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
              <span>Linkedin</span>
            </button>
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

      <ContentContainer icon={faAddressCard} title="Sobre mim">
        <AboutMe />
      </ContentContainer>
      <ContentContainer icon={faMicrochip} title="Tecnologias">
        <Technologies />
      </ContentContainer>
      <ContentContainer>
        <GoToPortfolio />
      </ContentContainer>
    </HomeContainer>
  );
};

export default Home;
