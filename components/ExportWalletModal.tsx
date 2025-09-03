
import React, { useState } from 'react';
import Card from './Card';
import { WalletAccount } from '../types';
import { ClipboardIcon } from '../constants';

interface ExportWalletModalProps {
  onClose: () => void;
  wallet: WalletAccount;
}

const XIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);

const EyeIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.432 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

const SecretField: React.FC<{ label: string; value: string; }> = ({ label, value }) => {
    const [isRevealed, setIsRevealed] = useState(false);
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(value);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
    };

    return (
        <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">{label}</label>
            <div className="relative">
                <div className={`w-full p-3 bg-gray-900 border border-gray-700 rounded-lg text-white font-mono text-sm break-words ${!isRevealed ? 'blur-sm' : ''}`}>
                    {value}
                </div>
                {!isRevealed && (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <button onClick={() => setIsRevealed(true)} className="flex items-center gap-2 px-4 py-2 bg-gray-600/80 hover:bg-gray-500/80 rounded-lg backdrop-blur-sm">
                            <EyeIcon /> Click to Reveal
                        </button>
                    </div>
                )}
                 <button onClick={handleCopy} className="absolute top-2 right-2 p-1.5 text-gray-400 hover:text-white bg-gray-600 rounded-md">
                    <ClipboardIcon className="w-5 h-5"/>
                </button>
            </div>
            {isCopied && <p className="text-xs text-green-400 mt-1 text-right">Copied!</p>}
        </div>
    );
};


const ExportWalletModal: React.FC<ExportWalletModalProps> = ({ onClose, wallet }) => {
    return (
        <div role="dialog" aria-modal="true" className="fixed inset-0 bg-gray-900 bg-opacity-80 flex items-center justify-center z-50 animate-[fade-in_0.2s_ease-out]" onClick={onClose}>
            <div className="relative w-full max-w-lg mx-4 animate-[slide-up_0.3s_ease-out]" onClick={(e) => e.stopPropagation()}>
                <Card title="Export Wallet">
                     <button onClick={onClose} className="absolute top-6 right-6 text-gray-400 hover:text-white" aria-label="Close modal"><XIcon /></button>
                     <div className="p-4 bg-red-900/50 border border-red-500/50 text-red-300 rounded-lg mt-2">
                        <p className="font-bold text-red-200">Security Warning</p>
                        <p className="text-sm">Never share your recovery phrase or private key with anyone. Anyone with this information can take your assets.</p>
                     </div>
                     <div className="space-y-6 mt-6">
                        <SecretField label="Recovery Phrase" value={wallet.recoveryPhrase} />
                        <SecretField label="Private Key" value={wallet.privateKey} />
                     </div>
                     <div className="mt-6">
                         <button onClick={onClose} className="w-full font-semibold px-4 py-2.5 rounded-lg bg-gray-600 text-white hover:bg-gray-500 transition-colors">
                            Close
                        </button>
                     </div>
                </Card>
            </div>
        </div>
    );
};

export default ExportWalletModal;
