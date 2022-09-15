import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Portfolio from "../pages/Portfolio";
import Layout from "../components/Layout";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

const RoutesPatchs = () => {
  return (
    <Layout>
      <ScrollToTop>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </ScrollToTop>
    </Layout>
  );
};

export default RoutesPatchs;
