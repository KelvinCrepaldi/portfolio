import { HomeContainer } from "./Home.styles";
import { motion } from "framer-motion";

import ContentContainer from "../../components/ContentContainer";
import AboutMe from "../../components/AboutMe";
import Technologies from "../../components/Technologies";
import GoToPortfolio from "../../components/GoToPortfolio";
import Contact from "../../components/Contact";
import meImg from "../../assets/me.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faMicrochip,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  return (
    <>
      <HomeContainer>
        <motion.div
          className="motion-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="title-content">
            <div className="apresentation-content">
              <img className="me-img" src={meImg} alt="me" />
              <div>
                <div className="title-container">
                  <span className="title-content-top">
                    Olá, eu sou Kelvin Crepaldi
                  </span>
                  <span className="title-content-bottom">
                    Desenvolvedor Full-Stack
                  </span>
                </div>
                <div className="social-links">
                  <a
                    href="https://github.com/KelvinCrepaldi"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/kelvincrepaldi/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                  </a>
                </div>
              </div>
            </div>

            <div className="welcome-message">
              <span>
                Esse website é meu espaço, criado para guardar algumas coisas
                que aprendi e criei durante meu tempo como programador
              </span>
              <span> Seja bem vindo...</span>
            </div>
          </div>
          <ContentContainer>
            <GoToPortfolio />
          </ContentContainer>
          <ContentContainer icon={faMicrochip} title="Tecnologias">
            <Technologies />
          </ContentContainer>
          <ContentContainer icon={faAddressCard} title="Sobre mim">
            <AboutMe />
          </ContentContainer>
          <ContentContainer title="Contato" icon={faEnvelope}>
            <Contact />
          </ContentContainer>
        </motion.div>
      </HomeContainer>
    </>
  );
};

export default Home;
