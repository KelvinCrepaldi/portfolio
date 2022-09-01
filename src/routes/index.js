import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../components/Layout";

const RoutesPatchs = () => {
  return (
    <Layout>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </Layout>
  );
};

export default RoutesPatchs;
