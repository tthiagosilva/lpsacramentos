export interface DocumentItem {
  id: string;
  text: string;
  subtext?: string;
}

export interface VacancyInfo {
  title: string;
  count: number;
  description: string;
  details?: string[];
  note?: string;
}

export const CAJU_LINK = "https://www.comunidadecaju.com.br";