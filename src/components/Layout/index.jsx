import NavBar from "../NavBar";
import { HeaderContainer, LayoutContainer } from "./Layout.styles";
import Footer from "../Footer";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
const Layout = ({ children }) => {
  const [menuIsVisible, setMenuIsVisible] = useState(true);
  return (
    <LayoutContainer>
      <div className="background">
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

      <HeaderContainer>
        <span className="title">
          <FontAwesomeIcon icon={faLaptopCode} />
          {` <Kelvin crepaldi/>`}
        </span>
        <NavBar
          menuIsVisible={menuIsVisible}
          setMenuIsVisible={setMenuIsVisible}
        ></NavBar>
      </HeaderContainer>

      <div className="content-page">{children}</div>
      <Footer></Footer>
    </LayoutContainer>
  );
};

export default Layout;
