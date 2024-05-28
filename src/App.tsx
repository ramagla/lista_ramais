// App.tsx
import React from "react";
import RamaisFromCSV from "../src/components/RamaisFromExcel"; // Corrected import path
import GlobalStyles from "./GlobalStyles";
import Footer from "../src/components/footer"; // Corrected import path

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <RamaisFromCSV />
      <Footer />
    </>
  );
};

export default App;
