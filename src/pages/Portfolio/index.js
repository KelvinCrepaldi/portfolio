import { PortfolioContainer } from "./Portfolio.styles";

import { faDiagramProject } from "@fortawesome/free-solid-svg-icons";

import ContentContainer from "../../components/ContentContainer ";
const Portfolio = () => {
  return (
    <PortfolioContainer>
      <ContentContainer title="Portfólio" icon={faDiagramProject}>
        Portfolio content
      </ContentContainer>
    </PortfolioContainer>
  );
};

export default Portfolio;
