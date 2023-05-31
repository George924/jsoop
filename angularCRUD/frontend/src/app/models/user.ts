export interface User {
  id: number;
  nume: string;
  prenume: string;
  email: string;
  datanastere: Date;
  datadeadaugare?: Date;
  telefon: string;
}
