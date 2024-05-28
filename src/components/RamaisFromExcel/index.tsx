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
    const readExcel = async (event: Event) => {
      const target = event.target as HTMLInputElement;
      const files = target.files;
      if (files && files.length > 0) {
        const file = files[0];
        const promise = new Promise<Employee[]>((resolve, reject) => {
          const fileReader = new FileReader();
          fileReader.readAsArrayBuffer(file);

          fileReader.onload = (e) => {
            const bufferArray = e.target?.result as ArrayBuffer;
            const wb = XLSX.read(bufferArray, { type: "buffer" });
            const wsname = wb.SheetNames[0];
            const ws = wb.Sheets[wsname];
            const data = XLSX.utils.sheet_to_json<Employee>(ws, { header: 1 });
            resolve(data);
          };

          fileReader.onerror = (error) => {
            reject(error);
          };
        });

        promise.then((data) => {
          // Remover o cabeçalho da planilha
          data.shift();
          setData(data);
          setFilteredData(data);
        });
      } else {
        console.error("No file selected");
      }
    };

    // Ler a planilha quando o componente for montado
    const fileInput = document.getElementById("fileInput");
    if (fileInput) {
      fileInput.addEventListener("change", readExcel);
    }

    return () => {
      if (fileInput) {
        fileInput.removeEventListener("change", readExcel);
      }
    };
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
      {filteredData.map((employee) => (
        <EmployeeCard
          key={employee.ramal}
          name={employee.name}
          ramal={employee.ramal}
          setor={employee.setor}
          cargo={employee.cargo}
          email={employee.email}
          foto={employee.foto}
        />
      ))}
    </Container>
  );
};

export default RamaisFromExcel;
