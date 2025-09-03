
import React, { useState, useRef } from 'react';
import Card from './Card';
import { WalletAccount } from '../types';
import { MOCK_WALLET_ACCOUNT } from '../constants';

interface ImportWalletModalProps {
  onClose: () => void;
  onWalletImported: (wallet: WalletAccount) => void;
}

const XIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);

const ImportWalletModal: React.FC<ImportWalletModalProps> = ({ onClose, onWalletImported }) => {
    const [activeTab, setActiveTab] = useState<'phrase' | 'json'>('phrase');
    const [phrase, setPhrase] = useState('');
    const [jsonPassword, setJsonPassword] = useState('');
    const [fileName, setFileName] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleImport = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate network delay and validation
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        setIsLoading(false);
        alert('Wallet imported successfully!');
        onWalletImported(MOCK_WALLET_ACCOUNT);
    };
    
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFileName(e.target.files[0].name);
        }
    };

    const TabButton: React.FC<{ label: 'phrase' | 'json', title: string }> = ({ label, title }) => (
        <button
            onClick={() => setActiveTab(label)}
            className={`w-full py-3 text-center font-bold text-lg capitalize transition-colors duration-200 rounded-t-lg
                ${activeTab === label 
                    ? 'bg-gray-800 text-brand-primary border-b-2 border-brand-primary' 
                    : 'bg-gray-900 text-gray-400 hover:bg-gray-800/50'
                }`}
        >
            {title}
        </button>
    );

    return (
        <div role="dialog" aria-modal="true" className="fixed inset-0 bg-gray-900 bg-opacity-80 flex items-center justify-center z-50 animate-[fade-in_0.2s_ease-out]" onClick={onClose}>
            <div className="relative w-full max-w-lg mx-4 animate-[slide-up_0.3s_ease-out]" onClick={(e) => e.stopPropagation()}>
                <div className="flex">
                    <TabButton label="phrase" title="Recovery Phrase" />
                    <TabButton label="json" title="JSON File" />
                </div>
                <Card className="rounded-t-none">
                     <button onClick={onClose} className="absolute top-6 right-6 text-gray-400 hover:text-white" aria-label="Close modal"><XIcon /></button>
                     <form onSubmit={handleImport} className="space-y-4">
                        {activeTab === 'phrase' && (
                            <div>
                                <label htmlFor="phrase" className="block text-sm font-medium text-gray-300 mb-1">Enter your 12 or 24-word recovery phrase</label>
                                <textarea
                                    id="phrase"
                                    rows={4}
                                    value={phrase}
                                    onChange={(e) => setPhrase(e.target.value)}
                                    placeholder="word1 word2 word3..."
                                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-brand-primary"
                                />
                            </div>
                        )}
                        {activeTab === 'json' && (
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-1">Select Keystore JSON File</label>
                                    <input type="file" ref={fileInputRef} onChange={handleFileChange} accept=".json" className="hidden" />
                                    <button type="button" onClick={() => fileInputRef.current?.click()} className="w-full text-left px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none">
                                        {fileName || 'Choose a file...'}
                                    </button>
                                </div>
                                <div>
                                    <label htmlFor="json-password">Password</label>
                                    <input
                                        type="password"
                                        id="json-password"
                                        value={jsonPassword}
                                        onChange={(e) => setJsonPassword(e.target.value)}
                                        placeholder="Enter password to unlock"
                                        className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-brand-primary"
                                    />
                                </div>
                            </div>
                        )}
                         <div className="pt-2">
                            <button type="submit" disabled={isLoading} className="w-full font-semibold px-4 py-2.5 rounded-lg bg-brand-primary text-gray-900 hover:bg-brand-secondary transition-colors disabled:bg-gray-600 disabled:cursor-not-allowed">
                                {isLoading ? 'Importing...' : 'Import Wallet'}
                            </button>
                        </div>
                     </form>
                </Card>
            </div>
        </div>
    );
};

export default ImportWalletModal;
