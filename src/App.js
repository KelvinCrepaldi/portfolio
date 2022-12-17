import RoutesPatchs from "./routes";
import GlobalStyle from "./styles/global";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "Kelvin Crepaldi";
  }, []);
  return (
    <>
      <GlobalStyle />
      <RoutesPatchs />
    </>
  );
}

export default App;
