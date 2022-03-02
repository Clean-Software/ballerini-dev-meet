interface IEventCardProps {
  data: string;
  hora: string;
  title: string;
  description: string;
  author: string;
    
  link?: string;
  timestamp?: number;
  createdAt?: number;
}

interface IEventPost {
  id: string;
  tipoId: number;
  dataInicio: string;
  dataPublicacao: string;
  descricao: string;
  link: string;
  organizador: string;
  titulo: string;
}

export type { IEventCardProps, IEventPost };