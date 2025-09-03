
import React, { useState } from 'react';
import { Network } from '../types';
import Card from './Card';
import AddNetworkModal from './AddNetworkModal';
import { useTheme } from './ThemeProvider';

interface SettingsProps {
    networks: Network[];
    selectedNetworkId: string;
    onSelectNetwork: (id: string) => void;
    onAddNetwork: (network: Network) => void;
    onDeleteNetwork: (id: string) => void;
}

const TrashIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.134-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.067-2.09 1.02-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
    </svg>
);

const ToggleSwitch: React.FC<{ enabled: boolean; setEnabled: () => void; }> = ({ enabled, setEnabled }) => (
    <button
        type="button"
        role="switch"
        aria-checked={enabled}
        onClick={setEnabled}
        className={`${enabled ? 'bg-brand-primary' : 'bg-gray-300 dark:bg-gray-600'} relative inline-flex h-6 w-11 items-center rounded-full transition-colors flex-shrink-0`}
    >
        <span className={`${enabled ? 'translate-x-6' : 'translate-x-1'} inline-block h-4 w-4 transform rounded-full bg-white transition-transform`} />
    </button>
);


const Settings: React.FC<SettingsProps> = ({ networks, selectedNetworkId, onSelectNetwork, onAddNetwork, onDeleteNetwork }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();

    return (
        <div className="p-4 md:p-8 space-y-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Settings</h1>
            
            <Card title="Appearance">
                <div className="flex justify-between items-center">
                    <div>
                        <p className="font-semibold text-gray-800 dark:text-white">Dark Mode</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Toggle between light and dark themes.</p>
                    </div>
                    <ToggleSwitch enabled={theme === 'dark'} setEnabled={toggleTheme} />
                </div>
            </Card>

            <Card title="Network Configuration">
                <div className="space-y-4">
                    <p className="text-gray-500 dark:text-gray-400">Select the network to connect to, or add a custom RPC endpoint for private networks.</p>
                    
                    <div className="space-y-3">
                        {networks.map(network => (
                            <div key={network.id} className={`flex items-center justify-between p-4 rounded-lg border-2 transition-colors ${selectedNetworkId === network.id ? 'bg-gray-100/50 dark:bg-gray-700/50 border-brand-primary' : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700'}`}>
                                <label htmlFor={`network-${network.id}`} className="flex-1 cursor-pointer">
                                    <div className="flex items-center">
                                        <input
                                            type="radio"
                                            id={`network-${network.id}`}
                                            name="network"
                                            checked={selectedNetworkId === network.id}
                                            onChange={() => onSelectNetwork(network.id)}
                                            className="h-4 w-4 text-brand-primary bg-gray-200 dark:bg-gray-600 border-gray-300 dark:border-gray-500 focus:ring-brand-secondary"
                                        />
                                        <div className="ml-4">
                                            <p className="font-semibold text-gray-800 dark:text-white">{network.name} {network.isCustom && <span className="text-xs bg-gray-200 dark:bg-gray-600 px-2 py-0.5 rounded-full ml-2">Custom</span>}</p>
                                            <p className="text-sm text-gray-500 dark:text-gray-400 font-mono">{network.rpcUrl}</p>
                                        </div>
                                    </div>
                                </label>
                                {network.isCustom && (
                                    <button 
                                        onClick={() => onDeleteNetwork(network.id)}
                                        className="text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors p-2 rounded-full hover:bg-red-500/10"
                                        aria-label={`Delete ${network.name} network`}
                                    >
                                        <TrashIcon />
                                    </button>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="pt-4">
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="w-full font-semibold text-brand-primary bg-brand-primary/10 hover:bg-brand-primary/20 py-2.5 rounded-lg transition-colors duration-200"
                        >
                            Add Custom Network
                        </button>
                    </div>
                </div>
            </Card>
            
            {isModalOpen && (
                <AddNetworkModal 
                    onClose={() => setIsModalOpen(false)}
                    onAddNetwork={onAddNetwork}
                />
            )}
        </div>
    );
};

export default Settings;