import { Product, Transaction, Network, WalletAsset, WalletAccount, ExplorerBlock, ExplorerTransaction, TvChannel, TvProgram, SubscriptionPlan, UserProfile, Integration, MarketData } from './types';

export const Logo = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 160 40" xmlns="http://www.w3.org/2000/svg">
    <text x="0" y="30" fontFamily="Inter, sans-serif" fontSize="32" fontWeight="900" fill="currentColor">
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

export const NftIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
    </svg>
);

export const DAppBuilderIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
    </svg>
);

export const TvIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 20.25h12m-7.5-3.75v3.75m3.75-3.75v3.75m-7.5-12v10.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H8.25a2.25 2.25 0 00-2.25 2.25z" />
    </svg>
);

export const ExplorerIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 7.756a4.5 4.5 0 100 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75l3.75 3.75" />
    </svg>
);

export const ProfileIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
);

export const IntegrationsIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
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

export const ChatIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.76 9.76 0 01-2.53-.388m-5.18-3.122a21.739 21.739 0 01-.413-1.633c-.387-1.824.22-3.723 1.3-5.289.92-1.448 2.24-2.583 3.8-3.182.83-.332 1.7-.523 2.6-.523 4.97 0 9 3.694 9 8.25z" />
    </svg>
);

export const CreateWalletIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

export const ImportWalletIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
    </svg>
);

export const ExportWalletIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
    </svg>
);

export const LockIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
    </svg>
);

export const BuyIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
    </svg>
);
export const ShopIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.658-.463 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
    </svg>
);
export const StakeIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 3a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 12m15 0a2.25 2.25 0 002.25 2.25m-15 0a2.25 2.25 0 002.25 2.25m10.5 0a2.25 2.25 0 002.25 2.25m-15 0a2.25 2.25 0 002.25 2.25m10.5 0a2.25 2.25 0 002.25 2.25M9 12l3 3m-3-3l3-3" />
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
export const SolIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="12" fill="url(#sol_gradient)"/><path d="M5.46 13.065l3.612-2.13-3.612-2.13v4.26zm.002 1.305l3.61-2.128-3.61-2.128v4.256zm8.998-5.592l-3.61 2.128 3.61 2.128V8.778zm0-1.305l-3.612 2.13 3.612 2.13V7.473zM5.46 15.675l3.612-2.13-3.612-2.13v4.26zm8.998-2.612l-3.61 2.128 3.61 2.128V13.063z" fill="#fff"/><defs><linearGradient id="sol_gradient" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse"><stop stopColor="#9945FF"/><stop offset="1" stopColor="#14F195"/></linearGradient></defs></svg>
);

export const XrpIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="12" fill="#23292F"/><path d="M8.28 17.625l2.67-2.624 1.05-1.05-1.05-1.05-2.67-2.626L6 12.5l2.28 2.25v2.875zm7.44-11.25l-2.67 2.625-1.05 1.05 1.05 1.05 2.67 2.625L18 11.5l-2.28-2.25V6.375z" fill="#fff"/></svg>
);

export const DogeIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="12" fill="#C3A634"/><path d="M12 4.5c-3.12 0-5.805 1.905-6.945 4.575.105-.015.21-.03.33-.03 1.2 0 2.295.39 3.21.975l.135.09c.42.285.885.495 1.38.615.105.015.21.03.315.03.375 0 .735-.06 1.08-.18.36-.12.69-.3.975-.525l.12-.09c.915-.585 2.01-.975 3.21-.975.12 0 .225.015.33.03C17.805 6.405 15.12 4.5 12 4.5zm-5.04 6.9c-.315.405-.51 1.035-.51 1.71 0 .675.195 1.305.51 1.71.3.39.735.615 1.215.615.48 0 .915-.225 1.215-.615.315-.405.51-1.035.51-1.71 0-.675-.195-1.305-.51-1.71-.3-.39-.735-.615-1.215-.615-.48 0-.915-.225-1.215.615zm8.115 0c-.315.405-.51 1.035-.51 1.71 0 .675.195 1.305.51 1.71.3.39.735.615 1.215.615.48 0 .915-.225 1.215-.615.315-.405.51-1.035.51-1.71 0-.675-.195-1.305-.51-1.71-.3-.39-.735-.615-1.215-.615-.48 0-.915-.225-1.215.615zm-2.01 5.94c-1.395 0-2.58-1.035-2.88-2.37H9.24c.03.075.06.15.09.225.12.3.285.585.525.825.3.3.69.525 1.155.525s.855-.225 1.155-.525c.24-.24.405-.525.525-.825.03-.075.06-.15.09-.225h.105c-.3 1.335-1.485 2.37-2.88 2.37z" fill="#FFF"/></svg>
);


export const NAV_ITEMS = [
  { name: 'Dashboard', icon: DashboardIcon },
  { name: 'Marketplace', icon: MarketplaceIcon },
  { name: 'Wallet', icon: WalletIcon },
  { name: 'NFT Studio', icon: NftIcon },
  { name: 'dApp Builder', icon: DAppBuilderIcon },
  { name: 'TV', icon: TvIcon },
  { name: 'Funding', icon: FundingIcon },
  { name: 'Transactions', icon: TransactionsIcon },
  { name: 'Explorer', icon: ExplorerIcon },
  { name: 'Profile', icon: ProfileIcon },
  { name: 'Integrations', icon: IntegrationsIcon },
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

export const MOCK_WALLET_ACCOUNT: WalletAccount = {
    address: '0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B', // A known address for realism
    privateKey: '0x' + 'a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2', // Mock private key
    recoveryPhrase: 'orbit shed puzzle coyote practice liberty hope elegant until decline abandon transfer',
};

// Explorer Mock Data
const getRandomAddress = () => `0x${[...Array(40)].map(() => Math.floor(Math.random() * 16).toString(16)).join('')}`;
const MOCK_MINERS = [
    '0xEA674fdDe714fd979de3EdF0F56AA9716B898ec8', // Ethermine
    '0x829BD824B016326A401d083B33D092293333A830', // F2Pool
    '0x5a0b54d5dc17e0aadc383d2db43b0a0d3e029c4c', // Spark Pool
    '0x00192Fb10dF37c9FB26829eb2CC623cd1BF599E8', // Nanopool
];

export const generateMockExplorerTransactions = (count: number, blockNumber: number): ExplorerTransaction[] => {
    return Array.from({ length: count }, (_, i) => ({
        hash: `0x${[...Array(64)].map(() => Math.floor(Math.random() * 16).toString(16)).join('')}`,
        blockNumber,
        from: getRandomAddress(),
        to: getRandomAddress(),
        value: parseFloat((Math.random() * 5).toFixed(4)),
        gasFee: parseFloat((Math.random() * 0.01).toFixed(6)),
        timestamp: Date.now() - i * 3000 - Math.random() * 1000,
    }));
};

export const MOCK_EXPLORER_TRANSACTIONS: ExplorerTransaction[] = generateMockExplorerTransactions(20, 18000000);

export const generateMockBlocks = (count: number, startBlock: number): ExplorerBlock[] => {
    return Array.from({ length: count }, (_, i) => {
        const txnCount = Math.floor(Math.random() * 200) + 50;
        const gasUsed = Math.floor(Math.random() * 15000000) + 8000000;
        return {
            number: startBlock - i,
            timestamp: Date.now() - i * 12000 - Math.random() * 2000,
            txnCount,
            miner: MOCK_MINERS[Math.floor(Math.random() * MOCK_MINERS.length)],
            gasUsed,
            gasLimit: 30000000,
        };
    });
};

export const MOCK_BLOCKS: ExplorerBlock[] = generateMockBlocks(20, 18000000);

// TV Feature Mock Data
export const MOCK_TV_CHANNELS: TvChannel[] = [
    { id: 'espn', name: 'ESPN', logoUrl: 'https://i.imgur.com/s2JzT3s.png', category: 'Sports' },
    { id: 'hbo', name: 'HBO Max', logoUrl: 'https://i.imgur.com/8Qp4YgT.png', category: 'Movies' },
    { id: 'mtv', name: 'MTV Live', logoUrl: 'https://i.imgur.com/dK1D4z7.png', category: 'Music' },
    { id: 'cnn', name: 'CNN', logoUrl: 'https://i.imgur.com/2p0nOJw.png', category: 'News' },
    { id: 'nbc', name: 'NBC', logoUrl: 'https://i.imgur.com/G5T7y2P.png', category: 'General' },
    { id: 'fox-sports', name: 'Fox Sports 1', logoUrl: 'https://i.imgur.com/O7x1w3E.png', category: 'Sports' },
    { id: 'showtime', name: 'Showtime', logoUrl: 'https://i.imgur.com/1B9Z1hA.png', category: 'Movies' },
];

export const MOCK_TV_PROGRAMS: TvProgram[] = [
    { id: 'p1', channelId: 'espn', title: 'SportsCenter', description: 'The latest sports news and highlights.', startTime: new Date(Date.now() - 30 * 60000), endTime: new Date(Date.now() + 30 * 60000) },
    { id: 'p2', channelId: 'hbo', title: 'Dune: Part Two', description: 'Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.', startTime: new Date(Date.now() - 60 * 60000), endTime: new Date(Date.now() + 90 * 60000) },
    { id: 'p3', channelId: 'mtv', title: 'Top 20 Video Countdown', description: 'The hottest music videos of the week.', startTime: new Date(Date.now() - 15 * 60000), endTime: new Date(Date.now() + 45 * 60000) },
    { id: 'p4', channelId: 'cnn', title: 'The Situation Room', description: 'Breaking news coverage with Wolf Blitzer.', startTime: new Date(Date.now() - 20 * 60000), endTime: new Date(Date.now() + 40 * 60000) },
    { id: 'p5', channelId: 'nbc', title: 'The Tonight Show', description: 'Featuring celebrity guests, comedy sketches, and musical performances.', startTime: new Date(Date.now() - 5 * 60000), endTime: new Date(Date.now() + 55 * 60000) },
    { id: 'p6', channelId: 'fox-sports', title: 'Live: MLB Baseball', description: 'Yankees vs. Red Sox live from Fenway Park.', startTime: new Date(Date.now() - 90 * 60000), endTime: new Date(Date.now() + 90 * 60000) },
    { id: 'p7', channelId: 'showtime', title: 'Billions Season Premiere', description: 'The high-stakes world of New York finance.', startTime: new Date(Date.now() - 10 * 60000), endTime: new Date(Date.now() + 50 * 60000) },
];

export const MOCK_SUBSCRIPTION_PLANS: SubscriptionPlan[] = [
    { id: 'basic', name: 'Basic Tier', priceUsd: 14.99, priceEth: 0.005, features: ['Access to 50+ channels', '720p HD Streaming', 'Watch on 1 screen'] },
    { id: 'premium', name: 'Premium Tier', priceUsd: 29.99, priceEth: 0.01, features: ['Access to 150+ channels', '4K UHD Streaming', 'Watch on 4 screens', 'Includes Sports & Movies pack'] },
    { id: 'ultimate', name: 'Ultimate Crypto', priceUsd: 49.99, priceEth: 0.015, features: ['Everything in Premium', 'Exclusive NFT drops', 'Ad-free experience', 'Early access to new content'] },
];

export const MOCK_USER_PROFILE: UserProfile = {
    id: 'user_alex_ryder',
    name: 'Alex Ryder',
    username: 'alex_ryder_quantum',
    email: 'alex.ryder@example.com',
    profilePictureUrl: 'https://picsum.photos/seed/user/200/200',
};

export const MOCK_INTEGRATIONS: Integration[] = [
    { id: 'uniswap', name: 'Uniswap', category: 'DeFi', description: 'Automate token swaps and liquidity provision based on market signals.', logoUrl: 'https://i.imgur.com/39R2H8V.png' },
    { id: 'aave', name: 'Aave', category: 'DeFi', description: 'Manage your lending and borrowing positions automatically.', logoUrl: 'https://i.imgur.com/Z4s_1.png' },
    { id: 'chainlink', name: 'Chainlink', category: 'Data', description: 'Pull in real-world data feeds to trigger on-chain actions.', logoUrl: 'https://i.imgur.com/bAm8f6A.png' },
    { id: 'shopify', name: 'Shopify', category: 'E-commerce', description: 'Accept crypto payments in your store and sync inventory.', logoUrl: 'https://i.imgur.com/Jd38Y7B.png' },
    { id: 'twitter', name: 'Twitter / X', category: 'Social', description: 'Post transaction alerts or market updates to your feed.', logoUrl: 'https://i.imgur.com/e5a2v2E.png' },
    { id: 'thegraph', name: 'The Graph', category: 'Data', description: 'Index and query blockchain data for advanced analytics.', logoUrl: 'https://i.imgur.com/gDN6XH9.png' },
    { id: 'compound', name: 'Compound', category: 'DeFi', description: 'Optimize your supplied assets to earn the best interest rates.', logoUrl: 'https://i.imgur.com/zAtiFf9.png' },
    { id: 'magento', name: 'Magento', category: 'E-commerce', description: 'Integrate Web3 loyalty programs into your e-commerce platform.', logoUrl: 'https://i.imgur.com/HnRaCqU.png' },
];

const generateSparkline = () => {
    let trend = Math.random() > 0.5 ? 1 : -1;
    let base = 50 + Math.random() * 40;
    return Array.from({ length: 20 }, () => {
        base += (Math.random() - 0.45) * 5 * trend;
        base = Math.max(10, Math.min(90, base));
        return base;
    });
};

export const MOCK_MARKET_DATA: MarketData[] = [
    { id: 'btc', name: 'Bitcoin', symbol: 'BTC', price: 61234.56, change24h: 2.35, icon: BtcIcon, sparkline: generateSparkline() },
    { id: 'eth', name: 'Ethereum', symbol: 'ETH', price: 3012.34, change24h: -1.12, icon: EthIcon, sparkline: generateSparkline() },
    { id: 'sol', name: 'Solana', symbol: 'SOL', price: 135.78, change24h: 5.78, icon: SolIcon, sparkline: generateSparkline() },
    { id: 'xrp', name: 'XRP', symbol: 'XRP', price: 0.4789, change24h: -0.55, icon: XrpIcon, sparkline: generateSparkline() },
    { id: 'doge', name: 'Dogecoin', symbol: 'DOGE', price: 0.1234, change24h: 8.91, icon: DogeIcon, sparkline: generateSparkline() },
];