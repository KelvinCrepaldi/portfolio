import NavBar from "../Navbar";
import { TopBlackContainer, LayoutContainer } from "./Layout.styles";

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <TopBlackContainer>
        <span className="title">{`<Kelvin crepaldi/>`}</span>
        <NavBar></NavBar>
      </TopBlackContainer>

      <div>{children}</div>
    </LayoutContainer>
  );
};

export default Layout;
