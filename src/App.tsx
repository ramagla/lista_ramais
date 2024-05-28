import React from "react";
import RamaisFromExcel from "./components/RamaisFromExcel";
import GlobalStyles from "./GlobalStyles";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <RamaisFromExcel />
    </>
  );
};

export default App;
