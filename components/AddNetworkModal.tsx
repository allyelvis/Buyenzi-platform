
import React, { useState } from 'react';
import { Network } from '../types';
import Card from './Card';

interface AddNetworkModalProps {
  onClose: () => void;
  onAddNetwork: (network: Network) => void;
}

const XIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);

const AddNetworkModal: React.FC<AddNetworkModalProps> = ({ onClose, onAddNetwork }) => {
    const [name, setName] = useState('');
    const [rpcUrl, setRpcUrl] = useState('');
    const [chainId, setChainId] = useState('');
    const [currencySymbol, setCurrencySymbol] = useState('');
    const [errors, setErrors] = useState<Record<string, string>>({});

    const validateForm = () => {
        const newErrors: Record<string, string> = {};
        if (!name.trim()) newErrors.name = "Network name is required.";
        if (!rpcUrl.trim()) {
            newErrors.rpcUrl = "RPC URL is required.";
        } else {
            try {
                new URL(rpcUrl);
            } catch (_) {
                newErrors.rpcUrl = "Invalid URL format.";
            }
        }
        if (!chainId.trim()) {
            newErrors.chainId = "Chain ID is required.";
        } else if (!/^\d+$/.test(chainId)) {
            newErrors.chainId = "Chain ID must be a number.";
        }
        if (!currencySymbol.trim()) newErrors.currencySymbol = "Currency symbol is required.";
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            const newNetwork: Network = {
                id: `custom_${Date.now()}`,
                name,
                rpcUrl,
                chainId: parseInt(chainId, 10),
                currencySymbol,
                isCustom: true,
            };
            onAddNetwork(newNetwork);
            onClose();
        }
    };
    
    const FormField = ({ label, id, value, onChange, error, placeholder, type = "text" }: any) => (
        <div>
            <label htmlFor={id} className="block text-sm font-medium text-gray-300 mb-1">{label}</label>
            <input
                type={type}
                id={id}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={`w-full px-3 py-2 bg-gray-700 border ${error ? 'border-red-500' : 'border-gray-600'} rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-brand-primary`}
            />
            {error && <p className="text-red-400 text-xs mt-1">{error}</p>}
        </div>
    );

    return (
        <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="add-network-modal-title"
            className="fixed inset-0 bg-gray-900 bg-opacity-80 flex items-center justify-center z-50"
            onClick={onClose}
        >
            <div
                className="relative w-full max-w-lg mx-4"
                onClick={(e) => e.stopPropagation()}
            >
                <Card titleClassName="pr-10" title="Add Custom Network">
                    <button
                        onClick={onClose}
                        className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors"
                        aria-label="Close modal"
                    >
                        <XIcon className="w-6 h-6" />
                    </button>
                    <form onSubmit={handleSubmit} className="space-y-4 mt-2">
                        <FormField label="Network Name" id="name" value={name} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)} error={errors.name} placeholder="e.g., My Private Testnet" />
                        <FormField label="RPC URL" id="rpcUrl" value={rpcUrl} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRpcUrl(e.target.value)} error={errors.rpcUrl} placeholder="e.g., http://localhost:8545" />
                        <FormField label="Chain ID" id="chainId" value={chainId} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setChainId(e.target.value)} error={errors.chainId} placeholder="e.g., 1337" type="number" />
                        <FormField label="Currency Symbol" id="currencySymbol" value={currencySymbol} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCurrencySymbol(e.target.value)} error={errors.currencySymbol} placeholder="e.g., ETH" />

                        <div className="flex justify-end gap-4 pt-4">
                            <button type="button" onClick={onClose} className="px-4 py-2 rounded-lg bg-gray-600 text-white hover:bg-gray-500 transition-colors font-semibold">
                                Cancel
                            </button>
                            <button type="submit" className="px-4 py-2 rounded-lg bg-brand-primary text-gray-900 hover:bg-brand-secondary transition-colors font-semibold">
                                Save Network
                            </button>
                        </div>
                    </form>
                </Card>
            </div>
        </div>
    );
};

export default AddNetworkModal;
