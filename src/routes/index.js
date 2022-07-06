import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Portfolio from "../pages/Portfolio";
import Articles from "../pages/Articles";
import Contact from "../pages/Contact";

import MainLayout from "../components/MainLayout";
const RoutesPatchs = () => {
  return (
    <>
      <MainLayout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </MainLayout>
    </>
  );
};

export default RoutesPatchs;
