
import React, { useState } from 'react';
import Card from './Card';
import { MOCK_INTEGRATIONS } from '../constants';
import { Integration, IntegrationCategory } from '../types';
import IntegrationModal from './IntegrationModal';

const IntegrationCard: React.FC<{
    integration: Integration;
    isConnected: boolean;
    onConnect: (integration: Integration) => void;
    onDisconnect: (integrationId: string) => void;
}> = ({ integration, isConnected, onConnect, onDisconnect }) => {
    return (
        <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6 flex flex-col items-start">
            <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-4">
                    <img src={integration.logoUrl} alt={`${integration.name} logo`} className="w-12 h-12 bg-white/10 p-1 rounded-full object-contain" />
                    <h3 className="text-lg font-bold text-white">{integration.name}</h3>
                </div>
                {isConnected && (
                    <span className="text-xs font-bold text-green-400 bg-green-500/10 px-2 py-1 rounded-full">Connected</span>
                )}
            </div>
            <p className="text-gray-400 text-sm my-4 flex-grow">{integration.description}</p>
            {isConnected ? (
                <button
                    onClick={() => onDisconnect(integration.id)}
                    className="w-full mt-auto font-semibold text-red-400 bg-red-500/10 hover:bg-red-500/20 py-2.5 rounded-lg transition-colors duration-200"
                >
                    Disconnect
                </button>
            ) : (
                <button
                    onClick={() => onConnect(integration)}
                    className="w-full mt-auto font-semibold text-brand-primary bg-brand-primary/10 hover:bg-brand-primary/20 py-2.5 rounded-lg transition-colors duration-200"
                >
                    Connect
                </button>
            )}
        </div>
    );
};

const Integrations: React.FC = () => {
    const [connected, setConnected] = useState<Set<string>>(new Set(['uniswap', 'shopify']));
    const [selectedIntegration, setSelectedIntegration] = useState<Integration | null>(null);

    const handleConnect = (integration: Integration) => {
        setSelectedIntegration(integration);
    };

    const handleDisconnect = (integrationId: string) => {
        if (window.confirm('Are you sure you want to disconnect this integration?')) {
            setConnected(prev => {
                const newSet = new Set(prev);
                newSet.delete(integrationId);
                return newSet;
            });
        }
    };
    
    const onSuccessfulConnect = (integrationId: string) => {
        setConnected(prev => new Set(prev).add(integrationId));
        setSelectedIntegration(null);
    };

    const categories: IntegrationCategory[] = ['DeFi', 'Data', 'E-commerce', 'Social'];
    const groupedIntegrations = MOCK_INTEGRATIONS.reduce((acc, item) => {
        (acc[item.category] = acc[item.category] || []).push(item);
        return acc;
    }, {} as Record<IntegrationCategory, Integration[]>);

    return (
        <div className="p-4 md:p-8 space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-white">Integrations</h1>
                <p className="text-gray-400">Connect your favorite apps and services to automate your workflow.</p>
            </div>

            {categories.map(category => (
                <div key={category}>
                    <h2 className="text-2xl font-bold text-white mb-4">{category} Protocols</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {groupedIntegrations[category]?.map(integration => (
                            <IntegrationCard
                                key={integration.id}
                                integration={integration}
                                isConnected={connected.has(integration.id)}
                                onConnect={handleConnect}
                                onDisconnect={handleDisconnect}
                            />
                        ))}
                    </div>
                </div>
            ))}
            
            {selectedIntegration && (
                <IntegrationModal 
                    integration={selectedIntegration}
                    onClose={() => setSelectedIntegration(null)}
                    onConnect={onSuccessfulConnect}
                />
            )}
        </div>
    );
};

export default Integrations;
