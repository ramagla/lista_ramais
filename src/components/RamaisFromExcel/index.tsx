import React, { useState, useEffect } from "react";
import * as XLSX from "xlsx";
import EmployeeCard from "../EmployeeCard";
import SearchBar from "../SearchBar";
import { Container } from "./styles";
import { Employee } from "../../types";

const RamaisFromXLSX: React.FC = () => {
  const [data, setData] = useState<Employee[]>([]);
  const [filteredData, setFilteredData] = useState<Employee[]>([]);

  useEffect(() => {
    const readXLSX = async () => {
      try {
        const response = await fetch("../../assets/planilha_de_ramais.xlsx");
        const arrayBuffer = await response.arrayBuffer();
        const workbook = XLSX.read(arrayBuffer, { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const employeeData: Employee[] = XLSX.utils
          .sheet_to_json(sheet, { defval: "" })
          .map((row: any) => {
            const employee: Employee = {
              name: row["name"]?.trim(),
              ramal: row["ramal"]?.trim(),
              setor: row["setor"]?.trim(),
              cargo: row["cargo"]?.trim(),
              email: row["email"]?.trim(),
              foto: row["foto"]?.trim(),
            };
            return employee;
          });
        setData(employeeData);
        setFilteredData(employeeData);
      } catch (error) {
        console.error("Error reading XLSX file:", error);
      }
    };

    readXLSX();
  }, []);

  const handleSearch = (term: string) => {
    const filtered = data.filter(
      (employee) =>
        employee.name.toLowerCase().includes(term.toLowerCase()) ||
        employee.cargo.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <Container>
      <SearchBar onSearch={handleSearch} />
      {filteredData.length > 0 ? (
        filteredData.map((employee, index) => (
          <EmployeeCard
            key={index}
            name={employee.name}
            ramal={employee.ramal}
            setor={employee.setor}
            cargo={employee.cargo}
            email={employee.email}
            foto={employee.foto}
          />
        ))
      ) : (
        <p>No data available</p>
      )}
    </Container>
  );
};

export default RamaisFromXLSX;
