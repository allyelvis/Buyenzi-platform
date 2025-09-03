
export type NavItem = {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
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

export type ExplorerBlock = {
  number: number;
  timestamp: number;
  txnCount: number;
  miner: string;
  gasUsed: number;
  gasLimit: number;
};

export type ExplorerTransaction = {
  hash: string;
  blockNumber: number;
  from: string;
  to: string;
  value: number; // in ETH
  gasFee: number; // in ETH
  timestamp: number;
};

export type ExplorerAddress = {
    address: string;
    balance: number; // in ETH
    totalTx: number;
};

export type ChatMessage = {
    id:string;
    text: string;
    isUser: boolean;
};

export type TvChannel = {
  id: string;
  name: string;
  logoUrl: string;
  category: 'Sports' | 'Movies' | 'Music' | 'News' | 'General';
};

export type TvProgram = {
  id: string;
  channelId: string;
  title: string;
  description: string;
  startTime: Date;
  endTime: Date;
};

export type SubscriptionPlan = {
  id: string;
  name: string;
  priceUsd: number;
  priceEth: number;
  features: string[];
};