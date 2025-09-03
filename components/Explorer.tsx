import React, { useState } from 'react';
import Card from './Card';
import { SearchIcon, MOCK_BLOCKS, MOCK_EXPLORER_TRANSACTIONS } from '../constants';
import { ExplorerBlock, ExplorerTransaction, ExplorerAddress } from '../types';

const mockSearch = (query: string): { type: 'tx' | 'address' | 'block' | 'not_found', data: any } => {
    const trimmedQuery = query.trim();

    if (trimmedQuery.startsWith('0x') && trimmedQuery.length === 66) {
        const tx = MOCK_EXPLORER_TRANSACTIONS[0];
        return { type: 'tx', data: { ...tx, hash: trimmedQuery, timestamp: Date.now() } };
    }
    
    if (trimmedQuery.startsWith('0x') && trimmedQuery.length === 42) {
        const addressData: ExplorerAddress = {
            address: trimmedQuery,
            balance: parseFloat((Math.random() * 100).toFixed(4)),
            totalTx: Math.floor(Math.random() * 1000),
        };
        return { type: 'address', data: addressData };
    }

    if (!isNaN(Number(trimmedQuery)) && Number(trimmedQuery) > 0) {
        const block = MOCK_BLOCKS[0];
        return { type: 'block', data: { ...block, number: Number(trimmedQuery), timestamp: Date.now() } };
    }
    
    return { type: 'not_found', data: null };
};

const truncate = (str: string, len: number) => {
    if (str.length <= len) return str;
    const separator = '...';
    const charsToShow = len - separator.length;
    const frontChars = Math.ceil(charsToShow / 2);
    const backChars = Math.floor(charsToShow / 2);
    return str.substring(0, frontChars) + separator + str.substring(str.length - backChars);
};

const timeAgo = (timestamp: number) => {
    const seconds = Math.floor((Date.now() - timestamp) / 1000);
    if (seconds < 5) return "just now";
    let interval = seconds / 31536000;
    if (interval > 1) return Math.floor(interval) + " years ago";
    interval = seconds / 2592000;
    if (interval > 1) return Math.floor(interval) + " months ago";
    interval = seconds / 86400;
    if (interval > 1) return Math.floor(interval) + " days ago";
    interval = seconds / 3600;
    if (interval > 1) return Math.floor(interval) + " hours ago";
    interval = seconds / 60;
    if (interval > 1) return Math.floor(interval) + " minutes ago";
    return Math.floor(seconds) + " seconds ago";
};

const DetailRow: React.FC<{ label: string; children: React.ReactNode; isMono?: boolean }> = ({ label, children, isMono = false }) => (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-2 py-3 border-b border-gray-700 last:border-b-0 text-sm">
        <span className="text-gray-400 md:col-span-1">{label}:</span>
        <div className={`md:col-span-3 text-white break-words ${isMono ? 'font-mono' : ''}`}>{children}</div>
    </div>
);

const TransactionResult: React.FC<{ tx: ExplorerTransaction }> = ({ tx }) => (
    <Card title="Transaction Details">
        <DetailRow label="Transaction Hash" isMono>{tx.hash}</DetailRow>
        <DetailRow label="Status"><span className="text-green-400 bg-green-500/10 px-2 py-1 rounded-full text-xs font-bold">Success</span></DetailRow>
        <DetailRow label="Block">{tx.blockNumber.toLocaleString()}</DetailRow>
        <DetailRow label="Timestamp">{timeAgo(tx.timestamp)} ({new Date(tx.timestamp).toUTCString()})</DetailRow>
        <DetailRow label="From" isMono>{tx.from}</DetailRow>
        <DetailRow label="To" isMono>{tx.to}</DetailRow>
        <DetailRow label="Value">{tx.value} ETH</DetailRow>
        <DetailRow label="Gas Fee">{tx.gasFee} ETH</DetailRow>
    </Card>
);

const AddressResult: React.FC<{ address: ExplorerAddress }> = ({ address }) => (
    <Card title="Address Details">
        <DetailRow label="Address" isMono>{address.address}</DetailRow>
        <DetailRow label="Balance">{address.balance} ETH</DetailRow>
        <DetailRow label="Total Transactions">{address.totalTx.toLocaleString()}</DetailRow>
    </Card>
);

const BlockResult: React.FC<{ block: ExplorerBlock }> = ({ block }) => (
    <Card title="Block Details">
        <DetailRow label="Block Height">{block.number.toLocaleString()}</DetailRow>
        <DetailRow label="Timestamp">{timeAgo(block.timestamp)} ({new Date(block.timestamp).toUTCString()})</DetailRow>
        <DetailRow label="Transactions">{block.txnCount} transactions in this block</DetailRow>
        <DetailRow label="Mined by" isMono>{block.miner}</DetailRow>
        <DetailRow label="Gas Used">{block.gasUsed.toLocaleString()} ({((block.gasUsed / block.gasLimit) * 100).toFixed(2)}%)</DetailRow>
        <DetailRow label="Gas Limit">{block.gasLimit.toLocaleString()}</DetailRow>
    </Card>
);

const NotFoundResult: React.FC<{ query: string }> = ({ query }) => (
     <Card>
        <div className="text-center py-10">
            <h3 className="text-xl font-bold text-red-400">Search Not Found</h3>
            <p className="text-gray-400 mt-2">Sorry, we couldn't find any results for your search:</p>
            <p className="font-mono bg-gray-900 p-2 rounded-md mt-2 inline-block break-all">{query}</p>
        </div>
     </Card>
);

const Explorer: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResult, setSearchResult] = useState<any | null>(null);
    const [searchType, setSearchType] = useState<string | null>(null);
    const [isSearching, setIsSearching] = useState(false);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (!searchQuery) return;
        
        setIsSearching(true);
        setTimeout(() => {
            const result = mockSearch(searchQuery);
            setSearchResult(result.data);
            setSearchType(result.type);
            setIsSearching(false);
        }, 500);
    };

    const clearSearch = () => {
        setSearchQuery('');
        setSearchResult(null);
        setSearchType(null);
    };
    
    const renderSearchResult = () => (
        <div className="space-y-4 animate-[fade-in_0.3s_ease-out]">
            <style>{`
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
            <button onClick={clearSearch} className="font-semibold text-brand-primary hover:underline transition-colors">← Back to Explorer</button>
            {searchType === 'tx' && <TransactionResult tx={searchResult} />}
            {searchType === 'address' && <AddressResult address={searchResult} />}
            {searchType === 'block' && <BlockResult block={searchResult} />}
            {searchType === 'not_found' && <NotFoundResult query={searchQuery} />}
        </div>
    );

    const renderMainExplorer = () => (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card title="Latest Blocks" className="h-full">
                <div className="space-y-3">
                    {MOCK_BLOCKS.slice(0, 6).map(block => (
                        <div key={block.number} className="flex justify-between items-center text-sm p-2 rounded-md hover:bg-gray-700/50">
                            <div>
                                <p className="font-bold text-brand-secondary">{block.number.toLocaleString()}</p>
                                <p className="text-xs text-gray-400">{timeAgo(block.timestamp)}</p>
                            </div>
                            <div>
                                <p className="text-white">Miner: <span className="font-mono text-gray-300">{truncate(block.miner, 12)}</span></p>
                                <p className="text-gray-400">{block.txnCount} txns</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Card>
            <Card title="Latest Transactions" className="h-full">
                 <div className="space-y-3">
                    {MOCK_EXPLORER_TRANSACTIONS.slice(0, 6).map(tx => (
                        <div key={tx.hash} className="flex justify-between items-center text-sm p-2 rounded-md hover:bg-gray-700/50">
                            <div>
                                <p className="font-mono font-bold text-brand-secondary">{truncate(tx.hash, 12)}</p>
                                <p className="text-xs text-gray-400">{timeAgo(tx.timestamp)}</p>
                            </div>
                            <div className="text-right">
                                <p className="text-white font-mono">From: {truncate(tx.from, 12)}</p>
                                <p className="text-white font-mono">To: {truncate(tx.to, 12)}</p>
                                <span className="font-bold text-white bg-gray-600 px-2 py-0.5 rounded-md text-xs mt-1 inline-block">{tx.value} ETH</span>
                            </div>
                        </div>
                    ))}
                </div>
            </Card>
        </div>
    );
    
    return (
        <div className="p-4 md:p-8 space-y-8">
            <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
                <h1 className="text-2xl font-bold text-white">Ethereum Mainnet Explorer</h1>
                <form onSubmit={handleSearch} className="mt-4 flex flex-col sm:flex-row gap-2">
                     <div className="relative flex-grow">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <SearchIcon className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search by Address / Txn Hash / Block"
                            className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-brand-primary"
                        />
                    </div>
                    <button type="submit" disabled={isSearching} className="px-6 py-3 rounded-lg bg-brand-primary text-gray-900 hover:bg-brand-secondary transition-colors font-semibold disabled:bg-gray-600 disabled:cursor-not-allowed">
                        {isSearching ? "Searching..." : "Search"}
                    </button>
                </form>
            </div>

            {isSearching ? (
                <div className="flex items-center justify-center gap-3 text-gray-400 py-20">
                    <div className="w-8 h-8 border-4 border-dashed rounded-full animate-spin border-brand-primary"></div>
                    <span>Searching the blockchain...</span>
                </div>
            ) : searchResult ? renderSearchResult() : renderMainExplorer()}
        </div>
    );
};

export default Explorer;
