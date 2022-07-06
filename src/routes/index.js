import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Portfolio from "../pages/Portfolio";
import Articles from "../pages/Articles";
import Contact from "../pages/Contact";
const RoutesPatchs = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/articles" element={<Articles />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default RoutesPatchs;
