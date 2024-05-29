import React, { useState, useEffect } from "react";
import EmployeeCard from "../EmployeeCard";
import SearchBar from "../SearchBar";
import { Container } from "./styles";
import { Employee } from "../../types";
import * as XLSX from "xlsx";

const RamaisFromExcel: React.FC = () => {
  const [data, setData] = useState<Employee[]>([]);
  const [filteredData, setFilteredData] = useState<Employee[]>([]);

  useEffect(() => {
    // Função para ler os dados da planilha
    const readExcel = async () => {
      const promise = new Promise<Employee[]>((resolve, reject) => {
        fetch("../../../public/planilha_de_ramais.xlsx")
          .then((response) => response.arrayBuffer())
          .then((buffer) => {
            const wb = XLSX.read(buffer, { type: "array" });
            const wsname = wb.SheetNames[0];
            const ws = wb.Sheets[wsname];
            const jsonData = XLSX.utils.sheet_to_json<string[]>(ws, {
              header: 1,
            });

            // Mapeia os dados JSON para um array de Employee
            const employeeData: Employee[] = jsonData.slice(1).map((row) => ({
              name: row[0],
              ramal: row[1],
              setor: row[2],
              cargo: row[3],
              email: row[4],
              foto: row[5],
            }));
            resolve(employeeData);
          })
          .catch((error) => {
            console.error("Error fetching file:", error);
            reject(error);
          });
      });

      promise
        .then((data) => {
          setData(data);
          setFilteredData(data);
        })
        .catch((error) => {
          console.error("Error processing file:", error);
        });
    };

    // Ler a planilha quando o componente for montado
    readExcel();
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
            key={`${employee.ramal}-${index}`} // Ensure `key` is unique, using `index` as fallback
            name={employee.name}
            ramal={employee.ramal}
            setor={employee.setor}
            cargo={employee.cargo}
            email={employee.email}
            foto={employee.foto}
          />
        ))
      ) : (
        <p>No data available</p> // Display message if no data
      )}
    </Container>
  );
};

export default RamaisFromExcel;
