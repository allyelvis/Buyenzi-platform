import React, { useState } from 'react';
import Card from './Card';
import { MOCK_ASSETS } from '../constants';
import { ClipboardIcon, UsdIcon, BtcIcon, EthIcon } from '../constants';

const fundingOptions = {
    BTC: { address: 'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh', icon: BtcIcon },
    ETH: { address: '0x1234567890123456789012345678901234567890', icon: EthIcon },
    USD: { account: '123456789', routing: '987654321', icon: UsdIcon }
};

const Funding: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'deposit' | 'withdraw'>('deposit');

    const TabButton: React.FC<{ label: 'deposit' | 'withdraw' }> = ({ label }) => (
        <button
            onClick={() => setActiveTab(label)}
            className={`w-full py-3 text-center font-bold text-lg capitalize transition-colors duration-200 rounded-t-lg
                ${activeTab === label 
                    ? 'bg-gray-800 text-brand-primary border-b-2 border-brand-primary' 
                    : 'bg-gray-900 text-gray-400 hover:bg-gray-800/50'
                }`}
        >
            {label}
        </button>
    );

    return (
        <div className="p-4 md:p-8 space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-white">Funding</h1>
                <p className="text-gray-400">Deposit or withdraw assets to and from your account.</p>
            </div>
            
            <div className="max-w-3xl mx-auto">
                <div className="flex">
                    <TabButton label="deposit" />
                    <TabButton label="withdraw" />
                </div>
                <Card className="rounded-t-none">
                    {activeTab === 'deposit' ? <DepositContent /> : <WithdrawContent />}
                </Card>
            </div>
        </div>
    );
};

const DepositContent: React.FC = () => {
    const [selectedAsset, setSelectedAsset] = useState('BTC');
    const [copiedAddress, setCopiedAddress] = useState('');
    const assetData = fundingOptions[selectedAsset as keyof typeof fundingOptions];

    const handleCopy = (address: string) => {
        navigator.clipboard.writeText(address);
        setCopiedAddress(address);
        setTimeout(() => setCopiedAddress(''), 2000);
    };

    return (
        <div className="space-y-6">
            <div>
                <label htmlFor="deposit-asset" className="block text-sm font-medium text-gray-300 mb-1">Select asset to deposit</label>
                <select
                    id="deposit-asset"
                    value={selectedAsset}
                    onChange={(e) => setSelectedAsset(e.target.value)}
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-primary"
                >
                    <option value="BTC">Bitcoin (BTC)</option>
                    <option value="ETH">Ethereum (ETH)</option>
                    <option value="USD">US Dollar (USD)</option>
                </select>
            </div>

            {selectedAsset !== 'USD' ? (
                 <div className="text-center space-y-4 p-4 bg-gray-900 rounded-lg">
                    <p className="text-gray-300">Send {selectedAsset} to the address below:</p>
                    <div className="bg-white p-2 inline-block rounded-md">
                        <img 
                            src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${(assetData as any).address}`} 
                            alt={`${selectedAsset} deposit QR code`}
                            width="150"
                            height="150"
                        />
                    </div>
                    <div className="relative">
                        <input
                            type="text"
                            readOnly
                            value={(assetData as any).address}
                            className="w-full font-mono text-sm bg-gray-700 border border-gray-600 rounded-lg text-gray-300 px-3 py-2 pr-12 text-center"
                        />
                        <button onClick={() => handleCopy((assetData as any).address)} className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 text-gray-400 hover:text-white bg-gray-600 rounded-md">
                            <ClipboardIcon className="w-5 h-5"/>
                        </button>
                    </div>
                     {copiedAddress === (assetData as any).address && <p className="text-sm text-green-400">Address copied to clipboard!</p>}
                </div>
            ) : (
                <div className="p-4 bg-gray-900 rounded-lg space-y-3 text-gray-300">
                    <p className="font-bold text-white">Bank Transfer Details</p>
                    <div className="flex justify-between border-b border-gray-700 pb-2"><span>Account Number:</span> <span className="font-mono">{(assetData as any).account}</span></div>
                    <div className="flex justify-between"><span>Routing Number:</span> <span className="font-mono">{(assetData as any).routing}</span></div>
                </div>
            )}
             <p className="text-xs text-center text-gray-500">Only send {selectedAsset} to this address. Sending any other asset may result in the permanent loss of your deposit.</p>
        </div>
    );
};

const WithdrawContent: React.FC = () => {
    const [selectedAsset, setSelectedAsset] = useState('BTC');
    const balance = MOCK_ASSETS.find(a => a.symbol === selectedAsset)?.balance || 0;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Withdrawal initiated (mock).');
    };
    
    return (
        <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="withdraw-asset" className="block text-sm font-medium text-gray-300 mb-1">Select asset to withdraw</label>
                <select
                    id="withdraw-asset"
                    value={selectedAsset}
                    onChange={(e) => setSelectedAsset(e.target.value)}
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-primary"
                >
                    {MOCK_ASSETS.map(asset => <option key={asset.id} value={asset.symbol}>{asset.name} ({asset.symbol})</option>)}
                </select>
            </div>
            
             <div>
                <div className="flex justify-between items-center">
                    <label htmlFor="amount" className="block text-sm font-medium text-gray-300 mb-1">Amount</label>
                    <span className="text-xs text-gray-400">Balance: {balance.toLocaleString()} {selectedAsset}</span>
                </div>
                <input type="number" id="amount" placeholder="0.00" className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-brand-primary" step="any" required />
            </div>

            <div>
                 <label htmlFor="recipient-address" className="block text-sm font-medium text-gray-300 mb-1">
                    {selectedAsset === 'USD' ? 'Bank Account Number' : `Recipient ${selectedAsset} Address`}
                </label>
                <input type="text" id="recipient-address" placeholder={selectedAsset === 'USD' ? 'Enter bank account number' : 'Enter recipient address'} className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-brand-primary" required />
            </div>

            <div className="pt-2">
                <button type="submit" className="w-full font-semibold text-gray-900 bg-brand-primary hover:bg-brand-secondary py-2.5 rounded-lg transition-colors duration-200">
                    Review Withdrawal
                </button>
            </div>
        </form>
    );
};

export default Funding;
