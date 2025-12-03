import { ServiceItem, CompanyStats } from './types';

export const COMPANY_INFO = {
  name: "Freeday",
  tagline: "Higiene Profissional e Manutenção Industrial",
  address: "Rua da Prata Lote 130, Parque Industrial Vale do Alecrim, Setúbal, Portugal",
  hq: "Palmela",
  phone: "936 596 632",
  email: "info@freeday.pt",
  facebook: "https://www.facebook.com/p/Freeday-100075761210261/",
  logo: "https://raw.githubusercontent.com/veilstudio/websites/main/Freeday%20Logo.jpg",
  foundedDate: "2011-03-16",
  yearsActive: 14
};

export const SERVICES: ServiceItem[] = [
  {
    id: '1',
    title: 'Produtos de Limpeza',
    description: 'Vasta gama de detergentes e soluções químicas para limpeza profissional e industrial.',
    icon: 'cleaning'
  },
  {
    id: '2',
    title: 'Equipamentos Hoteleiros',
    description: 'Máquinas e equipamentos de suporte para o setor da hotelaria e restauração.',
    icon: 'hotel'
  },
  {
    id: '3',
    title: 'Manutenção Industrial',
    description: 'Produtos técnicos e consumíveis para a manutenção de grandes superfícies e fábricas.',
    icon: 'industrial'
  },
  {
    id: '4',
    title: 'Desinfestação',
    description: 'Serviços profissionais de controlo de pragas e higienização de espaços.',
    icon: 'pest'
  }
];

export const GROWTH_DATA: CompanyStats[] = [
  { year: '2011', clients: 10, products: 50 },
  { year: '2014', clients: 45, products: 120 },
  { year: '2017', clients: 120, products: 300 },
  { year: '2020', clients: 250, products: 600 },
  { year: '2023', clients: 480, products: 1200 },
  { year: '2025', clients: 650, products: 1500 },
];