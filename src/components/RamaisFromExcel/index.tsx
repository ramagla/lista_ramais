import React, { useState, useEffect } from "react";
import EmployeeCard from "../EmployeeCard";
import SearchBar from "../SearchBar";
import { Container } from "./styles";
import { Employee } from "../../types";
import * as XLSX from "xlsx";
import Header from "../Header";
import Footer from "../Rodape";
import Fuse from "fuse.js";

const RamaisFromExcel: React.FC = () => {
  const [data, setData] = useState<Employee[]>([]);
  const [filteredData, setFilteredData] = useState<Employee[]>([]);

  useEffect(() => {
    const readExcel = async () => {
      try {
        const response = await fetch("/assets/planilha_de_ramais.xlsx");
        if (!response.ok) throw new Error("Network response was not ok");
        const buffer = await response.arrayBuffer();

        const wb = XLSX.read(buffer, { type: "array" });
        const wsname = wb.SheetNames[0];
        const ws = wb.Sheets[wsname];
        const jsonData = XLSX.utils.sheet_to_json<string[]>(ws, { header: 1 });

        if (jsonData.length > 0 && Array.isArray(jsonData[0])) {
          const employeeData: Employee[] = jsonData.slice(1).map((row) => ({
            name: row[0],
            ramal: row[1],
            setor: row[2],
            cargo: row[3],
            email: row[4],
            foto: row[5],
            linkedin: row[6],  // Nova coluna para LinkedIn
            descricao: row[7], // Nova coluna para Descrição
          }));

          setData(employeeData);
          setFilteredData(employeeData);
        } else {
          console.error("Invalid data format in the Excel file.");
        }
      } catch (error) {
        console.error("Error fetching or processing file:", error);
      }
    };

    readExcel();
  }, []);

  const handleSearch = (term: string) => {
    if (!term) {
      setFilteredData(data);
      return;
    }

    const fuse = new Fuse(data, {
      keys: ["name", "cargo", "setor"],
      threshold: 0.3, // mais baixo = mais preciso, mais alto = mais tolerante
    });

    const results = fuse.search(term);
    const matched = results.map(result => result.item);

    setFilteredData(matched);
  };

  return (
    <Container>
      <Header />
      <SearchBar onSearch={handleSearch} />
      {filteredData.length > 0 ? (
        filteredData.map((employee, index) => (
          <EmployeeCard
            key={`${employee.ramal}-${index}`}
            name={employee.name}
            ramal={employee.ramal}
            setor={employee.setor}
            cargo={employee.cargo}
            email={employee.email}
            foto={employee.foto}
            linkedin={employee.linkedin}
            descricao={employee.descricao}
          />
        ))
      ) : (
        <p>Não encontrado...</p>
      )}
      <Footer />
    </Container>
  );
};

export default RamaisFromExcel;
