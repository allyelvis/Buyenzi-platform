import React, { useState } from 'react';
import { GoogleGenAI } from '@google/genai';
import Card from './Card';
import { MOCK_ASSETS, MOCK_WALLET_ACCOUNT, CreateWalletIcon, ImportWalletIcon, SendIcon, ReceiveIcon, SwapIcon, SparklesIcon, SearchIcon, ExportWalletIcon, LockIcon, WalletIcon } from '../constants';
import WalletChart from './WalletChart';
import { WalletAsset, WalletAccount } from '../types';
import CreateWalletModal from './CreateWalletModal';
import ImportWalletModal from './ImportWalletModal';
import ExportWalletModal from './ExportWalletModal';


const ActionButton: React.FC<{ icon: React.ReactNode, label: string }> = ({ icon, label }) => (
    <button className="flex flex-col items-center justify-center gap-2 w-full bg-gray-700 p-4 rounded-lg hover:bg-brand-primary hover:text-gray-900 transition-all duration-200 group">
        <div className="text-brand-primary group-hover:text-gray-900">{icon}</div>
        <span className="font-semibold text-white group-hover:text-gray-900">{label}</span>
    </button>
);

const AssetRow: React.FC<{ asset: WalletAsset }> = ({ asset }) => (
    <div className="flex items-center justify-between py-3 border-b border-gray-700 last:border-b-0 hover:bg-gray-700/50 rounded-lg transition-colors duration-200 px-2 -mx-2">
        <div className="flex items-center gap-4">
            <asset.icon className="w-10 h-10" />
            <div>
                <p className="font-bold text-white">{asset.name}</p>
                <p className="text-sm text-gray-400">{asset.balance.toLocaleString()} {asset.symbol}</p>
            </div>
        </div>
        <div className="text-right">
            <p className="font-semibold text-white">${asset.usdValue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
            <p className="text-sm text-gray-400">USD</p>
        </div>
    </div>
);

const WalletLockedView: React.FC<{ onCreate: () => void; onImport: () => void; }> = ({ onCreate, onImport }) => (
    <div className="p-4 md:p-8 flex items-center justify-center h-full">
        <Card className="max-w-md w-full text-center">
            <WalletIcon className="w-16 h-16 mx-auto text-brand-primary" />
            <h2 className="text-2xl font-bold text-white mt-4">Your Digital Wallet</h2>
            <p className="text-gray-400 mt-2 mb-6">Create a new wallet or import an existing one to manage your assets securely.</p>
            <div className="space-y-4">
                <button onClick={onCreate} className="w-full flex items-center justify-center gap-3 font-semibold text-gray-900 bg-brand-primary hover:bg-brand-secondary py-3 rounded-lg transition-colors">
                    <CreateWalletIcon className="w-6 h-6" />
                    Create New Wallet
                </button>
                <button onClick={onImport} className="w-full flex items-center justify-center gap-3 font-semibold bg-gray-700 hover:bg-gray-600 py-3 rounded-lg transition-colors">
                    <ImportWalletIcon className="w-6 h-6" />
                    Import Existing Wallet
                </button>
            </div>
        </Card>
    </div>
);

const WalletUnlockedView: React.FC<{ wallet: WalletAccount; onExport: () => void; onLock: () => void; }> = ({ wallet, onExport, onLock }) => {
    const totalBalance = MOCK_ASSETS.reduce((acc, asset) => acc + asset.usdValue, 0);
    const [isLoading, setIsLoading] = useState(false);
    const [insight, setInsight] = useState('');
    const [error, setError] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    const handleGenerateInsight = async () => {
        setIsLoading(true);
        setInsight('');
        setError('');
        try {
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
            const assetSummary = MOCK_ASSETS.map(a => `${a.name} ($${a.usdValue.toLocaleString()})`).join(', ');
            const prompt = `My portfolio consists of: ${assetSummary}. My total balance is $${totalBalance.toLocaleString()}. Provide a brief, one-paragraph market sentiment analysis for a retail investor. Focus on my top 2 holdings. Keep it concise, informative, and encouraging.`;

            const response = await ai.models.generateContent({
              model: 'gemini-2.5-flash',
              contents: prompt,
            });
            
            setInsight(response.text);

        } catch (err) {
            console.error("Gemini API error:", err);
            setError("Sorry, I couldn't generate an insight right now. Please try again later.");
        } finally {
            setIsLoading(false);
        }
    };

    const filteredAssets = MOCK_ASSETS.filter(asset => 
        asset.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        asset.symbol.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="p-4 md:p-8 space-y-8">
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-white">My Wallet</h1>
                    <p className="text-gray-400 font-mono text-sm break-all">Active Address: {wallet.address}</p>
                </div>
                 <div className="text-left sm:text-right">
                    <p className="text-gray-400 text-sm">Total Balance</p>
                    <p className="text-4xl font-bold text-white">${totalBalance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <ActionButton icon={<SendIcon />} label="Send" />
                <ActionButton icon={<ReceiveIcon />} label="Receive" />
                <ActionButton icon={<SwapIcon />} label="Swap" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                <Card title="My Assets" className="lg:col-span-3">
                    <div className="relative mb-4">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <SearchIcon className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search assets..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-brand-primary"
                        />
                    </div>
                    <div className="flow-root max-h-[350px] overflow-y-auto pr-2">
                        <div className="-my-3 divide-y divide-gray-700">
                            {filteredAssets.length > 0 ? (
                                filteredAssets.map(asset => <AssetRow key={asset.id} asset={asset} />)
                            ) : (
                                <p className="text-center text-gray-400 py-8">No assets found.</p>
                            )}
                        </div>
                    </div>
                </Card>
                <div className="lg:col-span-2 space-y-8">
                    <Card title="Wallet Settings">
                        <div className="flex gap-4">
                             <button onClick={onExport} className="w-full flex items-center justify-center gap-2 text-sm font-semibold bg-gray-700 hover:bg-gray-600 py-2.5 rounded-lg transition-colors">
                                <ExportWalletIcon/> Export Wallet
                            </button>
                             <button onClick={onLock} className="w-full flex items-center justify-center gap-2 text-sm font-semibold text-red-400 bg-red-500/10 hover:bg-red-500/20 py-2.5 rounded-lg transition-colors">
                                <LockIcon/> Lock Wallet
                            </button>
                        </div>
                    </Card>
                    <Card title="Asset Allocation">
                        <WalletChart data={MOCK_ASSETS} />
                    </Card>
                    <Card title="AI Portfolio Insight">
                        <div className="space-y-4">
                            {!insight && !isLoading && !error && (
                                <p className="text-gray-400 text-sm">Click the button below to generate an AI-powered analysis of your current portfolio holdings.</p>
                            )}
                            {isLoading && (
                                <div className="flex items-center gap-3 text-gray-400">
                                    <div className="w-5 h-5 border-2 border-dashed rounded-full animate-spin border-brand-primary"></div>
                                    <span>Generating your analysis...</span>
                                </div>
                            )}
                            {error && <p className="text-red-400 text-sm">{error}</p>}
                            {insight && <p className="text-gray-200 whitespace-pre-wrap text-sm">{insight}</p>}

                            <button
                                onClick={handleGenerateInsight}
                                disabled={isLoading}
                                className="w-full flex items-center justify-center gap-2 font-semibold text-gray-900 bg-brand-primary hover:bg-brand-secondary py-2.5 rounded-lg transition-colors duration-200 disabled:bg-gray-600 disabled:cursor-not-allowed"
                            >
                                <SparklesIcon className="w-5 h-5" />
                                {isLoading ? "Analyzing..." : "Generate Insight"}
                            </button>
                             <p className="text-xs text-center text-gray-500">Powered by Gemini</p>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
};

const Wallet: React.FC = () => {
    const [activeWallet, setActiveWallet] = useState<WalletAccount | null>(null);
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [isImportModalOpen, setIsImportModalOpen] = useState(false);
    const [isExportModalOpen, setIsExportModalOpen] = useState(false);

    const handleWalletCreate = (wallet: WalletAccount) => {
        setActiveWallet(wallet);
        setIsCreateModalOpen(false);
    };

    const handleWalletImport = (wallet: WalletAccount) => {
        setActiveWallet(wallet);
        setIsImportModalOpen(false);
    };

    const handleLockWallet = () => {
        setActiveWallet(null);
    };

    return (
        <>
            {!activeWallet ? (
                <WalletLockedView 
                    onCreate={() => setIsCreateModalOpen(true)}
                    onImport={() => setIsImportModalOpen(true)}
                />
            ) : (
                <WalletUnlockedView 
                    wallet={activeWallet}
                    onExport={() => setIsExportModalOpen(true)}
                    onLock={handleLockWallet}
                />
            )}

            {isCreateModalOpen && (
                <CreateWalletModal
                    onClose={() => setIsCreateModalOpen(false)}
                    onWalletCreated={handleWalletCreate}
                />
            )}
            {isImportModalOpen && (
                <ImportWalletModal
                    onClose={() => setIsImportModalOpen(false)}
                    onWalletImported={handleWalletImport}
                />
            )}
            {activeWallet && isExportModalOpen && (
                <ExportWalletModal
                    wallet={activeWallet}
                    onClose={() => setIsExportModalOpen(false)}
                />
            )}
        </>
    );
};

export default Wallet;