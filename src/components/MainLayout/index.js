import NavBar from "../NavBar";
import { LayoutContainer, MainContainer } from "./mainLayout.css";

const MainLayout = ({ children }) => {
  return (
    <LayoutContainer>
      <NavBar />
      {children}
    </LayoutContainer>
  );
};
export default MainLayout;
