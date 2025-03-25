// App.tsx
import React from "react";
import RamaisFromCSV from "../src/components/RamaisFromExcel"; // Corrected import path
import GlobalStyles from "./GlobalStyles";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <RamaisFromCSV />
      
    </>
  );
};

export default App;
