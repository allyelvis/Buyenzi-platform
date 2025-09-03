
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Settings from './components/Settings';
import { DEFAULT_NETWORKS } from './constants';
import { Network } from './types';

const App: React.FC = () => {
  const [activeView, setActiveView] = useState('Dashboard');
  const [networks, setNetworks] = useState<Network[]>(DEFAULT_NETWORKS);
  const [selectedNetworkId, setSelectedNetworkId] = useState<string>(DEFAULT_NETWORKS[0].id);

  const selectedNetwork = networks.find(n => n.id === selectedNetworkId) || null;

  const handleDeleteNetwork = (networkId: string) => {
    // Prevent deleting the currently selected network
    if (networkId === selectedNetworkId) {
      alert("Cannot delete the currently active network. Please switch to another network first.");
      return;
    }
    // Prevent deleting default networks
    const networkToDelete = networks.find(n => n.id === networkId);
    if (networkToDelete && !networkToDelete.isCustom) {
        alert("Cannot delete a default network.");
        return;
    }
    setNetworks(prev => prev.filter(n => n.id !== networkId));
  };


  const renderContent = () => {
    switch (activeView) {
      case 'Dashboard':
        return <Dashboard />;
      case 'Marketplace':
        return <div className="p-8 text-white">Marketplace Content</div>;
      case 'Wallet':
        return <div className="p-8 text-white">Wallet Content</div>;
      case 'Funding':
        return <div className="p-8 text-white">Funding Content</div>;
      case 'Transactions':
        return <div className="p-8 text-white">Transactions Content</div>;
      case 'Settings':
        return <Settings 
                  networks={networks}
                  selectedNetworkId={selectedNetworkId}
                  onSelectNetwork={setSelectedNetworkId}
                  onAddNetwork={(newNetwork) => setNetworks(prev => [...prev, newNetwork])}
                  onDeleteNetwork={handleDeleteNetwork}
                />;
      default:
        return <Dashboard />;
    }
  };
  
  return (
    <div className="flex h-screen bg-gray-900 text-gray-200 font-sans">
      <Sidebar activeView={activeView} setActiveView={setActiveView} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header selectedNetwork={selectedNetwork} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-900">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default App;
