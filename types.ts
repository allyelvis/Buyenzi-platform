
export type NavItem = {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
};

export type ChartData = {
  name: string;
  value: number;
};

export type Transaction = {
  id: string;
  description: string;
  amount: number;
  currency: 'USD' | 'BTC' | 'ETH';
  type: 'deposit' | 'withdrawal' | 'purchase';
  timestamp: string;
};

export type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  imageUrl: string;
};
