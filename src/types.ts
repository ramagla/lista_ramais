// types.ts

export interface Employee {
  name: string;
  ramal: string;
  setor: string;
  cargo: string;
  email: string;
  foto: string; 
  linkedin?: string;  // O LinkedIn é opcional
  descricao?: string; // A descrição (fun fact) também é opcional
}
