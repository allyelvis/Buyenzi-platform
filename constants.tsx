
import { ChartData, Product, Transaction, Network } from './types';

export const Logo = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 160 40" xmlns="http://www.w3.org/2000/svg">
    <text x="0" y="30" fontFamily="Inter, sans-serif" fontSize="32" fontWeight="900" fill="white">
      buyenzi
    </text>
  </svg>
);

export const DashboardIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
  </svg>
);

export const MarketplaceIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
  </svg>
);

export const WalletIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
  </svg>
);

export const FundingIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8v1m0 10v1m0-13a9 9 0 110 18 9 9 0 010-18z" />
    </svg>
);

export const TransactionsIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h.01M12 7h.01M16 7h.01M9 17h6M5 10h14M4 17a2 2 0 01-2-2V7a2 2 0 012-2h16a2 2 0 012 2v8a2 2 0 01-2 2h-2l-4-4-4 4H4z" />
  </svg>
);

export const SettingsIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

export const NetworkIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 19.5v-.75a7.5 7.5 0 00-7.5-7.5H4.5m0-6.75h.75c7.87 0 14.25 6.38 14.25 14.25v.75M6 18.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
    </svg>
);


export const NAV_ITEMS = [
  { name: 'Dashboard', icon: DashboardIcon },
  { name: 'Marketplace', icon: MarketplaceIcon },
  { name: 'Wallet', icon: WalletIcon },
  { name: 'Funding', icon: FundingIcon },
  { name: 'Transactions', icon: TransactionsIcon },
];

export const MOCK_CHART_DATA: ChartData[] = [
  { name: 'Jan', value: 4000 },
  { name: 'Feb', value: 3000 },
  { name: 'Mar', value: 5000 },
  { name: 'Apr', value: 4500 },
  { name: 'May', value: 6000 },
  { name: 'Jun', value: 5500 },
  { name: 'Jul', value: 7000 },
];

export const MOCK_TRANSACTIONS: Transaction[] = [
  { id: 'tx_1', description: 'NFT Purchase: CryptoPunk #7804', amount: -2.5, currency: 'ETH', type: 'purchase', timestamp: '2024-07-29T10:00:00Z' },
  { id: 'tx_2', description: 'Deposit from Coinbase', amount: 5000, currency: 'USD', type: 'deposit', timestamp: '2024-07-29T09:30:00Z' },
  { id: 'tx_3', description: 'E-commerce: VR Headset', amount: -499, currency: 'USD', type: 'purchase', timestamp: '2024-07-28T15:45:00Z' },
  { id: 'tx_4', description: 'Bitcoin Sale', amount: 0.5, currency: 'BTC', type: 'withdrawal', timestamp: '2024-07-27T11:20:00Z' },
];

export const MOCK_PRODUCTS: Product[] = [
    { id: 1, name: 'Quantum Laptop', category: 'Electronics', price: 2499.99, imageUrl: 'https://picsum.photos/seed/tech1/400/300' },
    { id: 2, name: 'Decentralized Cloud Storage', category: 'Web3 Service', price: 99.99, imageUrl: 'https://picsum.photos/seed/tech2/400/300' },
    { id: 3, name: 'AI Personal Assistant', category: 'Software', price: 49.99, imageUrl: 'https://picsum.photos/seed/tech3/400/300' },
    { id: 4, name: 'Exclusive NFT Art Pass', category: 'Digital Collectible', price: 1250.00, imageUrl: 'https://picsum.photos/seed/tech4/400/300' },
];

export const DEFAULT_NETWORKS: Network[] = [
  { id: 'eth_mainnet', name: 'Ethereum Mainnet', rpcUrl: 'https://mainnet.infura.io/v3/PROJECT_ID', chainId: 1, currencySymbol: 'ETH' },
  { id: 'polygon_mainnet', name: 'Polygon Mainnet', rpcUrl: 'https://polygon-rpc.com', chainId: 137, currencySymbol: 'MATIC' },
  { id: 'arbitrum_one', name: 'Arbitrum One', rpcUrl: 'https://arb1.arbitrum.io/rpc', chainId: 42161, currencySymbol: 'ETH' },
];
