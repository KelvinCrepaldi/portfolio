import MobileNavBar from "../MobileNavbar";
import { TopBlackContainer, LayoutContainer } from "./Layout.styles";
import Footer from "../Footer";
const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <TopBlackContainer>
        <span className="title">{`<Kelvin crepaldi/>`}</span>
        <MobileNavBar></MobileNavBar>
      </TopBlackContainer>

      <div>{children}</div>
      <Footer></Footer>
    </LayoutContainer>
  );
};

export default Layout;
