export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: 'cleaning' | 'pest' | 'hotel' | 'industrial' | 'consulting';
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export interface CompanyStats {
  year: string;
  clients: number;
  products: number;
}