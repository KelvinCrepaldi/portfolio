import NavBar from "../NavBar";
import { HeaderContainer, LayoutContainer } from "./Layout.styles";
import Footer from "../Footer";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";
const Layout = ({ children }) => {
  const [menuIsVisible, setMenuIsVisible] = useState(true);
  return (
    <LayoutContainer>
      <HeaderContainer>
        <Link to="/">
          <span className="title">
            <FontAwesomeIcon icon={faLaptopCode} />
            {` <Kelvin crepaldi/>`}
          </span>
        </Link>

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
