import { ChartData, Product, Transaction, Network, WalletAsset } from './types';

export const Logo = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 160 40" xmlns="http://www.w3.org/2000/svg">
    <text x="0" y="30" fontFamily="Inter, sans-serif" fontSize="32" fontWeight="900" fill="white">
      buyenzi
    </text>
  </svg>
);

export const DashboardIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg xmlns="http://www.w.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

export const NftIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
    </svg>
);

export const SettingsIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066 2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

export const NetworkIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 19.5v-.75a7.5 7.5 0 00-7.5-7.5H4.5m0-6.75h.75c7.87 0 14.25 6.38 14.25 14.25v.75M6 18.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
    </svg>
);

export const SendIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
    </svg>
);

export const ReceiveIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15M9 12l3 3m0 0l3-3m-3 3V2.25" />
    </svg>
);

export const SwapIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
    </svg>
);

export const SparklesIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.572L16.5 21.75l-.398-1.178a3.375 3.375 0 00-2.455-2.456L12.75 18l1.178-.398a3.375 3.375 0 002.455-2.456L16.5 14.25l.398 1.178a3.375 3.375 0 002.456 2.456L20.25 18l-1.178.398a3.375 3.375 0 00-2.456 2.456z" />
    </svg>
);

export const SearchIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
);

export const ClipboardIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v.007a2.25 2.25 0 01-2.25 2.25h-3a2.25 2.25 0 01-2.25-2.25v-.007c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
    </svg>
);


export const BtcIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12zm-.665-5.96h-2.31l.482-1.936h2.31l-.482 1.936zm.221-3.235h-2.31l.481-1.935h2.31l-.48 1.935zm.698-1.305l.48-1.935h2.15l-.71 2.85-1.92.765zm-.698 2.61l.481-1.935h2.31l-.48 1.935h-2.31zm3.17-5.17l-1.074 4.315.698 1.305.48-1.935.24-.96.482-1.935.481-1.935h-1.29l-.017.15zM8.99 14.804l.481-1.935h3.01l-.22 3.235-3.27.815zm2.14-9.394l-.48 1.935h-2.14l-.705-2.835 3.325.9z" fill="#F7931A"/></svg>
);
export const EthIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z" fill="#627EEA"/><path d="M12.244 3.835v7.957l5.952 3.65-5.952-11.607z" fill="#C0D3F9"/><path d="M12.244 3.835L6.29 15.442l5.953-3.65V3.835z" fill="#FFF"/><path d="M12.244 16.71v5.455l5.956-8.58-5.956 3.125z" fill="#C0D3F9"/><path d="M12.244 22.165V16.71l-5.952-3.125 5.952 8.58z" fill="#FFF"/></svg>
);
export const UsdIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="12" fill="#22C55E"/><path d="M12.63 17.5c-1.34.62-2.8.68-4.13.18-1.33-.5-2.4-1.47-3-2.68-.08-.18-.3-1.02.1-1.12.38-.1 1.05.74 1.13.9.43.83 1.28 1.4 2.22 1.54.94.13 1.9-.12 2.6-.7.7-.58.9-1.4.5-2.12-.42-.72-1.3-1.08-2.14-1.28-1.6-.38-3.2-.82-4.2-2.1-1-1.28-.9-2.9.22-4.05.1-.1.2-.2.32-.28.18-.12.4-.18.62-.18h.12c.24 0 .48.06.7.18.1.06.2.14.28.24.08.1.14.2.2.32.22.36.4.74.54 1.12.2.52.42 1.03.62 1.54.04.1.2.14.3.06.22-.18.4-.4.53-.62.2-.34.36-.7.5-1.06.08-.18.28-.3.48-.3h.02c.2 0 .4.1.48.28.08.18.1.4-.04.62-.22.34-.48.66-.75.94-.48.52-1.04.9-1.66 1.18-.58.26-1.2.4-1.8.46-1.16.1-2.02.66-2.4 1.6-.2.48-.2 1 .04 1.44.25.44.68.8 1.18 1.02.94.42 2.1.4 3.1-.04.83-.36 1.55-.98 1.9-1.8.1-.2.24-.34.42-.34h.02c.2 0 .38.1.46.3.08.18.1.4-.02.58-.38.9-1.02 1.68-1.82 2.22z" fill="#fff"/></svg>
);


export const NAV_ITEMS = [
  { name: 'Dashboard', icon: DashboardIcon },
  { name: 'Marketplace', icon: MarketplaceIcon },
  { name: 'Wallet', icon: WalletIcon },
  { name: 'NFT Studio', icon: NftIcon },
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
    { id: 'tx_5', description: 'Staking Rewards', amount: 0.1, currency: 'ETH', type: 'deposit', timestamp: '2024-07-26T18:00:00Z' },
    { id: 'tx_6', description: 'Marketplace Sale: 3D Model', amount: 150, currency: 'USD', type: 'deposit', timestamp: '2024-07-25T14:20:00Z' },
    { id: 'tx_7', description: 'Withdrawal to external wallet', amount: -1.0, currency: 'BTC', type: 'withdrawal', timestamp: '2024-07-24T08:00:00Z' },
    { id: 'tx_8', description: 'Software Subscription', amount: -19.99, currency: 'USD', type: 'purchase', timestamp: '2024-07-22T12:00:00Z' },
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

export const MOCK_ASSETS: WalletAsset[] = [
  { id: 'btc', name: 'Bitcoin', symbol: 'BTC', balance: 5.2345, usdValue: 314070.00, icon: BtcIcon },
  { id: 'eth', name: 'Ethereum', symbol: 'ETH', balance: 25.678, usdValue: 77034.00, icon: EthIcon },
  { id: 'usd', name: 'US Dollar', symbol: 'USD', balance: 10580.50, usdValue: 10580.50, icon: UsdIcon },
];