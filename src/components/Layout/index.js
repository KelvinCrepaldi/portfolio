import NavBar from "../Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <NavBar></NavBar>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
