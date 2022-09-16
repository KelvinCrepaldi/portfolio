import MobileNavBar from "../MobileNavbar";
import { TopBlackContainer, LayoutContainer } from "./Layout.styles";
import Footer from "../Footer";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <div class="background">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <TopBlackContainer>
        <span className="title">
          <FontAwesomeIcon icon={faLaptopCode} />
          {` <Kelvin crepaldi/>`}
        </span>
        <MobileNavBar></MobileNavBar>
      </TopBlackContainer>

      <div className="content-page">{children}</div>
      <Footer></Footer>
    </LayoutContainer>
  );
};

export default Layout;
