import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "../pages/Home";
import Portfolio from "../pages/Portfolio";
import Layout from "../components/Layout";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

const RoutesPatchs = () => {
  return (
    <Layout>
      <ScrollToTop>
        <AnimatePresence>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
        </AnimatePresence>
      </ScrollToTop>
    </Layout>
  );
};

export default RoutesPatchs;
