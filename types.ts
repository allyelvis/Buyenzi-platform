
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

export type Network = {
  id: string;
  name: string;
  rpcUrl: string;
  chainId: number;
  currencySymbol: string;
  isCustom?: boolean;
};

export type WalletAsset = {
  id: string;
  name: string;
  symbol: string;
  balance: number;
  usdValue: number;
  icon: React.ComponentType<{ className?: string }>;
};

export type GeneratedNFT = {
    id: string;
    name: string;
    description: string;
    imageUrl: string;
    txHash: string;
};
