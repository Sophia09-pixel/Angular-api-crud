// src/app/interfaces/evento.ts
export interface Evento {
  id: number;
  titulo: string;
  data: string;
  horario: string;
  local: string;
  corDestaque: string;
  icone: string;
  inscrito?: boolean;
}
